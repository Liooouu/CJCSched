import React from 'react'
import AdminNavbar from "../components/adminNavbar"
import Footer from '../components/footer'

const AdminPage = () => {
  return (
    <>
      <AdminNavbar/>
      <div className='grid grid-cols-12 grid-rows-1 h-[300px]'>
        <div className='col-span-5'>
         <div className='container flex justify-center items-center h-full flex-col'>
          <h2>Hi, Admin Hazel</h2>
          <p>Manage the attendance of CJC Members.</p>
          <button>
            Add Attendance
          </button>
         </div>
        </div>
        <div className='col-span-3'>
          box 2
        </div>
        <div className='col-span-4'>
          box 3
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default AdminPage