import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    /**Fixed */
    <nav className="sticky top-0 z-50 shadow-md">
        <div className='flex flex-row p-4 md:text-lg lg:text-xl text-[#364687] bg-white '>
            <div className='container flex flex-row justify-start items-center gap-4 pl-12'>
                <img src="/LOGO.png" alt="CJCRSG LOGO" className='w-[50px] h-[50px]'/>
                <p className='font-montserrat '>CJCRSG PHILS. INC.</p>
            </div>
            <div className='container flex items-center pr-12'>
                <ul className='container flex flex-row justify-end gap-32 font-montserrat'>
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
            </div>
        </div>
    </nav>
  )
}

export default Navbar