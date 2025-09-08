import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  // Check if token exists in localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  // Handle navigation
  const handleNavigate = async (path) => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 100)); // Tiny delay for smooth UX
      navigate(path);
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const handleLogout = async () => {
    try {
      setLoading(true);
      // Simulate async logout (API call, etc.)
      await new Promise((resolve) => setTimeout(resolve, 300)); 
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setIsLoggedIn(false);
      setShowLogoutConfirm(false);
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-50">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      <AnimatePresence>
        {showLogoutConfirm && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6 w-80 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Confirm Logout
              </h2>
              <p className="text-gray-600 mb-6">
                Are you sure you want to log out?
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setShowLogoutConfirm(false)}
                  className="px-4 py-2 rounded-lg bg-gray-300 text-gray-800 hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="sticky top-0 z-40 shadow-md bg-white">
        <div className="flex justify-between items-center px-8 py-4 md:text-lg lg:text-xl text-[#364687]">
          {/* Logo Section */}
          <div className="flex flex-row justify-start items-center gap-4 pl-12">
            <img
              src="/LOGO.png"
              alt="CJCRSG LOGO"
              className="w-[50px] h-[50px]"
            />
            <p className="font-montserrat font-bold">CJCRSG PHILS. INC.</p>
          </div>

          {/* Navigation */}
          <ul className="flex gap-6 font-montserrat items-center">
            <li className="relative group">
              <button
                onClick={() => handleNavigate("/home")}
                className="relative group"
              >
                Home
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#364687] transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>

            {isLoggedIn ? (
              <>
                {/* Dashboard Link */}
                <li className="relative group">
                  <button
                    onClick={() => handleNavigate("/homepage")}
                    className="relative group"
                  >
                    Dashboard
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#364687] transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>

                {/* Logout Link */}
                <li className="relative group">
                  <button
                    onClick={() => setShowLogoutConfirm(true)}
                    className="relative group text-red-600 hover:text-red-700 transition-all duration-300"
                  >
                    Logout
                    <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-red-600 transition-all duration-300 group-hover:w-full rounded"></span>
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="relative group">
                  <button
                    onClick={() => handleNavigate("/login")}
                    className="relative group"
                  >
                    Log In
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#364687] transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
                <li className="relative group">
                  <button
                    onClick={() => handleNavigate("/signup")}
                    className="relative group"
                  >
                    Sign Up
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#364687] transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
