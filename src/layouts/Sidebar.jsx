import { Form, Link, useNavigation, useSubmit } from "react-router-dom";
import { useEffect } from "react";
import { Input, Button, Icon } from "@shared";
import { ContactItem } from "@components";
import { useContactContext } from "@store/Context/ContactContext";

const Sidebar = () => {
    const contactContext = useContactContext();
    const { q } = contactContext;

    const submit = useSubmit();
    const navigation = useNavigation();
    const searching =
        navigation.location &&
        new URLSearchParams(navigation.location.search).has("q");

    useEffect(() => {
        document.getElementById("q").value = q;
    }, [q]);

    return (
        <>
            <h1>React Router Contacts</h1>
            <div>
                {/* Home */}
                <Link to="/">
                    <Icon type="home" size="35" className="fill-blue-700"/>
                </Link>

                {/* 검색하기 */}
                <Form id="search-form" role="search">
                    <Input.Box
                        id="q"
                        className={searching ? "loading" : ""}
                        aria-label="Search contacts"
                        placeholder="Search"
                        type="search"
                        name="q"
                        defaultValue={q}
                        onChange={(e) => {
                            const isFirstSearch = q == null;
                            submit(e.currentTarget.form, {
                                replace: !isFirstSearch,
                            });
                        }}
                    />
                    <div
                        id="search-spinner"
                        aria-hidden
                        hidden={!searching}
                    />
                    <div
                        className="sr-only"
                        aria-live="polite"
                    />
                </Form>

                {/* 연락처 등록 */}
                <Form method="post">
                    <Button type="submit" btnName="New" />
                </Form>
            </div>

            {/* 연락처 목록 */}
            <ContactItem />
        </>
    )
}

export default Sidebar;