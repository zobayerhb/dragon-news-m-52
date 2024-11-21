import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="text-black font-semibold mb-3 text-xl">Login With</h2>

      <div className="*:w-full space-y-3">
        <button className="btn bg-base-100 border-2 shadow-none">
          <FaGoogle size={20}></FaGoogle> Login in with Google
        </button>
        <button className="btn bg-base-100 border-2 shadow-none">
          <FaGithub size={20}></FaGithub> Login in with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
