import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SocialLogin = () => {
  const { googleSignUp, githubSignUp } = useContext(AuthContext);

  return (
    <div>
      <h2 className="text-black font-semibold mb-3 text-xl">Login With</h2>

      <div className="*:w-full space-y-3">
        <button
          onClick={googleSignUp}
          className="btn bg-base-100 border-2 shadow-none"
        >
          <FaGoogle size={20}></FaGoogle> Login in with Google
        </button>
        <button
          onClick={githubSignUp}
          className="btn bg-base-100 border-2 shadow-none"
        >
          <FaGithub size={20}></FaGithub> Login in with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
