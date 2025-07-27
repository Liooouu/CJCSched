import { Link } from "react-router-dom";
import { ResetNavbar } from "../components/ResetNavbar";
import{FaArrowLeft} from "react-icons/fa";

export const MessageReset = () => {
    return(
        <>
        <ResetNavbar/>
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-200 to-indigo-900 px-4">
            
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm space-y-4">

                <div className="flex items-center gap-12">
                    <Link to="/login">
                    <FaArrowLeft/>
                    </Link>
                    <h1 className="text-xl font-bold text-blue-900">Reset your password</h1>
                </div>
                
                <div className="w-3"/>

                <div className="text-center">
                Enter your <span className="text-blue-800">email address </span> 
                or<span className="text-blue-800"> phone number </span>to reset your password
                
                </div>                

                <form className="space-y-4">
                    <input
                    type="text"
                    placeholder="Email or Phone number"
                    className="w-full px-4 py-2 border rounded-md"
                    />

                    <button 
                    type="submit"
                    className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition"
                    >
                    <Link to="/VerifyReset">Send OTP</Link>
                    </button>
                </form>
            </div>

            <div className="absolute bottom-4 text-white text-sm flex flex-wrap justify-center gap-2">
                <span>Connect with us:</span>
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
                rel="noopener noreferrer"
                className="underline hover:text-blue-300"
                >
                    Gmail
                </a>
                <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-300"
                >
                    Contact
                </a>
            </div>
        </div>
        </>
    );
}