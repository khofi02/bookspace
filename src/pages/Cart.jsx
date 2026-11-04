import { useState } from 'react'
import { Link } from 'react-router-dom'

function Cart({ cart, removeFromCart, updateQuantity, clearCart }) {
    const [checkoutOpen, setCheckoutOpen] = useState(false)
    const [orderSuccess, setOrderSuccess] = useState(false)
    const [orderNumber, setOrderNumber] = useState('')

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        payment: '',
    })

    const formatPrice = (price) =>
        new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0,
        }).format(price)

    const totalPrice = cart.reduce(
        (total, book) => total + book.price * book.quantity,
        0
    )

    const totalItems = cart.reduce(
        (total, book) => total + book.quantity,
        0
    )

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((current) => ({
            ...current,
            [name]: value,
        }))
    }

    const handleCheckout = (e) => {
        e.preventDefault()

        setOrderNumber(`BS-${Date.now()}`)

        // Kosongkan keranjang setelah pesanan dibuat
        clearCart()

        // Tutup form dan tampilkan notifikasi berhasil
        setCheckoutOpen(false)
        setOrderSuccess(true)
    }

    return (
        <section className="books-section">
            <div className="container">
                <div className="section-heading">
                    <div>
                        <span className="section-label">YOUR SHOPPING</span>
                        <h2>Shopping Cart</h2>
                        <p>Review the books you want to purchase.</p>
                    </div>
                </div>

                {cart.length === 0 ? (
                    <div className="text-center py-5">
                        <h4>Your cart is empty</h4>
                        <p className="text-muted">
                            You haven't added any books yet.
                        </p>

                        <Link to="/books" className="btn btn-primary mt-2">
                            Explore Books
                        </Link>
                    </div>
                ) : (
                    <div className="row g-4">
                        <div className="col-lg-8">
                            {cart.map((book, index) => (
                                <div className="card mb-3 p-3" key={book.id}>
                                    <div className="row align-items-center g-3">
                                        <div className="col-3 col-md-2">
                                            <img
                                                src={book.cover}
                                                alt={book.title}
                                                className="img-fluid rounded"
                                            />
                                        </div>

                                        <div className="col-6 col-md-7">
                                            <h5>{book.title}</h5>

                                            <p className="text-muted mb-1">
                                                {book.author}
                                            </p>

                                            <strong>
                                                {formatPrice(book.price * book.quantity)}
                                            </strong>

                                            <div className="d-flex align-items-center gap-2 mt-2">
                                                <span className="text-muted">
                                                    Quantity:
                                                </span>

                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    onClick={() =>
                                                        updateQuantity(book.id, -1)
                                                    }
                                                >
                                                    −
                                                </button>

                                                <strong>{book.quantity}</strong>

                                                <button
                                                    className="btn btn-outline-primary btn-sm"
                                                    onClick={() =>
                                                        updateQuantity(book.id, 1)
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        <div className="col-3 text-end">
                                            <button
                                                className="btn btn-outline-danger btn-sm"
                                                onClick={() =>
                                                    removeFromCart(index)
                                                }
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="col-lg-4">
                            <div className="card p-4">
                                <h5>Order Summary</h5>

                                <div className="d-flex justify-content-between my-3">
                                    <span>Total Items</span>
                                    <strong>{totalItems}</strong>
                                </div>

                                <div className="d-flex justify-content-between mb-3">
                                    <span>Total Price</span>
                                    <strong>{formatPrice(totalPrice)}</strong>
                                </div>

                                <button
                                    className="btn btn-primary w-100"
                                    onClick={() => setCheckoutOpen(true)}
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* CHECKOUT POPUP */}
            {checkoutOpen && (
                <div style={overlayStyle}>
                    <div style={modalStyle}>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div>
                                <h4 className="mb-1">Checkout</h4>
                                <p className="text-muted mb-0">
                                    Complete your purchase information.
                                </p>
                            </div>

                            <button
                                type="button"
                                className="btn-close"
                                onClick={() => setCheckoutOpen(false)}
                            />
                        </div>

                        <hr />

                        <div className="d-flex justify-content-between mb-3">
                            <span>Total Items</span>
                            <strong>{totalItems} books</strong>
                        </div>

                        <div className="d-flex justify-content-between mb-3">
                            <span>Total Payment</span>
                            <strong className="text-primary">
                                {formatPrice(totalPrice)}
                            </strong>
                        </div>

                        <form onSubmit={handleCheckout}>
                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    className="form-control"
                                    placeholder="Enter your full name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    className="form-control"
                                    placeholder="Enter your phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    Shipping Address
                                </label>
                                <textarea
                                    name="address"
                                    className="form-control"
                                    rows="3"
                                    placeholder="Enter your complete address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="form-label">
                                    Payment Method
                                </label>
                                <select
                                    name="payment"
                                    className="form-select"
                                    value={formData.payment}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select payment method</option>
                                    <option value="Bank Transfer">
                                        Bank Transfer
                                    </option>
                                    <option value="E-Wallet">E-Wallet</option>
                                    <option value="Cash on Delivery">
                                        Cash on Delivery
                                    </option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                            >
                                Place Order
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* SUCCESS POPUP */}
            {orderSuccess && (
                <div style={overlayStyle}>
                    <div style={{ ...modalStyle, maxWidth: '430px' }}>
                        <div className="text-center py-3">
                            <div
                                className="text-success mb-3"
                                style={{ fontSize: '60px' }}
                            >
                                ✓
                            </div>

                            <h3 className="text-success">
                                Order Successful!
                            </h3>

                            <p className="text-muted">
                                Your order has been successfully created.
                            </p>

                            <div className="bg-light rounded p-3 my-4">
                                <small className="text-muted">
                                    Your Order Number
                                </small>
                                <h5 className="mb-0">{orderNumber}</h5>
                            </div>

                            <p className="small text-muted">
                                Thank you for shopping at BOOKSPACE!
                                This is a demo order. No actual payment
                                has been processed.
                            </p>

                            <button
                                className="btn btn-primary w-100 mt-2"
                                onClick={() => setOrderSuccess(false)}
                            >
                                Continue Shopping
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

const overlayStyle = {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    zIndex: 9999,
}

const modalStyle = {
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: '550px',
    maxHeight: '90vh',
    overflowY: 'auto',
    borderRadius: '16px',
    padding: '28px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
}

export default Cart
