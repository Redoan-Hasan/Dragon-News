
import { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
    const{createUser}=useContext(AuthContext)
    const handleRegister=(e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photoURL = form.get('photo')
        const email =form.get('email')
        const password = form.get('password')
        console.log(email,password,name,photoURL);
        createUser(email,password)
        .then(result =>{
            console.log(result.user);
            toast.success("Successfully Account Created")
            e.target.reset()
        })
        .catch(error=>{
            console.log(error.message);
            toast.error(error.message)
        })
    }
    return (
        <div>
            <Navbar/>
            <div className="hero  min-h-[calc(100vh-76px)]">
                <div className="hero-content   flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 p-10 w-full max-w-sm md:max-w-lg lg:min-w-[700px]  shrink-0 shadow-2xl">
                    <div>
                        <h1 className="text-4xl font-semibold text-center">Register your account</h1>
                        <div className="border-b my-4 md:my-6 lg:my-12"></div>
                    </div>
                    <form onSubmit={handleRegister} className="card-body max-w-sm md:max-w-lg lg:min-w-full p-0">
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text text-xl font-semibold">Your Name</span>
                        </label>
                        <input
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        className="input input-bordered font-base font-normal"
                        required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text text-xl font-semibold">Photo URL</span>
                        </label>
                        <input
                        name="photo"
                        type="url"
                        placeholder="Enter your photo url"
                        className="input input-bordered font-base font-normal"
                        
                        />
                    </div>
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
                        <div className="flex items-center gap-2 py-5 text-base font-normal text-[#706F6F]">
                            <input type="checkbox" name="checkbox" id="checkbox" />
                            <label htmlFor="checkbox">Accept <a className="font-semibold" href="">Term & Conditions</a></label>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#403F3F] hover:bg-[#403F3F] text-white">Register</button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
