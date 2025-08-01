import { Link } from "react-router-dom";
import { ResetNavbar } from "../components/ResetNavbar";
import { Footer } from '../components/footer'
import { FaArrowLeft } from "react-icons/fa";

export const VerifyReset = () => {
    return(
        <>
        <ResetNavbar/>
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-200 to-indigo-900 px-4">
            
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm space-y-4 font-montserrat">

                <div className="flex items-center gap-24">
                    <Link to="/MessageReset">
                    <FaArrowLeft/>
                    </Link>
                    <h1 className="text-xl font-bold text-blue-900">Verify OTP</h1>
                </div>
                
                <div className="w-3"/>

                <div className="text-center">
               <p>Enter the OTP send to your email or phone number to proceed</p>
                
                </div>                

                <form className="space-y-4">
                    <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md"
                    />

                    <button 
                    type="submit"
                    className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition cursor-pointer"
                    >
                    <Link to="/ResetPassword">Verify</Link>
                    </button>
                </form>
            </div>

            <div className="absolute bottom-4 text-white text-sm flex flex-wrap justify-center gap-4 font-montserrat">
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
        <Footer />
        </>
    );
}