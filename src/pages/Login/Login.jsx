import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-white w-full max-w-xl shrink-0 rounded-none py-10">
        <h2 className="text-xl font-semibold text-center text-black">
          Login your account
        </h2>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-black text-base">
                Email Address
              </span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-black text-base">
                Password
              </span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6 ">
            <button className="bg-neutral text-white font-semibold text-center py-3 rounded">
              Login
            </button>
          </div>
        </form>
        <p className="text-center">
          Don't have an account ?{" "}
          <Link to="/auth/register" className="text-red-500 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
