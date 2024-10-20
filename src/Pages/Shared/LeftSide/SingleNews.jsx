/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { CiCalendar } from "react-icons/ci";


const SingleNews = ({singleNews}) => {
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data =>setCategories(data));
    },[])
    const {image_url,title,author,category_id}=singleNews;
    // console.log(singleNews);
    return (
        <div className="my-5">
            <img className=" " src={image_url} alt="" />
            <h1 className="text-xl font-semibold text-[#403F3F] py-5">{title}</h1>
            <div className="flex gap-2 items-center">
                <div className="text-[#403F3F] text-base font-medium">
                    {categories.find(category=>category.id === category_id)?.name||'category'}
                </div>
                <div className="flex items-center gap-3 text-base font-medium leading-6 text-[#9F9F9F]">
                    <CiCalendar className="h-6 w-6"/>
                    {author.published_date?.slice(0,10)}
                </div>
            </div>
        </div>
    );
};

export default SingleNews;

// ? <p>{category.name}</p>:''