import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const FindUs = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold mt-6">Find Us On</h3>
      <div className="*:w-full join flex join-vertical mt-3">
        <NavLink className="btn justify-start join-item bg-base-100">
          <FaFacebook size={20}></FaFacebook> Facebook
        </NavLink>
        <NavLink className="btn justify-start join-item bg-base-100">
          <FaTwitter size={20}></FaTwitter> Twitter
        </NavLink>
        <NavLink className="btn justify-start join-item bg-base-100">
          <FaInstagram size={20}></FaInstagram> Instagram
        </NavLink>
      </div>
    </div>
  );
};

export default FindUs;
