import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../libs/firebase";

const PageNotFound = () => {
  const navigator = useNavigate();
  const [isUser, setIsUser] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  });

  function onHandleClick(e) {
    e.preventDefault();
    isUser ? navigator("/dashboard") : navigator("/");
  }

  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className=" w-2/4">
        <h2 className="text-9xl font-san text-center text-red-400">OOPS!</h2>
        <h3 className=" text-3xl text-center uppercase my-4 mb-16">
          Page not found!
        </h3>
        <div class="alert alert-error shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Please comeback to dashboard or login</span>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="btn mt-6" onClick={onHandleClick}>
            {isUser ? "Back to dashboard" : "Log in"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
