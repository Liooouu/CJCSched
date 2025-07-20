import { LogNavbar } from "./LogNavbar";

export const Login = () => {
    return(
    <>
      <LogNavbar/>
       <div className="min-h-screen bg-gradient-to-l from-indigo-300 to-indigo-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-30 w-full max-w-5xl p-6">

            <div className="text-white flex flex-col justify-center">
                <h1 className="text-3xl font-bold mb-6">Enter Your Account</h1>
                <p className="mb-6">Please log in using your personal information to stay connected to us</p>
                <div>
                    <span>Connect with us:
                        <a 
                        href="#" 
                        target="_blank"
                        className="underline px-2"
                        >
                            Facebook
                        </a>
                        <a 
                        href="#" 
                        target="_blank"
                        className="underline px-2"
                        >
                            Gmail
                        </a>
                        <a 
                        href="#" 
                        target="_blank"
                        className="underline px-2"
                        >
                            Contact
                        </a>
                    </span>
                </div>
            </div>

        </div> 
       </div>
    </>
    );
}