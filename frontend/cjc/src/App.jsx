
function App() {

  return (
    <>
        <main className="flex justify-center items-center flex-col font-monstserrat text-[#364687] lg:text-4xl md:text-3xl font-bold">
            <div className="container flex justify-center items-center flex-col h-[50vh] w-max ">
              <p className="sm:text-2xl font-semibold">WELCOME TO </p>
              <p className="">CHURCH OF JESUS CHRIST</p>
              <p className="">THE RISEN SON OF GOD PHIL.INC.</p>
              <p className="sm:text-2xl font-semibold">ATTENDANCE SYSTEM</p>
            </div>

            <div>
              <img src="/COVER.png" alt="CJCRSG Cover Photo" />
            </div>

        </main>

    
        <div className=" justify-center flex items-center flex-col text-4xl text-[#364687] lg:text-4xl md:text-3xl font-bold font-monstserrat h-[400px]">
              <h2 className="font-medium text-2xl" >Service starts at</h2>
              <p>9:00am - Morning Service</p>
              <p>2:00pm - Youth Service</p>
        </div>

        <div className="flex flex-row justify-evenly h-[600px] text-[#364687] lg:text-4xl md:text-3xl font-bold font-monstserrat bg-[#364687]/10">
          
            <div className="container flex justify-center items-center flex-col">

              <h2 className="font-light">Connect with us:</h2>

              <div className="flex flex-row justify-center items-center text-xs font-light">

                <div className="flex flex-col justify-center items-center">
                  <img src="/FACEBOOK.png" alt="facebook_icon" className="w-full h-full object-obtain"/>
                  <p>Facebook</p>
                </div>

                <div className="flex flex-col justify-center items-center">
                  <img src="GMAIL.png" alt="gmail_icon" className="w-full h-full object-obtain"/>
                  <p>Gmail</p>
                </div>

                <div className="flex flex-col justify-center items-center">
                  <img src="CONTACT.png" alt="contact_icon" className="w-full h-full object-obtain" />
                  <p>Contact</p>
                </div>
            
              </div>
            </div>

            <div className="container items-start text-center flex text-5xl font-bold  " >
               <div className="flex flex-col h-full justify-evenly ">
                  <h2>Mission</h2>
                  <div className="container no-wrap p-4">
                       <p className="text-center font-light indent-6 text-[20px]"> To share the gospel of the kingdom, to make disciples of Christs and to plant in the Philippines and all over the world. </p>
                  </div>

                   <h2>Vision</h2>
                  <p className="font-light text-[20px]">To bring people to God</p>
               </div>
            </div>
         
        </div>
    </>
  )
}

export default App
