import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
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
    const [user, setUser] = useState(null)

    const handleLogin = (email) => {
        setUser({ email })
    }
    const handleRegister = (name, email) => {
        setUser({ name, email })
    }

    // Menambahkan buku ke keranjang
    const addToCart = (book) => {
        const selectedBook = bookList.find(
            (item) => item.id === book.id
        )

        if (!selectedBook || selectedBook.stock <= 0) {
            alert('Maaf, stok buku habis!')
            return
        }

        setBookList((currentBooks) =>
            currentBooks.map((item) =>
                item.id === book.id
                    ? { ...item, stock: item.stock - 1 }
                    : item
            )
        )

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

        setCart((currentCart) =>
            currentCart.filter(
                (_, index) => index !== indexToRemove
            )
        )
    }

    // Mengubah jumlah buku sekaligus menyesuaikan stok
    const updateQuantity = (bookId, change) => {
        const selectedBook = bookList.find(
            (book) => book.id === bookId
        )

        if (change > 0 && (!selectedBook || selectedBook.stock <= 0)) {
            alert('Maaf, stok buku habis!')
            return
        }

        setBookList((currentBooks) =>
            currentBooks.map((book) =>
                book.id === bookId
                    ? { ...book, stock: book.stock - change }
                    : book
            )
        )

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
            <Navbar
                cartCount={cartCount}
                user={user}
                onLogout={() => setUser(null)}
            />
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
                    element={<Categories books={bookList} />}
                />

                <Route path="/about" element={<About />} />

                <Route path="/contact" element={<Contact />} />

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
                    path="/login"
                    element={<Login onLogin={handleLogin} />}
                />

                <Route
                    path="/register"
                    element={<Register onRegister={handleRegister} />}
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
