import { Link } from "react-router-dom";
import { ResetNavbar } from "./ResetNavbar";

export const MessageReset = () => {
    return(
        <>
        <ResetNavbar/>
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-200 to-indigo-900 px-4">
            
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm space-y-4">
                <h1 className="text-xl font-bold text-center text-blue-900 mb-4">
                    Reset your password
                </h1>

                <div className="text-center">
                <p>Enter your email address or phone number to reset your password</p>
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
                    Send OTP
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