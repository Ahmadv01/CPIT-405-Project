import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./[local]/ProtectedRoute.jsx";
import App from "./[local]/(protected)/App.jsx";
import Login from "./[local]/(auth)/login.jsx";
import Register from "./[local]/(auth)/register.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/main" element={<ProtectedRoute><App /></ProtectedRoute>} />
                <Route path="*" element={<Login />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
