import moment from "moment";
import logo from '../../../assets/logo.png'

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center px-3 my-8">
            <img src={logo} alt="" />
            <p className="text-lg font-normal leading-7 pt-5">Journalism Without Fear or Favour</p>
            <p className="text-xl text-[#706F6F] font-medium leading-7 pt-3">
                <span className="text-[#403F3F]">{moment().format('dddd')}</span>
                {moment().format(', MMMM D, YYYY')}
            </p>
        </div>
    );
};

export default Header;