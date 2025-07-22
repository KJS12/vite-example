import { redirect } from "react-router-dom";
import { deleteContact } from "@utils/contacts";

// Contact Delete Action
export async function action({ params }) {
    // throw new Error("oh dang!");
    await deleteContact(params.contactId);
    return redirect("/");
}