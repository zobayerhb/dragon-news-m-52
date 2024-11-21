import { NavLink } from "react-router-dom";
import userIcon from "../../assets/user.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center pt-5">
      <div></div>
      <div className="space-x-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-3 items-center">
        <div>
          <img src={userIcon} alt="" />
        </div>
        <button className="btn btn-neutral rounded-none font-semibold text-white">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
