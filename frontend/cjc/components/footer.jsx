
import React from 'react'

const Footer = () => {

    const thisYear = new Date().getFullYear()
  return (
    <div className='bg-[#D9D9D9] text-center text-black/40 p-4' >
        <p>Copyright CJCRSG &copy; {thisYear} All rights reserved</p>
    </div>
  )
}

export default Footer