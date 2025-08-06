import Navbar from "../components/navbar";
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";


export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-200 to-indigo-900 text-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-15 lg:gap-30 max-w-screen-xl p-6 font-montserrat">
        
        <div className="text-white flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Create your account</h1>
           <p className="text-xl lg:text-2xl mb-6">
            To become a part of our community, please sign up using your personal information.
           </p>
          <div className="text-sm flex flex-wrap items-center gap-4 mt-0 md:mt-64">
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
              href="mailto:cjcrsgonline@gmail.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-300">
              Gmail
            </a>
            <a 
              href="mailto:cjcrsgonline@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-300">
              Contact
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>

          <form className="space-y-4 text-lg lg:text-lg">
            <input
              type="text"
              placeholder="Full Name (Ex: Juan Dela Cruz)"
              className="w-full px-4 py-2 border rounded-xl"
            />
            <input
              type="text"
              placeholder="Contact No."
              className="w-full px-4 py-2 border rounded-xl"
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full px-4 py-2 border rounded-xl"
            />

            <GenderSelect />

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-xl"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-xl"
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
              className="w-full bg-indigo-200 hover:bg-indigo-500 text-indigo-900 font-semibold py-2 rounded-xl cursor-pointer"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-sm lg:text-lg text-center">
            Already have an account?{""}
            <a className="text-indigo-600 hover:underline px-1">
              <Link to="/login">Log in</Link>
            </a>
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export const GenderSelect = () => {
  const [selectedGender, setSelectedGender] = useState("");

  const handleCheckboxChange = (value) => {
    if (selectedGender === value) {
      setSelectedGender(""); // Uncheck if clicked again
    } else {
      setSelectedGender(value);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <span className="text-lg lg:text-xl font-medium mb-2">Gender</span>
      <div className="flex space-x-8">
        <label className="flex items-center space-x-2 text-lg">
          <input type="checkbox" name="gender" value="female" checked={selectedGender ==="female"}
            onChange={() => handleCheckboxChange("female")}
            className="w-6 h-6 border-2 border-gray-400 rounded cursor-pointer"
          />
          <span>Female</span>
        </label>

        <label className="flex items-center space-x-2 text-lg">
          <input type="checkbox" name="gender" value="male" checked={selectedGender === "male"}
            onChange={() => handleCheckboxChange("male")}
            className="w-6 h-6 border-2 border-gray-400 rounded cursor-pointer"
          />
          <span>Male</span>
        </label>
      </div>
    </div>
  );
};