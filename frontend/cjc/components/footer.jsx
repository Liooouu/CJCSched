export const Footer = () => {

    const thisYear = new Date().getFullYear()
  return (
    <div className='bg-[#D9D9D9] text-center text-black/40 p-4 font-montserrat' >
        <p>Copyright  &copy; {thisYear} CJCRSG - All rights reserved</p>
    </div>
  )
}

export default Footer