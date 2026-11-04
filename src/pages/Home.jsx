import { Link } from 'react-router-dom'

function Home() {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="row align-items-center">

                    {/* HERO CONTENT */}
                    <div className="col-lg-6 hero-content">
                        <span className="hero-label">
                            Welcome to BOOKSPACE
                        </span>

                        <h1>
                            Discover Your
                            <br />
                            Next <span>Great Book.</span>
                        </h1>

                        <p>
                            Explore thousands of books, from bestsellers
                            to hidden gems, and start your next reading
                            journey today.
                        </p>

                        <Link to="/books" className="btn-shop">
                            Explore Books <span>→</span>
                        </Link>

                        <div className="hero-stat">
                            <div>
                                <strong>1,000+</strong>
                                <small>Books Available</small>
                            </div>

                            <div>
                                <strong>500+</strong>
                                <small>Happy Readers</small>
                            </div>
                        </div>
                    </div>

                    {/* HERO IMAGE */}
                    <div className="col-lg-6 hero-visual">
                        <div className="hero-circle"></div>
                        <img
                            className="hero-main-image"
                            src={`${import.meta.env.BASE_URL}img/hero-books.jpg`}
                            alt="BOOKSPACE Books"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Home
