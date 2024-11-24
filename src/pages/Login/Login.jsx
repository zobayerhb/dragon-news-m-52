import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
  const { userSignIn, forgotPass } = useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  const handleSignIn = (e) => {
    e.preventDefault();

    // get form data
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userSignIn(email, password)
      .then((result) => {
        // console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
    // console.log({ email, password });
  };

  // password reset
  // const passwordReset = (email) => {
  //   const emailData = emailRef.current.value;
  //   if(!emailData){
  //     alert("please provide a valid email")
  //   }
  //   else{
  //     forgotPass(emailData)
  //     .then(()=>{
  //       alert('password reset email sent');
  //     })
  //     .catch(err=>{
  //       console.log(err.message);
  //     })
  //   }
  // };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-white w-full max-w-xl shrink-0 rounded-none py-10">
        <h2 className="text-xl font-semibold text-center text-black">
          Login your account
        </h2>
        <form onSubmit={handleSignIn} className="card-body">
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
            {error.login && (
              <label className="label text-sm text-red-600">
                {error.login}
              </label>
            )}
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
