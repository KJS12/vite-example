import { updateContact } from "../../utils/contacts";

// form action
export async function action({ request, params }) {
    const formData = await request.formData();
    return updateContact(params.contactId, {
        favorite: formData.get("favorite") === "true",
    });
}