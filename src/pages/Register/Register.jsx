import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex justify-center items-center pt-10">
      <div className="card bg-white w-full max-w-md shrink-0 rounded-none py-10">
        <h2 className="text-xl font-semibold text-center text-black">
          Register your account
        </h2>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-black text-base">
                Your Name
              </span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-black text-base">
                Photo URL
              </span>
            </label>
            <input
              name="photoURL"
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
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
          </div>
          <div className="form-control mt-6 ">
            <button className="bg-neutral text-white font-semibold text-center py-3 rounded">
              Register
            </button>
          </div>
        </form>
        <p className="text-center">
          Al ready have an account ?{" "}
          <Link to="/auth/login" className="text-red-500 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
