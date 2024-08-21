import React from "react";
import { BellOutlined, SearchOutlined, MenuOutlined } from "@ant-design/icons";

interface HeaderProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ setIsOpen, isOpen }) => {
  return (
    <header className="flex itemcenter justify-between bg-white p-3 shadow-lg ">
      <div className="flex items-center">
        <img src="/images/logo-fold.png" alt="Logo" />
        <span className="text-[26px] font-bold hidden lg:block ">
          Modernize
        </span>
        <button
          className="lg:hidden text-xl ml-3 mr-3"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuOutlined className="text-2xl  text-blue-600" />
        </button>

        <SearchOutlined className="text-2xl ml-3 lg:hidden text-blue-600" />
      </div>
      <div className="flex items-center space-x-4 mr-[24px] ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="1.7em"
          height="1.3em"
          viewBox="0 0 640 480"
        >
          <path fill="#012169" d="M0 0h640v480H0z"></path>
          <path
            fill="#FFF"
            d="m75 0l244 181L562 0h78v62L400 241l240 178v61h-80L320 301L81 480H0v-60l239-178L0 64V0z"
          ></path>
          <path
            fill="#C8102E"
            d="m424 281l216 159v40L369 281zm-184 20l6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"
          ></path>
          <path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z"></path>
          <path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z"></path>
        </svg>
        <div className="relative">
          <BellOutlined className="text-xl" />
          <span className="absolute -top-2 -right-1 rounded-[50%] bg-red-600 px-1 text-xs text-white">
            5
          </span>
        </div>
        <img
          src="/images/th.jpg"
          alt="User Avatar"
          className="h-10 w-10 rounded-full"
        />
        <span className="text-gray-900 hidden sm:block">X'eriya Ponald</span>
      </div>
    </header>
  );
};
export default Header;
