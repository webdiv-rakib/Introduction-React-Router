import { useLoaderData } from "react-router";

const UserDetails = () => {
    const user = useLoaderData();
    const { name, website } = user
    return (
        <div>
            <h2>User Details Here</h2>
            <p>{name}</p>
            <p>Visit Us: {website}</p>
        </div>
    );
};

export default UserDetails;