import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from 'react-router-dom';
import { SignNavbar } from "../components/signNavbar";


export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
    <SignNavbar/>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-200 to-indigo-900 text-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-30 w-full max-w-5xl p-6">
        
        <div className="text-white flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">Create your account</h1>
           <p className="mb-6">
            To become a part of our community, please sign up using personal information.
           </p>
          <div className="text-sm flex flex-wrap items-center space-x-2">
            <span>Connect with us:</span>
            <a
              href="https://www.facebook.com/cjcrsg"
              className="underline hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a 
              href="#" 
              className="underline hover:text-blue-300">
              Gmail
            </a>
            <a 
              href="#" 
              className="underline hover:text-blue-300">
              Contact
            </a>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Sign up</h2>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Full name (Ex: Juan Dela Cruz)"
              className="w-full px-4 py-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Contact No."
              className="w-full px-4 py-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full px-4 py-2 border rounded-md"
            />

            <div className="flex items-center space-x-4">
              <span>Gender:</span>
              <label className="flex items-center space-x-1">
                <input type="radio" name="gender" value="female" />
                <span>Female</span>
              </label>

              <label className="flex items-center space-x-1">
                <input type="radio" name="gender" value="male" />
                <span>Male</span>
              </label>
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                {showPassword ? <Eye /> : <EyeOff />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-200 hover:bg-indigo-500 text-indigo-900 font-semibold py-2 rounded-md"
            >
              Signup
            </button>
          </form>

          <p className="mt-4 text-sm text-center">
            Already have an account?{" "}
            <a className="text-blue-600 underline">
              <Link to="/login">Login</Link>
            </a>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};
