import { Link } from 'react-router-dom'

function Categories({ books }) {
    const categories = [...new Set(books.map((book) => book.genre))]

    // Lokasi gambar untuk setiap kategori
    const categoryImages = {
        'Self Development': '/img/sd.jpg',
        Finance: '/img/finance.jpg',
        Science: '/img/science.jpg',
        Technology: '/img/technology.jpg',
        Law: '/img/law.jpg',
        Fiction: '/img/fiction.jpg',
        Religion: '/img/religion.jpg',
        Leanguage: '/img/leanguage.jpg'
    }

    return (
        <section className="books-section">
            <div className="container">
                <div className="section-heading">
                    <div>
                        <span className="section-label">
                            BROWSE COLLECTION
                        </span>
                        <h2>Book Categories</h2>
                        <p>
                            Explore books based on your favorite categories.
                        </p>
                    </div>
                </div>

                <div className="row g-4">
                    {categories.map((category) => {
                        const totalBooks = books.filter(
                            (book) => book.genre === category
                        ).length

                        return (
                            <div
                                className="col-6 col-md-4 col-lg-3"
                                key={category}
                            >
                                <Link
                                    to={`/books?genre=${encodeURIComponent(category)}`}
                                    className="category-card"
                                >
                                    <div className="category-image">
                                        <img
                                            src={categoryImages[category]}
                                            alt={`${category} Books`}
                                        />
                                    </div>

                                    <div className="category-info">
                                        <h5>{category}</h5>
                                        <p>{totalBooks} Books</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Categories