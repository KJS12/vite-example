import { Form, useLoaderData } from "react-router-dom";
import Favorite from "./Favorite";
import { ENV } from "@/env";

const avatarUrl = ENV.URL.AVATAR;
const twitterUrl = ENV.URL.TWITTER_URL;

// Contact 컴포넌트 정의
const Contact = () => {
    const {contact} = useLoaderData();

    return (
        <div id="contact">
            <div>
                <img
                    key={contact.avatar}
                    src={
                        contact.avatar ||
                        `${avatarUrl}/${contact.id}.png?size=200x200`
                    }
                />
            </div>
            <div>
                <h1>
                    {contact.first || contact.last ? (
                        <>
                            {contact.first} {contact.last}
                        </>
                    ) : (
                        <i>No Name</i>
                    )}{" "}
                    <Favorite contact={contact} />
                </h1>

                {contact.twitter && (
                    <p>
                        <a
                            target="_blank"
                            href={`${twitterUrl}/${contact.twitter}`}
                        >
                            {contact.twitter}
                        </a>
                    </p>
                )}

                {contact.notes && <p>{contact.notes}</p>}

                <div>
                    <Form action="edit">
                        <button type="submit">Edit</button>
                    </Form>
                    <Form
                        method="post"
                        action="destroy"
                        onSubmit={(event) => {
                            if (
                                !confirm(
                                    "Please confirm you want to delete this record."
                                )
                            ) {
                                event.preventDefault();
                            }
                        }}
                    >
                        <button type="submit">Delete</button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Contact;