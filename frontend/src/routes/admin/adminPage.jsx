import React from 'react'
import AdminNavbar from "../../components/adminNavbar"
import Footer from '../../components/footer'

const AdminPage = () => {
  return (
    <>
      <AdminNavbar/>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[600px] md:h-[300px] font-montserrat text-[#364687] px-4">
       
        <div className="md:col-span-5">
          <div className="flex flex-col justify-center items-center h-full gap-y-5 text-center md:text-left">
            <h2 className="text-4xl font-semibold">Hi, Admin Hazel</h2>
            <p className="text-[#1E1E1E] font-light">Manage the attendance of CJC Members.</p>
            <button className="bg-[#EAEDF7] rounded-2xl py-2 px-5 hover:bg-[#364687] hover:text-[#EAEDF7] transition-colors duration-300 shadow-md">
            Add Attendance
            </button>
          </div>
        </div>

        {/* Middle section (Graph 1) */}
        <div className="md:col-span-3 flex justify-center items-center">
        <p>attendees status graph</p>
        </div>

        {/* Right section (Graph 2) */}
        <div className="md:col-span-4 flex justify-center items-center">
        <p>monthly summary graph</p>
        </div>
        </div>


          <div className='border-y-1 border-black/5 flex justify-evenly items-center font-montserrat text-[#364687] h-[100px] shadow-sm'>
            <div className='flex justify-evenly items-center flex-col'>
              <p className='font-bold text-2xl'>33</p>
              <p>New Attendees This Week</p>
            </div>

            <div className='flex justify-evenly items-center flex-col'>
              <p className='font-bold text-2xl'>300</p>
              <p>Total attendance This Week</p>
            </div>

            <div className='flex justify-evenly items-center flex-col'>
              <p className='font-bold text-2xl'>1431</p>
              <p>Monthly Attendance</p>
            </div>
          </div>

          <div className="font-montserrat text-[#364687] h-[100px] flex items-center justify-center">
            <div className="flex items-center justify-between container h-full w-full px-4 gap-x-4">
              
             
              <p className="text-2xl font-normal w-4/12 text-center">
                RECENT ACTIVITY
              </p>

            
              <div className="w-4/12">
                <div className="flex items-center border border-gray-300 rounded-xl px-2 py-1">
                  <img src="./SEARCH_ICON.png" alt="Search_icon" width={20} />
                  <input
                    type="search"
                    name="SearchName"
                    id="SearchName"
                    placeholder="Search..."
                    className="w-full ml-2 focus:outline-none"
                  />
                </div>
              </div>

             
              <div className="flex items-center w-2/12 justify-center space-x-2">
                <img src="./FILTER_ICON.png" alt="Filter_icon" width={20} />
                <button className="text-sm">Filter</button>
              </div>

              
              <div className="flex items-center w-2/12 justify-center space-x-2">
                <img src="./EXPORT_ICON.png" alt="Export_icon" width={20} />
                <button className="text-sm">Export</button>
              </div>

            </div>
          </div>





      <Footer/>
    </>
  )
}

export default AdminPage