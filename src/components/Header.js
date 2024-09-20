import { useState, useContext } from 'react'
import { LOGO_URL } from '../utils/constants'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from '../utils/UserContext'
import { useSelector } from 'react-redux'

const Header = () => {
    let [btnName, setBtnName] = useState('Login')

    const onlineStatus = useOnlineStatus()

    const { loggedInUser } = useContext(UserContext)

    const cartItems = useSelector((store) => store.cart.items)

    return (
        <div className="flex justify-between bg-pink-100 items-center shadow-lg sm:bg-yellow-100 lg:bg-green-100">
            {/* logo */}
            <div className="logo-container">
                <img className="w-40" src={LOGO_URL} />
            </div>
            {/* Nav items   */}
            <div className="nav-items ">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online status : {onlineStatus ? '🟢' : '🔴'}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 font-bold">
                        <Link to="/cart">🛒 ({cartItems.length})</Link>
                    </li>
                    <button
                        className="login-btn"
                        onClick={() => {
                            setBtnName(btnName === 'Login' ? 'Logout' : 'Login')
                        }}
                    >
                        {btnName}
                    </button>
                    <li className="px-4">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
