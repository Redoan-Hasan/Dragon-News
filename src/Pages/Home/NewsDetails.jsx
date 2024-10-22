

import { Link, useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSide from "../Shared/RightSide/RightSide";


const NewsDetails = () => {
    const singleNews =useLoaderData();
    const {image_url,title,details}=singleNews;
    // console.log(singleNews);
    return (
        <div className="">
            <Header></Header>
            <Navbar></Navbar>
            <h1 className="py-2 text-[#403F3F] text-xl font-semibold leading-7">Dragon News</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
                <div className="md:col-span-3 lg:col-span-3">
                    <div className="border rounded-lg p-7">
                        <img src={image_url} alt="" />
                        <h1 className="py-3 text-xl font-bold leading-9 text-[#403F3F]">{title}</h1>
                        <p className="text-base font-normal text-[#706F6F] leading-7">{details}</p>
                        <Link className="btn btn-secondary my-4" to='/'>Back To Home Page</Link>
                    </div>
                </div>
                <div className="hidden md:block md:col-span-1 lg:col-span-1 ">
                    <RightSide/>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;