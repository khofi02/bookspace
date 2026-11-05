
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

                <p className="book-stock">
                    Stok: {book.stock} buku
                </p>

                <button
                    className="btn-add-cart"
                    onClick={() => addToCart(book)}
                    disabled={book.stock <= 0}
                >
                    {book.stock > 0 ? '+ Add to Cart' : 'Stok Habis'}
                </button>
            </div>
        </div>
    )
}

export default BookCard
