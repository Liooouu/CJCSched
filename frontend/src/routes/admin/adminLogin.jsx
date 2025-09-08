import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const BACKEND_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Send login request to backend
      const res = await axios.post(`${BACKEND_URL}/auth/login`, { email, password });
      const user = res.data.user;

      // Check if the logged-in user is admin
      if (user.role !== "admin") {
        setError("You are not authorized to access the admin page");
        return;
      }

      // Save token and user info
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/adminDashboard");
    } catch (err) {
      console.error(err.response?.data || err.message);
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleAdminLogin}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-lg mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-lg mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
