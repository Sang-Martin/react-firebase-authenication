import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineMail, AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import { MdOutlineNotifications } from "react-icons/md";

const Appbar = () => {
  return (
    <div class="navbar bg-base-100 shadow-lg">
      <IconContext.Provider value={{ size: "1.5rem" }}>
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">SHOES STORE</a>
        </div>
        <div class="flex- gap-1">
          {/* Email */}
          <button class="btn btn-square btn-ghost">
            <AiOutlineMail />
          </button>
          {/* Notification */}
          <button class="btn btn-square btn-ghost">
            <MdOutlineNotifications />
          </button>
          {/* Avatar */}
          <button class="btn btn-square btn-ghost">
            <AiOutlineUser />
          </button>
          {/* setting */}
          <button class="btn btn-square btn-ghost">
            <AiOutlineSetting />
          </button>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Appbar;
