import { Link, useParams } from 'react-router-dom'

function BookDetail({ books, addToCart }) {
    const { id } = useParams()

    const book = books.find((item) => item.id === Number(id))

    if (!book) {
        return (
            <div className="container py-5 text-center">
                <h2>Book Not Found</h2>
                <Link to="/books" className="btn btn-primary mt-3">
                    Back to Books
                </Link>
            </div>
        )
    }

    const formatPrice = (price) =>
        new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0,
        }).format(price)

    return (
        <section className="books-section">
            <div className="container">
                <Link to="/books" className="text-decoration-none">
                    ← Back to Books
                </Link>

                <div className="row align-items-center g-5 mt-3">
                    <div className="col-md-5 text-center">
                        <img
                            src={book.cover}
                            alt={book.title}
                            className="img-fluid rounded shadow"
                            style={{ maxHeight: '450px' }}
                        />
                    </div>

                    <div className="col-md-7">
            <span className="badge text-bg-primary mb-3">
              {book.genre}
            </span>

                        <h1 className="fw-bold">{book.title}</h1>

                        <p className="text-muted fs-5">
                            By {book.author}
                        </p>

                        <h3 className="text-primary fw-bold my-4">
                            {formatPrice(book.price)}
                        </h3>

                        <p>
                            Discover this book and start your next reading journey
                            with BOOKSPACE.
                        </p>

                        <button
                            className="btn btn-primary px-4 py-2"
                            onClick={() => addToCart(book)}
                        >
                            + Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookDetail
