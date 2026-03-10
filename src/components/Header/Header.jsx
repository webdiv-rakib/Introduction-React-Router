import { Link } from 'react-router';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav>
                <h2>Menu</h2>
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">About Us</Link>

            </nav>
        </div>
    );
};

export default Header;