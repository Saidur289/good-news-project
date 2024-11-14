import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Privider/AuthProvider";

const Register = () => {
  // destructure data from authProvider for use
  const {createNewUser, setUser, updateUserProfile} = useContext(AuthContext)
  const [error, setError] = useState({})
  // bring navigate for after register it will take you to home page
  const navigate = useNavigate()
  const handleSubmit = e => {
    e.preventDefault()
    const form = new FormData(e.target)
    const name = form.get('name')
    const email = form.get('email')
    const password = form.get('password')
    const photo = form.get('photo')
    
    // name valid
    if(name.length < 5){
      setError({...error, name: 'name must be 5 character'})
    }
    // function from authProvider
    createNewUser(email, password)
    .then((result) => {
      const user = result.user
      setUser(user)
      updateUserProfile({displayName: name, photoURL: photo})
      .then(() => {
        navigate('/')
      })
      .catch((error) => console.log(error))


    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorCode, errorMessage);
    });
  }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h1 className="font-semibold text-2xl text-center">
          Register Your Account
        </h1>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          {
            error.name && (
              <label className="label">
              <span className="label-text text-sm text-red-500">{error.name}</span>
            </label>
            )
          }
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo-url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
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
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
        <p className="font-semibold text-center">
          Already  Have An Account?{" "}
          <Link className="text-red-500" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
