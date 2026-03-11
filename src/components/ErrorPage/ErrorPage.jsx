import { useNavigate, useRouteError } from "react-router";

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
    console.log(error);
    return (
        <div>
            <h2>Oops!!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page Not Found</h3>
                    <p>Go back where you from</p>
                    <button onClick={handleGoBack}>Go Back</button>
                </div>
            }
        </div>
    );
};

export default ErrorPage;