
import { Link } from 'react-router-dom';


const adminNavbar = () => {
  return (
    <nav className="sticky top-0 z-50 shadow-md">
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
  )
}

export default adminNavbar