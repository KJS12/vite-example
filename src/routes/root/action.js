import { redirect } from "react-router-dom";
import { createContact } from "../../utils/contacts";

// 연락처 만들기
export async function action() {
    const contact = await createContact();
    return redirect(`/contacts/${contact.id}/edit`);
}