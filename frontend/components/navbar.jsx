import { use, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

/*hamburger Navbar*/
const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return (

    <nav className="sticky top-0 z-50 shadow-md bg-white">
        <div className="flex justify-between items-center p-4 md:text-lg lg:text-xl text-[#364687]">
            <div className='flex items-center gap-4 pl-4'>
                <img src="/LOGO.png" alt="CJCRSG LOGO" className='w-[50px] h-[50px]'/>
                <p className='font-montserrat '>CJCRSG PHILS. INC.</p>
            </div>

            <ul className='hidden md:flex flex-row gap-16 font-montserrat pr-8'>
                     <li className='relative group'>
                        <Link to="/home"> Home
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#364687] transition-all group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li className='relative group'>
                       <Link to="/login">Log In
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#364687] transition-all group-hover:w-full"></span>
                       </Link>
                    </li>
                    <li className='relative group'>
                        <Link to="/signup">Sign Up
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#364687] transition-all group-hover:w-full"></span>
                        </Link>
                    </li>
              </ul>

              <button 
              className='md:hidden pr-4' 
              onClick={() => setIsOpen(!isOpen)} 
              >
                {isOpen ? <X size={28} /> : <Menu size={28}/>}
                
              </button>
        </div>

        {isOpen && (
            <div className='md:hidden bg-white shadow-lg text-[#364687]'>
                <ul className='flex flex-col items-center gap-6 py-6 font-montserrat'>
                    <li>
                        <Link to="/home" onClick={() => setIsOpen(false)}>Home</Link>
                    </li>
                    <li>
                        <Link to="/login" onClick={() => setIsOpen(false)}>Log In</Link>
                    </li>
                    <li>
                        <Link to="/signup" onClick={() => setIsOpen(false)}>Sign Up</Link>
                    </li>
                </ul>
            </div>
        )}
    </nav>
  )
}

export default Navbar