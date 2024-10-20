import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div>
            <div className="bg-[#F3F3F3] flex items-center p-4 rounded-lg">
                <button className="btn bg-[#D72050] hover:bg-[#D72050] text-white">Latest</button>
                <Marquee pauseOnHover className="text-lg font-semibold leading-7 text-[#403F3F]">
                    <Link to='/home' className="pr-5">!   Match Highlights: Germany vs Spain as...</Link>
                    <Link to='/home' className="pr-5">!   Match Highlights: Germany vs Spain as...</Link>
                    <Link to='/home' className="pr-5">!   Match Highlights: Germany vs Spain as...</Link>
                    <Link to='/home' className="pr-5">!   Match Highlights: Germany vs Spain as...</Link>
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;