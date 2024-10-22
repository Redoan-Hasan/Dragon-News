import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
    const {logIn}=useContext(AuthContext);
    const location = useLocation()
    console.log('location in login page',location);
    const navigate = useNavigate();
    const handleLogIn=(e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email =form.get('email')
        const password = form.get('password')
        console.log(email,password);

        logIn(email,password)
        .then(()=>{
            toast.success("Successfully Logged In")
            e.target.reset()
            navigate(location?.state ? location.state : '/')
        })
        .catch(error=>toast.error(error.message))
    }
    return (
        <div>
            <Navbar/>
            <div className="hero  min-h-[calc(100vh-76px)]">
                <div className="hero-content   flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 p-10 w-full max-w-sm md:max-w-lg lg:min-w-[700px]  shrink-0 shadow-2xl">
                    <div>
                        <h1 className="text-4xl font-semibold text-center">Login your account</h1>
                        <div className="border-b my-4 md:my-6 lg:my-12"></div>
                    </div>
                    <form onSubmit={handleLogIn} className="card-body max-w-sm md:max-w-lg lg:min-w-full p-0">
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text text-xl font-semibold">Email</span>
                        </label>
                        <input
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="input input-bordered font-base font-normal"
                        required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text text-xl font-semibold">Password</span>
                        </label>
                        <input
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        className="input input-bordered text-base font-normal"
                        required
                        />
                        <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                            Forgot password?
                        </a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#403F3F] hover:bg-[#403F3F] text-white">Login</button>
                    </div>
                    <p className="text-center pt-8 text-base font-semibold leading-6 text-[#706F6F]">Dont’t Have An Account ? <Link to='/register' className="bg-gradient-to-r from-[#FF8C47] to-[#F75B5F] bg-clip-text text-transparent font-bold">Register</Link></p>
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
