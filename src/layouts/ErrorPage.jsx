import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    const {data, internal, status, statusText, message} = error;
    // console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p><i>{status}</i></p>
            <p>
                <i>{statusText || message}</i>
            </p>
        </div>
    );
}

export default ErrorPage;