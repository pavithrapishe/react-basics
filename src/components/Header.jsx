import { LOGO_URL } from '../utils/constants'

const Header = () => {
    return (
        <div className="header">
            {/* logo */}
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            {/* Nav items   */}
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Contact us</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
