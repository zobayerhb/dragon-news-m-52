import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const { signUpUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const handleSignUp = (e) => {
    e.preventDefault();

    setError({});

    // get form data
    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 5) {
      setError({ ...error, name: "name should be more then 5 characters" });
      return;
    }
    const photoURL = form.get("photoURL");
    const email = form.get("email");
    const password = form.get("password");
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      setError({
        ...error,
        pass: "Password must be at least one uppercase, one lowercase, one numbers and one special characters",
      });
      return;
    }

    // console.log({ name, photoURL, email, password });

    // sign up user
    signUpUser(email, password)
      .then((result) => {
        console.log(result.user);
        alert("User successfully register");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center pt-10">
      <div className="card bg-white w-full max-w-md shrink-0 rounded-none py-10">
        <h2 className="text-xl font-semibold text-center text-black">
          Register your account
        </h2>
        <form onSubmit={handleSignUp} className="card-body">
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
          {error.name && (
            <label className="label">
              <span className="label-text text-sm text-red-600">
                {error.name}
              </span>
            </label>
          )}
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
              type="text"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          {error.pass && (
            <label className="label">
              <span className="label-text text-sm text-red-600">
                {error.pass}
              </span>
            </label>
          )}
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
