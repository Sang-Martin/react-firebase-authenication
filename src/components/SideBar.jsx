import React from "react";
import { useNavigate } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { FaUserFriends, FaListAlt } from "react-icons/fa";
import {BsStarHalf, BsFillCartFill, BsFillTagFill, BsFillXDiamondFill} from 'react-icons/bs'
import {MdOutlineSecurity, MdPageview} from "react-icons/md"
import {AiOutlineDropbox} from 'react-icons/ai'
import { IconContext } from "react-icons";

const Sidebar = () => {
  const navigator = useNavigate();

  function onSignOut(e) {
    navigator("/");
  }
  return (
    <div className="p-4 bg-teal-200 rounded-lg">
      <IconContext.Provider value={{ size: "1.3rem" }}>
      <div className="flex flex-col gap-4">

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

        <button className="btn" onClick={onSignOut}>
          Sign out
        </button>
      </div>
      </IconContext.Provider>
    </div>
  );
};

export default Sidebar;
