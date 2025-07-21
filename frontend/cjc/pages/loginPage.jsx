import { LogNavbar } from "../components/logNavbar";
import {FcGoogle} from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export const Login = () => {
    const [showPassword, IsShowPassword] = useState(false)


    return(
    <>

     {/*this side is for texts along with navbar*/}

      <LogNavbar/>
       <div className="min-h-screen flex items-center justify-center bg-gradient-to-l from-indigo-300 to-indigo-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap- w-full max-w-5xl p-6">

            <div className="text-white flex flex-col justify-center">
                <h1 className="text-4xl font-bold mb-4">Enter Your Account</h1>
                <p className="mb-6 text-lg">Please log in using your personal information to stay connected to us</p>
                <div className="text-sm flex gap-4">
                    <span>Connect with us: </span>
                        <a 
                        href="https://www.facebook.com/cjcrsg" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-blue-300"
                        >
                            Facebook
                        </a>
                        <a 
                        href="#" 
                        target="_blank"
                        className="underline hover:text-blue-300"
                        >
                            Gmail
                        </a>
                        <a 
                        href="#" 
                        target="_blank"
                        className="underline hover:text-blue-300"
                        >
                            Contact
                        </a>
                </div>
            </div>

            {/*this side is for log in form*/}

            <div className="bg-white rounded-lg p-8 shadow-md w-full max-w-md mx-auto">
                <h2 className="text-xl font-bold text-center mb-6">Login</h2>
                <form className="space-y-4">
                    
                    {/*Button for google*/}

                    <button 
                    type="button"
                    className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 px-4 rounded-mg hover:bg-gray-100 transition"
                    >
                        <FcGoogle className="w-5 h-5" />
                        <span>Log in with google</span>
                    </button>
                    
                    {/*input field for email*/}

                    <input 
                    type="email" 
                    placeholder="Email:" 
                    className="w-full px-4 py-2 border rounded-md"
                    /> 

                    {/*input field for password*/}
                    {/*used ternary operator and usestate. ternary operator (?) for single handed if else*/}

                    <div className="relative">
                    <input 
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password:" 
                    className="w-full px-4 py-2 border rounded-md"
                    /> 

                    <button
                    type="button"
                    onClick={() => IsShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                    >
                    {showPassword ? <Eye/> : <EyeOff/>}
                    </button>
                    </div>

                    {/*Function for forgor password*/}

                    <div className="text-right text-sm">
                        <div className="text-indigo-500 hover:underline">
                          <Link to="/reset">Forgot password?</Link>  
                        </div>
                    </div>

                    {/*Submit button(Log in)*/}

                    <button 
                    type="submit"
                    className="w-full bg-indigo-400 text-white py-2 rounded-md hover:bg-indigo-500 transition"
                    >
                    <Link to="/Home">Login</Link>
                    </button>

                    {/*Sign up function(Linked)*/}

                    <p className="text-sm text-center">
                        Don't have an account?
                        <Link to="/Signup" className="text-indigo-600 hover:underline px-1">Sign Up</Link> 
                    </p>
               </form>
            </div>
         </div> 
       </div>
    </>
  );
}