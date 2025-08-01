import { Link } from 'react-router-dom';

export const ResetNavbar = () => {
  return (
    <nav>
        <div className='flex flex-row p-4 md:text-lg lg:text-xl text-white bg-gradient-to-r from-indigo-200 to-indigo-900 '>
            <div className='container flex flex-row justify-start items-center gap-4 pl-12'>
                <img src="/W_LOGO.png" alt="CJCRSG LOGO" className='w-[50px] h-[50px]'/>
                <p className='font-montserrat '>CJCRSG PHILS. INC.</p>
            </div>
            <div className='container flex items-center pr-12'>
                <ul className='container flex flex-row justify-end gap-32 font-montserrat'>
                    <li className='hover:underline'>
                       <Link to="/home">Home</Link>
                    </li>
                    <li className='hover:underline'>
                       <Link to="/login">Log In</Link>
                    </li>
                    <li className='hover:underline'>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

 