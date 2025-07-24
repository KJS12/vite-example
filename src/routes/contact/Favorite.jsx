import { useFetcher } from "react-router-dom";
import { Icon } from "@shared";

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
                {favorite ? <Icon type="starFill" /> : <Icon type="star" />}
            </button>
        </fetcher.Form>
    );
}

export default Favorite;