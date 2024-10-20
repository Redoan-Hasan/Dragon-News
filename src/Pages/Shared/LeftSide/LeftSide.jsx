import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SingleNews from "./SingleNews";

const LeftSide = () => {
    const [categories,setCategories]=useState([])
    const [news,setNews]=useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data =>setCategories(data));
    },[])
    // console.log(categories);
    useEffect(()=>{
        fetch('news.json')
        .then(res => res.json())
        .then(data =>setNews(data));
    },[])
    // console.log(news);
    return (
        <div className="px-3 md:px-0 lg:px-0">
            <div className="text-xl font-medium leading-7">
                <h1 className="mb-5 text-[#403F3F] font-extrabold">All Category</h1>
                <div className="flex flex-col">
                    {
                        categories.map(category=><NavLink to={`/categories/${category.id}`} className={({isActive})=>`py-4 px-12 rounded-lg ${isActive?'bg-[#E7E7E7] font-semibold text-[#403F3F]':'text-[#9F9F9F]'}`} key={category.id}>{category.name}</NavLink>)
                    }
                </div>
            </div>
            <div>
                <div>
                    {
                        news.slice(0,3).map((singleNews,idx)=><SingleNews key={idx} singleNews={singleNews}></SingleNews>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LeftSide;
