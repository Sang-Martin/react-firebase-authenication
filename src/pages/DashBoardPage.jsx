import React, { useState } from "react";

import { Outlet, useNavigate } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../libs/firebase";


import AppBar from "../components/appbar/AppBar";
import SideBar from "../components/sidebar/SideBar";


const DashBoardPage = () => {
  const [isUser, setIsUser] = useState(false);
  const navigator = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsUser(true);
    } else {
      setIsUser(false);
      navigator("/");
    }
  });

  if (isUser) {
    return (
      <div className="">
        <AppBar />
        <div className="mt-6 flex flex-row p-2 gap-2 ">
          {/* sidebar */}
          <div className=" max-w-fit">
            <SideBar />
          </div>
          {/* panel */}
          <div className="w-full border-2 rounded-lg p-4">
            <Outlet/>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default DashBoardPage;
