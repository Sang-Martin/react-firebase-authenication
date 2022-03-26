import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../libs/firebase'

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const LoginPage = () => {
  const navigator = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const notify = (error) => toast.error(error,{
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })

  function onLoginRequest(e) {
    e.preventDefault();
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigator("/dashboard");
      })
      .catch((error) => {
        notify('User not found')
      });
  }

  return (
    <div className=" min-h-screen flex justify-center items-center ">
      {/* display toast */}
      <ToastContainer/>

      <div className="flex rounded-lg bg-slate-200 w-3/4 flex-col max-w-screen-lg md:flex-row m-auto p-1 md:p-10">
        {/* image */}
        <div className="1/2 m-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-60 w-60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        {/* form */}

        <form onSubmit={onLoginRequest} className=" w-1/2  m-auto">
          <h2 className=" text-5xl font-bold mb-10">Welcome back</h2>
          <div className="flex gap-6 flex-col">
            <div className="form-control gap-1">
              <label htmlFor="email" className="label-text">
                Email
              </label>
              <input
                type="email"
                placeholder="email ..."
                className="input input-primary"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control gap-1">
              <label htmlFor="password" className="label-text">
                Password
              </label>
              <input
                type="password"
                placeholder="password ..."
                className="input input-primary"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="btn btn-accent w-full" type="submit">
              Sign In
            </button>
            <a href="#" className=" underline text-gray-400">
              Forgot password
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
