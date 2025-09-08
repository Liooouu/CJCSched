import Navbar from "../../components/navbar";
import Footer from '../../components/footer';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { GoogleLogin } from '@react-oauth/google';
import axios from "axios";

export const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const BACKEND_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

    // Email/password login
    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const response = await axios.post(`${BACKEND_URL}/auth/login`, { email, password });
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));

            if(response.data.user.email === "andreimanacop1@gmail.com"){
                navigate('/admin')}
            else navigate('/homepage')
            
        } catch (err) {
            console.error("Login error:", err.response?.data || err.message);
            setError(err.response?.data?.message || "Login failed");
        }
    };

    // Google login
    const handleGoogleSuccess = async (credentialResponse) => {
        console.log("Google ID Token:", credentialResponse.credential); // 👈 Log the token
        // decode first part of token to see claims
        console.log("Decoded Payload:", JSON.parse(atob(credentialResponse.credential.split('.')[1])));

        setError("");
        try {
            const res = await axios.post(`${BACKEND_URL}/auth/google`, {
            token: credentialResponse.credential,
            });
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            navigate("/homepage");
        } catch (err) {
            console.error("Google login error:", err.response?.data || err.message);
            setError(err.response?.data?.message || "Google login failed");
        }
        };


    const handleGoogleError = () => {
        setError("Google login failed");
    };

    return (
        <>
        <Navbar/>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-l from-indigo-400 to-indigo-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-screen-xl p-6 font-montserrat">

                <div className="text-white flex flex-col justify-center items-center text-center">
                    <h1 className="text-3xl lg:text-4xl font-bold mb-4">Enter your account</h1>
                    <p className="text-xl lg:text-2xl mb-6">Please log in using your personal information to stay connected with us.</p>
                    <div className="text-sm flex gap-4 mt-0 md:mt-64">
                        <span>Connect with us: </span>
                        <a href="https://www.facebook.com/cjcrsg" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">Facebook</a>
                        <a href="mailto:cjcrsgonline@gmail.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">Gmail</a>
                        <a href="mailto:cjcrsgonline@gmail.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">Contact</a>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-md w-full max-w-lg mx-auto">
                    <h2 className="text-2xl font-semibold text-center mb-6">Log In</h2>
                    <form onSubmit={handleLogin} className="space-y-4 text-sm lg:text-md">

                        {/* Google Login Button - full width, same design */}
                        <div className="flex justify-center mb-4">
                            <GoogleLogin
                                onSuccess={handleGoogleSuccess}
                                onError={handleGoogleError}
                                width="100%"       // keep full width
                                size="large"       // large size
                                text="continue_with"
                            />
                        </div>

                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="w-full px-4 py-2 border rounded-lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <div className="relative">
                            <input 
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password" 
                                className="w-full px-4 py-2 border rounded-lg"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                                {showPassword ? <Eye/> : <EyeOff/>}
                            </button>
                        </div>

                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <div className="text-right text-sm lg:text-md">
                            <div className="text-indigo-500 hover:underline">
                                <Link to="/messageReset">Forgot password?</Link>  
                            </div>
                        </div>

                        <button type="submit" className="w-full bg-indigo-400 text-white text-lg font-semibold py-2 rounded-xl hover:bg-indigo-500 transition cursor-pointer">
                            Log In
                        </button>

                        <p className="text-sm lg:text-md text-center">
                            Don't have an account?
                            <Link to="/Signup" className="text-indigo-600 hover:underline px-1">Sign up</Link> 
                        </p>
                    </form>
                </div>
            </div> 
        </div>
        <Footer />
        </>
    );
};
