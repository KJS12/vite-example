import { getContact } from "@utils/contacts";

// loader
export async function loader({ params }) {
    const contact = await getContact(params.contactId);
    if(!contact) {
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        });
    }
    return { contact };
}