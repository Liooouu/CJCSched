import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className='flex flex-row p-4 text-[#364687] bg-white '>
            <div className='container flex flex-row justify-start items-center gap-2'>
                <img src="/LOGO.png" alt="CJCRSG LOGO" className='w-[50px] h-[50px]'/>
                <p>CJCRSG PHIL. INC.</p>
            </div>
            <div className='container flex flex-row justify-evenly items-center'>
                <ul className='container flex flex-row justify-evenly font-monstserrat'>
                    <li className='hover:underline'>Home</li>
                    <li className='hover:underline'>Sign In</li>
                    <li className='hover:underline'>Sign Up</li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar