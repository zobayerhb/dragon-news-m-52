import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const FindUs = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold mt-6">Find Us On</h3>
      <div className="*:w-full join flex join-vertical mt-3">
        <Link className="btn justify-start join-item bg-white">
          <FaFacebook size={20}></FaFacebook> Facebook
        </Link>
        <Link className="btn justify-start join-item bg-white">
          <FaTwitter size={20}></FaTwitter> Twitter
        </Link>
        <Link className="btn justify-start join-item bg-white">
          <FaInstagram size={20}></FaInstagram> Instagram
        </Link>
      </div>
    </div>
  );
};

export default FindUs;
