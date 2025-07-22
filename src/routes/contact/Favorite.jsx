import { useFetcher } from "react-router-dom";

// 즐겨찾기 컴포넌트
const Favorite = ({ contact }) => {
    const fetcher = useFetcher();
    const favorite = fetcher.formData
        ? fetcher.formData.get("favorite") === "true"
        : contact.favorite;

    return (
        <fetcher.Form method="post">
            <button
                name="favorite"
                value={favorite ? "false" : "true"}
                aria-label={ favorite ? "Remove from favorites" : "Add to favorites" }
            >
                {favorite ? "★" : "☆"}
            </button>
        </fetcher.Form>
    );
}

export default Favorite;