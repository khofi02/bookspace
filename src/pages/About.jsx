
import { Link } from 'react-router-dom'

function About() {
    return (
        <section className="books-section">
            <div className="container">

                <div className="text-center mb-5">
                    <span className="section-label">GET TO KNOW US</span>
                    <h1 className="fw-bold mt-2">About BOOKSPACE</h1>
                    <p className="text-muted">
                        Your space to discover, explore, and enjoy books.
                    </p>
                </div>

                {/* ABOUT CONTENT */}
                <div className="row g-4 mb-5 align-items-stretch">

                    {/* LEFT: OUR MISSION */}
                    <div className="col-lg-6">
                        <div className="about-combined-card h-100">
                            <div className="about-combined-image">
                                <img
                                    src={`${import.meta.env.BASE_URL}img/mission.jpg`}
                                    alt="BOOKSPACE Book Collection"
                                />
                            </div>

                            <div className="about-combined-content">
                                <h3>Our Mission</h3>
                                <p>
                                    To provide an easy and comfortable online
                                    shopping experience for readers to discover
                                    books from different categories.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: OUR STORY AND VISION */}
                    <div className="col-lg-6 d-flex flex-column gap-4">

                        {/* OUR STORY */}
                        <div className="about-story-card">
                            <span className="section-label">OUR STORY</span>
                            <h2 className="fw-bold mt-2">
                                A Place for Every Book Lover
                            </h2>
                            <p className="text-muted">
                                BOOKSPACE is an online bookstore created to make
                                discovering and finding books easier and more enjoyable.
                            </p>
                            <p className="text-muted mb-0">
                                We believe every book has a story, and every reader
                                deserves a space to find their next favorite book.
                            </p>
                        </div>

                        {/* OUR VISION */}
                        <div className="about-vision-card">
                            <div className="display-5 mb-3">🌟</div>
                            <h3 className="fw-bold">Our Vision</h3>
                            <p className="text-muted mb-0">
                                To become a welcoming digital space that
                                encourages reading and makes books accessible
                                to more people.
                            </p>
                        </div>

                    </div>
                </div>

                <div className="text-center py-4">
                    <h2 className="fw-bold">Find Your Next Favorite Book</h2>
                    <p className="text-muted">
                        Explore our collection and start your reading journey.
                    </p>
                    <Link to="/books" className="btn btn-primary px-4 py-2">
                        Explore Books
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default About
