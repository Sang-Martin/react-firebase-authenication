import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigator = useNavigate();

  function onHandleClick (e) {
    e.preventDefault();
    navigator('/')
  }

  return (
    <div className=" w-3/4 m-auto mt-10">
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
          <span>Oops! Page not found</span>
        </div>
      </div>

      <button className='btn mt-6' onClick={onHandleClick}>Back to home</button>
    </div>
  );
};

export default PageNotFound;
