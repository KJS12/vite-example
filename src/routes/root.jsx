import { Outlet, Link, useLoaderData, Form, redirect, NavLink, useNavigation, useSubmit } from "react-router-dom";
import { getContacts, createContact } from "../contacts";
import { useEffect } from "react";

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
                        <input
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
                        <button type="submit">New</button>
                    </Form>
                </div>
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
                                                    <>
                                                        {contact.first} {contact.last}
                                                    </>
                                                ) : (
                                                    <i>No Name</i>
                                                )
                                            }{" "}
                                            {contact.favorite && <span>★</span>}
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
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}

// Root 컴포넌트 마운트 전 데이터 로딩중
export async function loader({ request }) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const contacts = await getContacts(q);
    return { contacts, q };
}

// 연락처 만들기
export async function action() {
    const contact = await createContact();
    return redirect(`/contacts/${contact.id}/edit`);
}