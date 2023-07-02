import React from "react";
import "./RightMenu.css";
import { AiOutlineBell } from "react-icons/ai";
import userImage from "../../assets/user.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useMenuHandle } from "../../context/menuHandle";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";

const RightMenu = () => {
  const { menuOpen } = useMenuHandle();
  const navigate = useNavigate();

  const onClickLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/login");
  };

  return (
    <div>
      <div className="right-menu-container">
        <h1 className="text-lg lg:text-2xl font-bold flex items-center">
          <span className="mobile-menu-icon" onClick={() => menuOpen()}>
            <GiHamburgerMenu />
          </span>
          Dashboard
        </h1>
        <div className="right-container">
          <div className="search-box-container">
            <div className="relative text-gray-600 focus-within:text-gray-400">
              <input
                type="search"
                name="q"
                className="py-1 text-sm text-black bg-white rounded-xl pl-2 pr-7 focus:outline-none "
                placeholder="Search..."
                autoComplete="off"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pl-2">
                <button
                  type="submit"
                  className="pr-2 focus:outline-none focus:shadow-outline"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </span>
            </div>
          </div>
          <div className="text-lg lg:text-2xl">
            <AiOutlineBell />
          </div>
          <div className="dropdown inline-block relative">
            <img
              src={userImage}
              className="w-5 lg:w-6 rounded-full bg-filedDarker"
              alt="user"
            />
            <ul className="dropdown-menu hidden absolute  text-gray-700 pt-2 right-0">
              <li className="hover:bg-gray-300  " onClick={onClickLogout}>
                <button className="rounded-t flex items-center gap-1 bg-white py-2 text-black font-normal text-base px-5  whitespace-no-wrap">
                  <BiLogIn /> Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mobile-search-container">
        <div className="relative text-gray-600 focus-within:text-gray-400">
          <input
            type="search"
            name="q"
            className="py-2  text-sm w-full text-black bg-white rounded-xl pl-2 pr-7 focus:outline-none "
            placeholder="Search..."
            autoComplete="off"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pl-2">
            <button
              type="submit"
              className=" pr-2 focus:outline-none focus:shadow-outline"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-4 h-4"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RightMenu;
