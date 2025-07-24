import { NavLink } from "react-router-dom";
import { useContactContext } from "@store/Context/ContactContext";
import { Icon } from "@shared";

// 연락처 목록
const ContactItem = () => {
    const contactContext = useContactContext();
    const { contacts } = contactContext;

    return (
        <nav>
            {
                contacts.length ? (
                    <ul>
                        {contacts.map((contact) => (
                            <li key={contact.id}>
                                <NavLink
                                    to={`/contacts/${contact.id}`}
                                    className={
                                        navigation.state === "loading" ? "loading" : ""
                                    }
                                >
                                    {
                                        contact.first || contact.last ? (
                                            <>{contact.first} {contact.last}</>
                                        ) : (
                                            <i>No Name</i>
                                        )
                                    }{" "}
                                    {contact.favorite && <span><Icon type="starFill" /></span>}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>
                        <i>No contacts</i>
                    </p>
                )
            }
        </nav>
    )
}

export default ContactItem;