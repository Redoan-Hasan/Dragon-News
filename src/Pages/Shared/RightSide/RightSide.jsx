import { FaGoogle,FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Q1 from '../../../assets/qZone1.png'
import Q2 from '../../../assets/qZone2.png'
import Q3 from '../../../assets/qZone3.png'

const RightSide = () => {
    return (
            <div className="px-3 md:px-0 lg:px-0">
                {/* login section  */}
                <div className="flex flex-col  gap-4 mb-8">
                    <h1 className="text-xl font-bold leading-7 text-[#403F3F]">Login With</h1>
                    <button className="btn  btn-outline w-full text-blue-400">
                    <FaGoogle/>
                    Login with Google
                    </button>
                    <button className="btn w-full btn-outline">
                    <FaGithub/>
                    Login with Github
                    </button>
                </div>

                {/* find us section  */}
                <div className="flex flex-col mb-5">
                    <h1 className="text-[#403F3F] text-xl font-semibold leading-7 pb-5">Find Us On</h1>
                    <a className="border rounded-t-lg flex items-center gap-3 p-4 text-[#706F6F] text-base leading-7 font-medium" href="">
                        <FaFacebook className="text-blue-600"/>
                        Facebook
                    </a>
                    <a className="border-x flex items-center gap-3 p-4 text-[#706F6F] text-base leading-7 font-medium" href="">
                        <FaTwitter className="text-blue-400"/>
                        Twitter
                    </a>
                    <a className="border rounded-b-lg flex items-center gap-3 p-4 text-[#706F6F] text-base leading-7 font-medium" href="">
                        <FaInstagram className=""/>
                        Instagram
                    </a>
                </div>

                {/* Q zone section  */}
                <div className="bg-[#F3F3F3] flex flex-col p-4 rounded-lg">
                    <h1 className="text-[#403F3F] text-xl font-semibold leading-7">Q-Zone</h1>
                    <img src={Q1} alt="" />
                    <img src={Q2} alt="" />
                    <img src={Q3} alt="" />
                </div>
        </div>
    );
};

export default RightSide;