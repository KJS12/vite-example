import { Form, useLoaderData, useNavigate } from "react-router-dom";
import { Input, Textarea, Button } from "@shared";

// Contact Edit 컴포넌트 정의
const EditContact = () => {
    const { contact } = useLoaderData();
    const navigate = useNavigate();

    return (
        <Form method="post" id="contact-form">
            <p>
                <span>Name</span>
                <Input.Box
                    placeholder="First"
                    aria-label="First name"
                    name="first"
                    defaultValue={contact?.first}
                />
                <Input.Box
                    placeholder="Last"
                    aria-label="Last name"
                    name="last"
                    defaultValue={contact?.last}
                />
            </p>
            <Input.Label
                title="Twitter"
                name="twitter"
                placeholder="@jack"
                defaultValue={contact?.twitter}
            />
            <Input.Label
                title="Avatar URL"
                placeholder="https://example.com/avatar.jpg"
                aria-label="Avatar URL"
                name="avatar"
                defaultValue={contact?.avatar}
            />
            <Textarea.Label
                title="Notes"
                name="notes"
                defaultValue={contact?.notes}
            />
            <p>
                <Button
                    type="submit"
                    btnName="Save"
                />
                <Button
                    btnName="Cancel"
                    onClick={() => { navigate(-1); }}
                />
            </p>
        </Form>
    );
}

export default EditContact;