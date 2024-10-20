/* eslint-disable react/prop-types */

import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";


const MiddleNews = ({singleNews}) => {
    const{_id,image_url,author,title,total_view,details,rating}=singleNews;
    // console.log(id);
    return (
        <div>
            <div>
                <div className="border p-5 rounded-lg my-5">
                    <h1 className="text-xl font-bold leading-9 text-[#403F3F]">{title}</h1>
                    <div className="flex items-center gap-3 py-5">
                        <img className="w-10 rounded-full" src={author.img} alt="" />
                        <div className="flex flex-col gap-1">
                            <p className="text-[#403F3F] text-base font-semibold leading-7">{author.name}</p>
                            <p className="text-[#706F6F] text-sm font-normal">{author.published_date?.slice(0,10)}</p>
                        </div>
                    </div>
                    <div className="text-base font-normal text-[#706F6F] leading-7">
                        <img src={image_url} alt="" />
                        {details.length > 150 ? <p className="py-5">{details.slice(0,200)}<Link to={`/news/${_id}`} className="bg-gradient-to-r from-[#FF8C47] to-[#F75B5F] bg-clip-text text-transparent font-bold">Reads More....</Link></p>: <p className="py-5">{details}</p>}
                    </div>
                    <div className="border my-5"></div>
                    <div className="flex items-center justify-between text-base font-normal text-[#706F6F] leading-7">
                        <p>Rating : <span className="font-bold">{rating.number}</span></p>
                        <p className="flex items-center gap-2"><FaEye></FaEye> <span className="font-bold">{total_view}</span></p>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default MiddleNews;