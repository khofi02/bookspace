
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login({ onLogin }) {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formData.email || !formData.password) {
            setError('Please fill in all fields.')
            return
        }

        onLogin(formData.email)
        navigate('/')
    }

    return (
        <div className="auth-page">
            <div className="auth-card">
                <Link to="/" className="auth-logo">
                    <span className="brand-icon">B</span>
                    BOOKSPACE
                </Link>

                <div className="auth-heading">
                    <h2>Welcome Back!</h2>
                    <p>Login to continue your reading journey.</p>
                </div>

                {error && (
                    <div className="alert alert-danger">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>

                        <div className="password-wrapper">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                className="form-control"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                            />

                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </div>

                    <button type="submit" className="auth-submit">
                        Login
                    </button>
                </form>

                <p className="auth-switch">
                    Don't have an account?{' '}
                    <Link to="/register">Register</Link>
                </p>
            </div>
        </div>
    )
}

export default Login
