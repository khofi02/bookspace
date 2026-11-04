import { useState } from 'react'
import BookCard from '../components/BookCard'
import { useSearchParams, Link } from 'react-router-dom'

function Books({ books, addToCart }) {
    const [searchParams, setSearchParams] = useSearchParams()
    const [search, setSearch] = useState('')

    // Mengambil kategori langsung dari URL
    const selectedGenre = searchParams.get('genre') || 'All'

    // Mengubah kategori sekaligus memperbarui URL
    const handleGenreChange = (event) => {
        const genre = event.target.value

        if (genre === 'All') {
            setSearchParams({})
        } else {
            setSearchParams({ genre })
        }
    }

    // Mengambil daftar genre yang tersedia
    const genres = [
        'All',
        ...new Set(books.map((book) => book.genre))
    ]

    // Mencari buku berdasarkan judul, penulis, dan genre
    const filteredBooks = books.filter((book) => {
        const keyword = search.toLowerCase()

        const matchesSearch =
            book.title.toLowerCase().includes(keyword) ||
            book.author.toLowerCase().includes(keyword)

        const matchesGenre =
            selectedGenre === 'All' || book.genre === selectedGenre

        return matchesSearch && matchesGenre
    })

    return (
        <section className="books-section">
            <div className="container">
                <div className="section-heading">
                    <div>
                        {selectedGenre !== 'All' && (
                            <div className="mb-4">
                                <Link
                                    to="/categories"
                                    className="btn btn-outline-primary"
                                >
                                    ← Back to Categories
                                </Link>
                            </div>
                        )}
                        <span className="section-label">OUR COLLECTION</span>
                        <h2>
                            {selectedGenre === 'All'
                                ? 'Explore All Books'
                                : `${selectedGenre} Books`}
                        </h2>

                        <p>Find your next favorite book at BOOKSPACE.</p>
                    </div>
                </div>

                <div className="row g-3 mb-4">
                    <div className="col-md-7">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by title or author..."
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                        />
                    </div>

                    <div className="col-md-5">
                        <select
                            className="form-select"
                            value={selectedGenre}
                            onChange={handleGenreChange}
                        >
                            {genres.map((genre) => (
                                <option key={genre} value={genre}>
                                    {genre}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <p className="text-muted mb-4">
                    Showing {filteredBooks.length} books
                </p>

                <div className="row g-4">
                    {filteredBooks.length > 0 ? (
                        filteredBooks.map((book) => (
                            <div className="col-6 col-md-4 col-lg-3" key={book.id}>
                                <BookCard
                                    book={book}
                                    addToCart={addToCart}
                                />
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center py-5">
                            <h4>No books found</h4>
                            <p className="text-muted">
                                Try another title, author, or genre.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Books
