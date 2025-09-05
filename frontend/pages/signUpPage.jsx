import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
    address: "",
    gender: "",
  });
  const [message, setMessage] = useState(""); // to show confirmation or error
  const [isError, setIsError] = useState(false); // to style message on error/success
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGenderChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      gender: prev.gender === value ? "" : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // clear previous message
    setIsError(false);

    try {
      const res = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("✅ Response:", data);

      if (!res.ok) {
        setMessage(data.message || "Something went wrong");
        setIsError(true);
      } else {
        setMessage("Account created successfully! Redirecting to login...");
        setIsError(false);

        // Redirect to login after 2 seconds
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      console.error("❌ Error:", error);
      setMessage("Error connecting to server");
      setIsError(true);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-400 to-indigo-900">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 lg:gap-30 max-w-screen-xl p-6 font-montserrat">
          <div className="text-white flex flex-col justify-center items-center text-center">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">Create your account</h1>
            <p className="text-xl lg:text-2xl mb-6">
              To become a part of our community, please sign up using your personal information.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="text"
                name="contact"
                placeholder="Contact No."
                value={formData.contact}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />

              <div className="flex space-x-8">
                <span className="text-md font-medium pl-4">Gender:</span>
                <label>
                  <input
                    type="checkbox"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={() => handleGenderChange("female")}
                  />
                  Female
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={() => handleGenderChange("male")}
                  />
                  Male
                </label>
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3"
                >
                  {showPassword ? <Eye /> : <EyeOff />}
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-400 hover:bg-indigo-500 text-white py-2 rounded-xl"
              >
                Sign Up
              </button>

              {/* Message below form */}
              {message && (
                <p
                  className={`mt-4 text-center ${
                    isError ? "text-red-600" : "text-green-600"
                  } font-semibold`}
                >
                  {message}
                </p>
              )}

              <p className="text-sm text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-indigo-600 hover:underline">
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
