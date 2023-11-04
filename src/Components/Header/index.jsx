import './Header.css';
import logo from '../../assets/logo.png';
import DropdownMenu from '../Dropdown';

const Header = () => {
    return (
        <div className="header-container">
            <a href="/" className="header-logo">
                <img src={logo} alt="YourBrand Logo" />
            </a>
                <a href='/' className='title'>
                Naughty Camel
                </a>
            <nav className="header-nav">
                <a href="/MyProjects" className="header-nav-item">My Projects<DropdownMenu /></a>
            </nav>
        </div>
    );
}

export default Header;