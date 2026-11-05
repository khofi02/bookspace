import { NavLink, Link } from 'react-router-dom'

function Navbar({ cartCount = 0, user, onLogout }) {
    return (
        <nav className="navbar navbar-expand-lg book-navbar">
            <div className="container">

                {/* LOGO */}
                <Link className="navbar-brand brand-logo" to="/">
                    <span className="brand-icon">B</span>
                    BOOKSPACE
                </Link>

                {/* MOBILE BUTTON */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#bookNavbar"
                    aria-controls="bookNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* NAVIGATION */}
                <div className="collapse navbar-collapse" id="bookNavbar">
                    <ul className="navbar-nav mx-auto">

                        <li className="nav-item">
                            <NavLink to="/" end className={({ isActive }) =>
                                `nav-link ${isActive ? 'active' : ''}`
                            }>
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/books" className={({ isActive }) =>
                                `nav-link ${isActive ? 'active' : ''}`
                            }>
                                Books
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/categories" className={({ isActive }) =>
                                `nav-link ${isActive ? 'active' : ''}`
                            }>
                                Categories
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/about" className={({ isActive }) =>
                                `nav-link ${isActive ? 'active' : ''}`
                            }>
                                About
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/contact" className={({ isActive }) =>
                                `nav-link ${isActive ? 'active' : ''}`
                            }>
                                Contact
                            </NavLink>
                        </li>

                    </ul>

                    {/* NAVBAR ACTIONS */}
                    <div className="navbar-actions">

                        <Link to="/cart" className="cart-button">
                            🛒 <span>{cartCount}</span>
                        </Link>

                        {user ? (
                            <>
                                <span className="user-email">
                                    {user.email}
                                </span>

                                <button
                                    className="btn-login"
                                    onClick={onLogout}
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="btn-login">
                                    Login
                                </Link>

                                <Link to="/register" className="btn-register">
                                    Register
                                </Link>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
