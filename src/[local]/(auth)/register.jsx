"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doCreateUserWithEmailAndPassword, doSignInWithGoogle } from "../../firebase/auth";
import "./auth.css"; // import the CSS

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await doCreateUserWithEmailAndPassword(email, password);
            navigate("/main");
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleRegister = async () => {
        setError("");
        try {
            await doSignInWithGoogle();
            navigate("/main");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="auth-container">
            <h2>Register</h2>
            {error && <p className="auth-error">{error}</p>}

            <form onSubmit={handleRegister}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>

            <hr />

            <button onClick={handleGoogleRegister}>Register with Google</button>
            <p>
                Already have an account? <a href="/login">Login</a>
            </p>
        </div>
    );
}
