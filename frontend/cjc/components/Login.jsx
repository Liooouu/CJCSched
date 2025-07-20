import { LogNavbar } from "./LogNavbar";

export const Login = () => {
    return(
    <>
      <LogNavbar/>
       <div className="min-h-screen flex items-center justify-center bg-gradient-to-l from-indigo-300 to-indigo-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap- w-full max-w-5xl p-6">

            <div className="text-white flex flex-col justify-center">
                <h1 className="text-3xl font-bold mb-6">Enter Your Account</h1>
                <p className="mb-6">Please log in using your personal information to stay connected to us</p>
                <div className="text-sm flex flex-wrap items-center space-x-2">
                    <span>Connect with us: </span>
                        <a 
                        href="https://www.facebook.com/cjcrsg" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-blue-300"
                        >
                            Facebook
                        </a>
                        <a 
                        href="#" 
                        target="_blank"
                        className="underline hover:text-blue-300"
                        >
                            Gmail
                        </a>
                        <a 
                        href="#" 
                        target="_blank"
                        className="underline hover:text-blue-300"
                        >
                            Contact
                        </a>
                </div>
            </div>

            <div>
                <h2>Login</h2>
                <form>

                </form>
            </div>

        </div> 
       </div>
    </>
    );
}