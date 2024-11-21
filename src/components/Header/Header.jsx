import moment from "moment";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <p className="text-gray-500 mb-2">Journalism Without Fear or Favour</p>
        <span className="font-semibold">
          {moment().format("dddd, MMMM Q, YYYY")}
        </span>
      </div>
    </div>
  );
};

export default Header;
