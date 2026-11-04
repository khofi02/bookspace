import { useState } from 'react'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const [submitted, setSubmitted] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormData((currentData) => ({
            ...currentData,
            [name]: value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        setSubmitted(true)

        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
    }

    return (
        <section className="books-section">
            <div className="container">

                <div className="text-center mb-5">
                    <span className="section-label">GET IN TOUCH</span>
                    <h1 className="fw-bold mt-2">Contact Us</h1>
                    <p className="text-muted">
                        Have a question? We'd love to hear from you.
                    </p>
                </div>

                <div className="row g-4">

                    <div className="col-md-5">
                        <div className="p-4 rounded-4 h-100"
                             style={{ backgroundColor: '#EAF2FF' }}>

                            <h3 className="fw-bold mb-4">
                                Let's Talk
                            </h3>

                            <p className="text-muted">
                                Feel free to contact us if you have questions
                                about our books or services.
                            </p>

                            <div className="mt-4">
                                <h6 className="fw-bold">📧 Email</h6>
                                <p className="text-muted">
                                    hello@bookspace.com
                                </p>
                            </div>

                            <div className="mt-4">
                                <h6 className="fw-bold">📍 Address</h6>
                                <p className="text-muted">
                                    BOOKSPACE Online Bookstore
                                </p>
                            </div>

                            <div className="mt-4">
                                <h6 className="fw-bold">⏰ Working Hours</h6>
                                <p className="text-muted">
                                    Monday - Saturday<br />
                                    09.00 - 17.00
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-7">
                        <div className="card border-0 shadow-sm rounded-4 p-4">

                            <h3 className="fw-bold mb-4">
                                Send Us a Message
                            </h3>

                            {submitted && (
                                <div className="alert alert-success">
                                    Your message has been submitted successfully!
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Email Address
                                    </label>
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
                                    <label className="form-label">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        className="form-control"
                                        placeholder="Enter message subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        className="form-control"
                                        rows="5"
                                        placeholder="Write your message..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary px-4"
                                >
                                    Send Message
                                </button>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact
