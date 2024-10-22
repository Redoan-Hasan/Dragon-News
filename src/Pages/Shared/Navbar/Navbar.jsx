import { Link, NavLink } from "react-router-dom";
import defaultUserDP from '../../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
const Navbar = () => {
    const {user,logOut}=useContext(AuthContext)
    const handleSignOut = ()=>{
        logOut()
        .then(()=>toast.success("Successfully Signed Out"))
        .catch((error)=>toast.error(error.message))
    }
    const navlinks = 
    <>
        <li><NavLink className='text-lg font-normal leading-7 text-[#706F6F]' to='/'>Home</NavLink></li>
        <li><NavLink className='text-lg font-normal leading-7 text-[#706F6F]' to='/login'>Login</NavLink></li>
        <li><NavLink className='text-lg font-normal leading-7 text-[#706F6F]' to='/register'>Register</NavLink></li>
    </>
    return (
        <div>
        <div className="navbar bg-base-100">
            <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                    />
                </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2">
                    {navlinks}
                </ul>
            </div>
            </div>
            <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2 bg-transparent">
                {navlinks}
            </ul>
            </div>
            <div className="navbar-end flex items-center gap-2">
                <img className="w-12" src={defaultUserDP} alt="" />
                {
                    user? <button onClick={handleSignOut} className="btn bg-[#403F3F] text-white text-xl font-medium hover:bg-[#403F3F]">Sign Out</button>:
                    <Link to='/login' className="btn bg-[#403F3F] text-white text-xl font-medium hover:bg-[#403F3F]">Login</Link>
                }
            </div>
        </div>
        </div>
    );
};

export default Navbar;
