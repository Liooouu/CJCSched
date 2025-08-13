import Navbar from "../components/navbar";
import Footer from '../components/footer';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";

export const Login = () => {
    const [showPassword, IsShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/auth/login", { email, password });
            localStorage.setItem("token", response.data.token); // Save JWT token
            navigate("/admin");
        } catch (err) {
            setError(err.response?.data?.message || "Login failed");
        }
    };

    return (
        <>
        <Navbar/>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-l from-indigo-400 to-indigo-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-15 lg:gap-30 w-full max-w-screen-xl p-6 font-montserrat">

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
                        
                        <button type="button" className="w-full flex items-center justify-center gap-2 text-lg border rounded-xl border-gray-300 py-2 px-4 rounded-mg hover:bg-gray-100 transition cursor-pointer">
                            <FcGoogle className="w-5 h-5" />
                            <span>Log in with Google</span>
                        </button>

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
                            <button type="button" onClick={() => IsShowPassword(!showPassword)} className="absolute inset-y-0 right-3 flex items-center text-gray-500">
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
