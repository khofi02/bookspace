import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bookspace-footer">
            <div className="container">
                <div className="row g-4 py-5">

                    <div className="col-lg-4 col-md-6">
                        <h3 className="footer-brand">
                            BOOKSPACE<span>.</span>
                        </h3>

                        <p className="footer-description">
                            Your space to discover, explore, and enjoy books.
                            Find your next favorite story with BOOKSPACE.
                        </p>
                    </div>

                    <div className="col-lg-2 col-md-6">
                        <h5>Quick Links</h5>

                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/books">Books</Link></li>
                            <li><Link to="/categories">Categories</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h5>Customer Service</h5>

                        <ul className="footer-links">
                            <li><Link to="/cart">Shopping Cart</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h5>Contact Information</h5>

                        <ul className="footer-contact">
                            <li>📧 hello@bookspace.com</li>
                            <li>📚 BOOKSPACE Online Bookstore</li>
                            <li>🕒 Monday - Saturday</li>
                        </ul>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>
                        © {new Date().getFullYear()} BOOKSPACE.
                        All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
