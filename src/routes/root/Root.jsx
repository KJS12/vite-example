import { Outlet, Link, useLoaderData, Form, NavLink, useNavigation, useSubmit } from "react-router-dom";
import { useEffect } from "react";
import ContactList from "./components/ContactList";
import { Input, Button } from "@shared";

// Root 컴포넌트 정의
export default function Root() {
    const { contacts, q } = useLoaderData();
    const navigation = useNavigation();
    const submit = useSubmit();

    const searching =
        navigation.location &&
        new URLSearchParams(navigation.location.search).has("q");

    useEffect(() => {
        document.getElementById("q").value = q;
    }, [q]);

    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <div>
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
                    <Form method="post">
                        <Button type="submit" btnName="New" />
                    </Form>
                </div>

                {/* 연락처 리스트 */}
                <ContactList contacts={contacts}/>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}