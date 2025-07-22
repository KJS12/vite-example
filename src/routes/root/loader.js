import { getContacts } from "@utils/contacts";

// Root 컴포넌트 마운트 전 데이터 로딩중
export async function loader({ request }) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const contacts = await getContacts(q);
    return { contacts, q };
}