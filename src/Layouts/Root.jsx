import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="max-w-screen-xl font-poppins mx-auto">
            
            <Outlet/>
        </div>
    );
};

export default Root;