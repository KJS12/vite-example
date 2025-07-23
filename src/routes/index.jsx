import { ENV } from "@/env";

export default function Index() {
    return (
        <p id="zero-state">
            This is a demo for React Router.
            <br />
            Check out{" "}
            <a href={`${ENV.URL.REACT_ROUTER}`}>
                the docs at reactrouter.com
            </a>
            .
        </p>
    );
}
