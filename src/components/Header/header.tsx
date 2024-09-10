import React from "react";
import { BellOutlined, SearchOutlined, MenuOutlined } from "@ant-design/icons";

interface HeaderProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ setIsOpen, isOpen }) => {
  return (
    <header className="flex justify-between bg-white p-3 shadow-xl ">
      <div className="flex items-center">
        <img src="/images/logo-fold.png" alt="Logo" />
        <span className="text-3xl font-bold hidden lg:block ">
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
      <div className="flex items-center space-x-4 mr-6 ">
       <img src="../../icons/bg.svg" alt="language icons" />
        <div className="relative">
          <BellOutlined className="text-xl" />
          <span className="absolute -top-2 -right-1 rounded-full bg-red-600 px-1 text-xs text-white">
            5
          </span>
        </div>
        <img
          src="/images/avatar.jpg"
          alt="User Avatar"
          className="h-10 w-10 rounded-full"
        />
        <span className="text-gray-900 hidden sm:block">X'eriya Ponald</span>
      </div>
    </header>
  );
};
export default Header;
