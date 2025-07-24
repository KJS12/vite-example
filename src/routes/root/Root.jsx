import { Outlet, useLoaderData} from "react-router-dom";
import { Sidebar } from "@layouts";
import { ContactContext } from "@store/Context/ContactContext";

// Root 컴포넌트 정의
export default function Root() {
    const { contacts, q } = useLoaderData();

    return (
        <>
            <div id="sidebar">
                <ContactContext.Provider value={{contacts, q}}>
                    <Sidebar />
                </ContactContext.Provider>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}