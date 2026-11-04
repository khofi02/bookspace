import { Link } from 'react-router-dom'

function BookCard({ book, addToCart }) {
    const formatPrice = (price) =>
        new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0,
        }).format(price)

    return (
        <div className="book-card">
            <Link to={`/books/${book.id}`} className="book-cover">
                <img src={book.cover} alt={book.title} />
            </Link>

            <div className="book-info">
                <span className="book-genre">{book.genre}</span>

                <h3>{book.title}</h3>
                <p>{book.author}</p>

                <div className="book-price">
                    {formatPrice(book.price)}
                </div>

                <button
                    className="btn-add-cart"
                    onClick={() => addToCart(book)}
                >
                    + Add to Cart
                </button>
            </div>
        </div>
    )
}

export default BookCard
