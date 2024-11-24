import { Link, NavLink } from "react-router-dom";
import userIcon from "../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center pt-5">
      <div>{user && user.email}</div>
      <div className="space-x-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-3 items-center">
        <div>
          {user && user?.email ? (
            <div className="flex gap-2 items-center">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={user?.photoURL}
                alt=""
              />
              <p>{user.displayName}</p>
            </div>
          ) : (
            <img src={userIcon} alt="" />
          )}
        </div>
        {user ? (
          <button
            onClick={userSignOut}
            className="btn btn-neutral rounded-none font-semibold text-white"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="btn btn-neutral rounded-none font-semibold text-white"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
