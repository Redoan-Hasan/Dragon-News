import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSide from "../Shared/LeftSide/LeftSide";
import Navbar from "../Shared/Navbar/Navbar";
import RightSide from "../Shared/RightSide/RightSide";
import BreakingNews from "./BreakingNews";
import MiddleNews from "./MiddleNews";


const Home = () => {
    const news = useLoaderData();
    // console.log(news);
    return (
        <div className="mx-auto">
            <Header/>
            <BreakingNews/>
            <Navbar/>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
                <div>
                    <LeftSide/>
                </div>
                <div className="md:col-span-2 lg:col-span-2">
                    <h1 className="text-[#403F3F] text-xl font-semibold leading-7">Dragon News Home</h1>
                    <div>
                        {
                            news.map((singleNews,idx)=><MiddleNews key={idx} singleNews={singleNews}></MiddleNews>)
                        }
                    </div>
                </div>
                <div>
                    <RightSide/>
                </div>
            </div>
        </div>
    );
};

export default Home;