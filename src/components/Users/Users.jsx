import { useLoaderData } from "react-router";
import User from "../User/User";
import './Users.css'
const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2>Our Users:{users.length}</h2>
            <p>Our reputed users</p>
            <div className="users">
                {
                    users.map(user => <User user={user} key={user.id}></User>)
                }
            </div>
        </div>
    );
};

export default Users;