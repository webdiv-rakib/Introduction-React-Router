import { Link, useNavigate } from "react-router";

const User = ({ user }) => {
    const { id, name, email, phone } = user;
    const userStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
    }
    const navigate = useNavigate();
    const handleSeeDetails = () => {
        navigate(`/user/${id}`);
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
            <button onClick={handleSeeDetails}>See Details</button>

        </div>
    );
};

export default User;