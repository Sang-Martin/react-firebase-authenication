import React from "react";

import {Outlet, useNavigate} from 'react-router-dom'

import { onAuthStateChanged } from "firebase/auth";
// import {auth} from "libs/firebase"

import AppBar from "../components/AppBar";
import SideBar from "../components/SideBar";
import Panel from "../components/panels/Panel";
import AllProductPanel from "../components/panels/AllProductPanel";



const DashBoardPage = () => {
  return (
    <div className="">
      <AppBar />
      <div className="mt-6 flex flex-row p-2 gap-2 ">
          {/* sidebar */}
        <div className=" max-w-fit">
          <SideBar  />
        </div>
        {/* panel */}
        <div className="w-full">
          {/* <Panel /> */}
          <AllProductPanel/>
        </div>
      </div>
    </div>
  );
};

export default DashBoardPage;
