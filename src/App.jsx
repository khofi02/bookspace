
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Books from './pages/Books'
import BookDetail from './pages/BookDetail'
import Categories from './pages/Categories'
import Cart from './pages/Cart'
import About from './pages/About'
import Footer from './components/Footer'
import books from './data/books'

function App() {
    const [cart, setCart] = useState([])
    const [bookList, setBookList] = useState(books)

    // Menambahkan buku ke keranjang
    const addToCart = (book) => {
        const selectedBook = bookList.find(
            (item) => item.id === book.id
        )

        // Cek apakah stok masih tersedia
        if (!selectedBook || selectedBook.stock <= 0) {
            alert('Maaf, stok buku habis!')
            return
        }

        // Kurangi stok buku
        setBookList((currentBooks) =>
            currentBooks.map((item) =>
                item.id === book.id
                    ? { ...item, stock: item.stock - 1 }
                    : item
            )
        )

        // Masukkan buku ke keranjang
        setCart((currentCart) => {
            const existingBook = currentCart.find(
                (item) => item.id === book.id
            )

            if (existingBook) {
                return currentCart.map((item) =>
                    item.id === book.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }

            return [...currentCart, { ...selectedBook, quantity: 1 }]
        })
    }

// Menghapus buku dari keranjang dan mengembalikan stok
    const removeFromCart = (indexToRemove) => {
        const removedBook = cart[indexToRemove]

        if (!removedBook) return

        // Kembalikan seluruh stok buku yang dihapus
        setBookList((currentBooks) =>
            currentBooks.map((book) =>
                book.id === removedBook.id
                    ? {
                        ...book,
                        stock: book.stock + removedBook.quantity
                    }
                    : book
            )
        )

        // Hapus buku dari keranjang
        setCart((currentCart) =>
            currentCart.filter((_, index) => index !== indexToRemove)
        )
    }

    // Mengubah jumlah buku
    const updateQuantity = (bookId, change) => {
        setCart((currentCart) =>
            currentCart
                .map((book) =>
                    book.id === bookId
                        ? { ...book, quantity: book.quantity + change }
                        : book
                )
                .filter((book) => book.quantity > 0)
        )
    }

    // Mengosongkan keranjang setelah checkout
    const clearCart = () => {
        setCart([])
    }

    // Menghitung jumlah seluruh buku di keranjang
    const cartCount = cart.reduce(
        (total, book) => total + book.quantity,
        0
    )

    return (
        <>
            <Navbar cartCount={cartCount} />

            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            books={bookList}
                            addToCart={addToCart}
                        />
                    }
                />

                <Route
                    path="/books"
                    element={
                        <Books
                            books={bookList}
                            addToCart={addToCart}
                        />
                    }
                />

                <Route
                    path="/books/:id"
                    element={
                        <BookDetail
                            books={bookList}
                            addToCart={addToCart}
                        />
                    }
                />

                <Route
                    path="/categories"
                    element={<Categories books={books} />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/contact"
                    element={<Contact />}
                />

                <Route
                    path="/cart"
                    element={
                        <Cart
                            cart={cart}
                            removeFromCart={removeFromCart}
                            updateQuantity={updateQuantity}
                            clearCart={clearCart}
                        />
                    }
                />

                <Route
                    path="*"
                    element={
                        <div className="container py-5">
                            <h2>Halaman tidak ditemukan</h2>
                        </div>
                    }
                />
            </Routes>

            <Footer />
        </>
    )
}

export default App