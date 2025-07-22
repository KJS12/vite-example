import { redirect } from "react-router-dom";
import { updateContact } from "@utils/contacts";

// formData를 사용하여 연락처 업데이트
export async function action({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateContact(params.contactId, updates);

    return redirect(`/contacts/${params.contactId}`);
}