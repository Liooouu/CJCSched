import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // No token → redirect to login
      navigate("/login");
    } else {
      setIsLoggedIn(true);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove JWT
    setIsLoggedIn(false);
    navigate("/login"); // Redirect
  };

  if (!isLoggedIn) {
    return null; // Don't render navbar until login check is done
  }

  return (
    <nav>
      <div className="flex flex-row p-2 md:text-lg lg:text-xl text-[#364687] bg-gradient-to-r from-[#364687]/0 to-[#EAEDF7]/100">
        {/* Logo + Title */}
        <div className="container flex flex-row justify-center items-center gap-2 flex-1/3">
          <img src="/LOGO.png" alt="CJCRSG LOGO" className="w-[50px] h-[50px]" />
          <p className="font-montserrat">CJCRSG PHILS. INC.</p>
        </div>

        {/* Navigation Links */}
        <div className="container hidden sm:flex flex-row justify-evenly items-center flex-2/3">
          <ul className="container flex flex-row justify-evenly font-montserrat items-center">
            <li className="hover:underline">
              <Link to="/home">Dashboard</Link>
            </li>
            <li className="hover:underline">
              <Link to="/announcement">Announcement</Link>
            </li>
            <li className="hover:underline">
              <Link to="/members">Members</Link>
            </li>
            <li className="hover:underline">
              <Link to="/visitors">Visitors</Link>
            </li>

            {/* Logout Button */}
            <li>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-all duration-200"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    
        <div className='flex flex-row p-2 md:text-lg lg:text-xl text-[#364687] bg-gradient-to-r from-[#364687]/0 to-[#EAEDF7]/100 '>
            <div className='container flex flex-row justify-center items-center gap-2 flex-1/3 ' >
                <img src="/LOGO.png" alt="CJCRSG LOGO" className='w-[50px] h-[50px]'/>
                <p className='font-montserrat '>CJCRSG PHILS. INC.</p>
            </div>
            <div className='container hidden flex-row justify-evenly items-center sm:flex flex-2/3'>
                <ul className='container flex flex-row justify-evenly font-montserrat items-center'>
                    <li className='hover:underline'>
                       <Link to="/home">Dashboard</Link>
                    </li>
                    <li className='hover:underline'>
                       <Link to="/login">Announcement</Link>
                    </li>
                    <li className='hover:underline'>
                       <Link to="/login">Members</Link>
                    </li>
                    <li className='hover:underline'>
                        <Link to="/signup">Visitors</Link>
                    </li>
                    <li>
                        <button className='bg-white rounded-md'>
                            <select name="" id="" className='outline-none px-3 py-1 ' defaultValue="" >
                              <option value="" disabled >Admin</option>
                              <option value="">Setting</option>
                              <option value="">Logout</option>
                            </select>

                        </button>  
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
};

export default AdminNavbar;
