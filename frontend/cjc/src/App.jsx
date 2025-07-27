import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import AdminPage from '../pages/adminPage';
import {Signup} from '../pages/signUpPage';
import {Login} from '../pages/loginPage';
import { MessageReset } from '../pages/messageResetPage';
import { VerifyReset } from '../pages/VerifyResetPage'
import { ResetPassword } from '../pages/ResetPasswordPage';

const Home = () => {
  return (
    <>
    <Navbar/>
      <main className="flex justify-center items-center flex-col font-montserrat text-[#364687] lg:text-4xl md:text-3xl font-bold">
        <div className="container flex justify-center items-center flex-col h-[50vh] w-max md:space-y-2 lg:space-y-4">
          <p className="sm:text-2xl lg:text-3xl font-semibold">WELCOME TO </p>
          <p className='text-xl sm:text-3xl md:text-4xl lg:text-5xl'>CHURCH OF JESUS CHRIST</p>
          <p className='text-xl sm:text-3xl md:text-4xl lg:text-5xl'>THE RISEN SON OF GOD PHIL. INC.</p>
          <p className="sm:text-2xl lg:text-3xl font-semibold">ATTENDANCE SYSTEM</p>
        </div>
        <div>
          <img src="/COVER.png" alt="CJCRSG Cover Photo" />
        </div>
      </main>

      <div className="justify-center flex items-center flex-col text-[#364687] lg:text-4xl sm:text-4xl font-bold font-montserrat h-[400px]">
        <h2 className="font-medium text-3xl">Service starts at</h2>
        <p>9:00am - Morning Service</p>
        <p>2:00pm - Youth Service</p>
      </div>

      <div className="flex sm:flex-row flex-col justify-evenly h-[600px] text-[#364687] lg:text-4xl md:text-3xl font-bold font-montserrat bg-[#364687]/10 mb-3">
        <div className="container flex justify-center items-center flex-col">
          <h2 className="font-light text-2xl md:text-3xl lg:text-4xl">Connect with us:</h2>

          <div className="flex flex-row justify-center items-center text-xs font-light">
            <div className="flex flex-col justify-center items-center">
              <img src="/FACEBOOK.png" alt="facebook_icon" className="w-full h-full object-contain" />
              <p className="sm:text-xl">Facebook</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <img src="/GMAIL.png" alt="gmail_icon" className="w-full h-full object-contain" />
              <p className="sm:text-xl">Gmail</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <img src="/CONTACT.png" alt="contact_icon" className="w-full h-full object-contain" />
              <p className="sm:text-xl">Contact</p>
            </div>
          </div>
        </div>

        <div className="container items-start text-center flex font-bold">
          <div className="flex flex-col h-full justify-evenly">
            <h2 className="text-2xl sm:text-5xl">Mission</h2>
            <div className="container no-wrap p-4">
              <p className="text-center font-light indent-6 text-[20px]/9">To share the gospel of the kingdom, to make disciples of Christs and to plant in the Philippines and all over the world.</p>
            </div>

            <h2 className="text-2xl sm:text-5xl">Vision</h2>
            <div className='container no-wrap p-4'>
              <p className="font-light text-[20px]">To bring people to God.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/MessageReset" element={<MessageReset />} />
        <Route path="/VerifyReset" element={<VerifyReset />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
