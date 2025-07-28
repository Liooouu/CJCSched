import { LogNavbar } from "../components/LogNavbar";
import { Footer } from '../components/footer';
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 lg:gap-30 w-full max-w-screen-xl p-6 font-montserrat">

            <div className="text-white flex flex-col justify-center items-center text-center">
                <h1 className="text-3xl lg:text-4xl font-bold mb-4">Enter your account</h1>
                <p className="text-xl lg:text-2xl mb-6">Please log in using your personal information to stay connected with us.</p>
                <div className="text-sm flex gap-4 mt-0 md:mt-64">
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
                        href="mailto:cjcrsgonline@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-blue-300"
                        >
                            Gmail
                        </a>
                        <a 
                        href="mailto:cjcrsgonline@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-blue-300"
                        >
                            Contact
                        </a>
                </div>
            </div>

            {/*this side is for log in form*/}

            <div className="bg-white rounded-2xl p-8 shadow-md w-full max-w-lg mx-auto">
                <h2 className="text-2xl font-semibold text-center mb-6">Log In</h2>
                <form className="space-y-4 text-lg lg:text-lg">
                    
                    {/*Button for google*/}

                    <button 
                    type="button"
                    className="w-full flex items-center justify-center gap-2 border rounded-xl border-gray-300 py-2 px-4 rounded-mg hover:bg-gray-100 transition cursor-pointer"
                    >
                        <FcGoogle className="w-5 h-5" />
                        <span>Log in with Google</span>
                    </button>
                    
                    {/*input field for email*/}

                    <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full px-4 py-2 border rounded-xl"
                    /> 

                    {/*input field for password*/}
                    {/*used ternary operator and usestate. ternary operator (?) for single handed if else*/}

                    <div className="relative">
                    <input 
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password" 
                    className="w-full px-4 py-2 border rounded-xl"
                    /> 

                    <button
                    type="button"
                    onClick={() => IsShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                    >
                    {showPassword ? <Eye/> : <EyeOff/>}
                    </button>
                    </div>

                    {/*Function for forgot password*/}

                    <div className="text-right text-sm lg:text-lg">
                        <div className="text-indigo-500 hover:underline">
                          <Link to="/MessageReset">Forgot password?</Link>  
                        </div>
                    </div>

                    {/*Submit button(Log in)*/}

                    <button 
                    type="submit"
                    className="w-full bg-indigo-400 text-white font-semibold py-2 rounded-xl hover:bg-indigo-500 transition cursor-pointer"
                    >
                    <Link to="/admin">Log In</Link>
                    </button>

                    {/*Sign up function(Linked)*/}

                    <p className="mt-4 text-sm lg:text-lg text-center">
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
}