import { Link } from 'react-router-dom';

export const SignNavbar = () => {
  return (
    <nav>
        <div className='flex flex-row p-4 text-[#e2e4ea] bg-gradient-to-r from-indigo-200 to-indigo-900 '>
            <div className='container flex flex-row justify-start items-center gap-2'>
                <img src="/LOGO.png" alt="CJCRSG LOGO" className='w-[50px] h-[50px]'/>
                <p>CJCRSG PHIL. INC.</p>
            </div>
            <div className='container flex flex-row justify-evenly items-center'>
                <ul className='container flex flex-row justify-evenly font-monstserrat'>
                    <li className='hover:underline'>
                       <Link to="/Home">Home</Link>
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

 