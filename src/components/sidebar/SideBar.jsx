import React from "react";
import { useNavigate } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { FaUserFriends, FaListAlt } from "react-icons/fa";
import {
  BsStarHalf,
  BsFillCartFill,
  BsFillTagFill,
  BsFillXDiamondFill,
} from "react-icons/bs";
import { MdOutlineSecurity, MdPageview } from "react-icons/md";
import { AiOutlineDropbox } from "react-icons/ai";
import { IconContext } from "react-icons";

// firebase
import { signOut } from "firebase/auth";
import { auth } from "../../libs/firebase";
import ProductOptions from "./ProductOptions";

const Sidebar = () => {
  const navigator = useNavigate();

  function onLogOutRequest(e) {
    signOut(auth);
  }

  return (
    <div className=" w-60">
      {/* view panel */}
      <div className='p-4 bg-zinc-200 rounded-lg mb-2'>
      <ProductOptions/>
      </div>
      {/* sidebar functions */}
      <div className=" bg-teal-200 rounded-lg">
        <IconContext.Provider value={{ size: "1.3rem" }}>
          <div className="flex flex-col gap-2">
            <button className="btn btn-ghost flex justify-start gap-2">
              <FaUserFriends />
              VENDORS
            </button>

            <button className="btn btn-ghost flex justify-start gap-2">
              <FaUserFriends />
              USERS
            </button>

            <button className="btn btn-ghost flex justify-start gap-2">
              <AiOutlineDropbox />
              PRODUCTS
            </button>

            <button className="btn btn-ghost flex justify-start gap-2">
              <BsFillCartFill />
              ORDERS
            </button>

            <button className="btn btn-ghost flex justify-start gap-2">
              <BsStarHalf />
              REVIEWS
            </button>

            <button className="btn btn-ghost flex justify-start gap-2">
              <BsFillTagFill />
              BRANDS
            </button>

            <button className="btn btn-ghost flex justify-start gap-2">
              <BsFillXDiamondFill />
              ICONS
            </button>

            <button className="btn btn-ghost flex justify-start gap-2">
              <MdOutlineSecurity />
              AUTHENTICATION
            </button>

            <button className="btn btn-ghost flex justify-start gap-2">
              <MdPageview />
              OTHER PAGES
            </button>

            <button className="btn btn-ghost flex justify-start gap-2">
              <FaListAlt />
              CATEGORIES
            </button>

            <button className="btn m-4 mt-2" onClick={onLogOutRequest}>
              Sign out
            </button>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Sidebar;
