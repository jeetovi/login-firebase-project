import React from "react";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import app from "../../public/firebase.config";
import { Link } from "react-router-dom";

const Login = () => {
  const auth = getAuth(app);


  const handleloginsubmit = event => {
    event.preventDefault();
    const form = event.target.value;
    const email = event.target.email.value;
    const password= event.target.password.value;
    console.log(email, password)
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential ) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleloginsubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email" name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password" name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <Link to='/regester'>
            <button className="btn   btn-link  ">go to regisrer </button>

            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
