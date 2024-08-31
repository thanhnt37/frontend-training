import React from "react";
import {
  HomeOutlined,
  AppstoreOutlined,
  UserOutlined,
  KeyOutlined,
  LockOutlined,
  MailOutlined,
  StarOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import Link from "next/link";
const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
    className={`min-h-screen w-80 bg-white border-t-2 border-r-2 p-4 transform ${
      isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
    } transition-transform duration-300 ease-in-out fixed lg:relative z-20 overflow-y-auto max-h-screen`}
  >
      <div className="p-4">
        <ul className="sidebar">
          <li className=" mb-3 mt-5">
            <Link href="/" legacyBehavior>
              <a className="  bg-blue-600 text-white flex p-4 rounded-lg  ">
                <HomeOutlined className="mr-3 text-xl" />
                <span className=" text-lg">Dashboard</span>
              </a>
            </Link>
          </li>
          <li className="mb-3">
            <Link href="" legacyBehavior>
              <a className="flex p-4 text-gray-400 hover:bg-blue-100 rounded-lg">
                <AppstoreOutlined className="mr-3 text-xl" />
                <span className=" text-lg">Orders</span>
                <span className=" ml-auto bg-gray-900 text-gray-100 text-xs rounded-full p-1 flex items-center justify-center">16</span>
              </a>
            </Link>
          </li>
          <li className="mb-3">
            <Link href="/" legacyBehavior>
              <a className="flex p-4 text-gray-400 hover:bg-blue-100 rounded-lg">
                <UserOutlined className="mr-3 text-xl" />
                <span className="text-lg">Products</span>
              </a>
            </Link>
          </li>
          <li className="mb-3">
            <Link href="/" legacyBehavior>
              <a className="flex p-4 text-gray-400 hover:bg-blue-100 rounded-lg">
                <AppstoreOutlined className="mr-3 text-xl" />
                <span className="text-lg">Categories</span>
              </a>
            </Link>
          </li>
          <li className="mb-3">
            <Link href="/" legacyBehavior>
              <a className="flex p-4 text-gray-400 hover:bg-blue-100 rounded-lg">
                <UserOutlined className="mr-3 text-xl" />
                <span className="text-lg">Customers</span>
              </a>
            </Link>
          </li>
          <li className="mb-3">
            <Link href="/" legacyBehavior>
              <a className="flex p-4 text-gray-400 hover:bg-blue-100 rounded-lg">
                <BarChartOutlined className="mr-3 text-xl" />
                <span className="text-lg">Reports</span>
              </a>
            </Link>
          </li>
          <li className="mb-3">
            <Link href="/" legacyBehavior>
              <a className="flex p-4 text-gray-400 hover:bg-blue-100 rounded-lg">
                <StarOutlined className="mr-3 text-xl" />
                <span className="text-lg">Coupons</span>
              </a>
            </Link>
          </li>
          <li className="mb-3">
            <Link href="/" legacyBehavior>
              <a className="flex p-4 text-gray-400 hover:bg-blue-100 rounded-lg">
                <MailOutlined className="mr-3 text-xl" />
                <span className="text-lg">Inbox</span>
              </a>
            </Link>
          </li>
          <li className="sidebar__section mt-3">
            <p className="text-gray-400">Authentication</p>
            <Link href="/signup" legacyBehavior>
              <a className="flex p-4 text-gray-600 hover:bg-blue-100 rounded-lg mt-3 ">
                <UserOutlined className="mr-3 text-xl" />
                <span className="text-gray-600 ">Sign Up</span>
              </a>
            </Link>
            <Link href="/signin" legacyBehavior>
              <a className="flex p-4 text-gray-600  hover:bg-blue-100 rounded-lg ">
                <UserOutlined className="mr-3 text-xl" />
                <span className="text-gray-600">Sign In</span>
              </a>
            </Link>
            <Link href="/" legacyBehavior>
              <a className="flex p-4 text-gray-600  hover:bg-blue-100 rounded-lg ">
                <LockOutlined className="mr-3 text-xl " />
                <span className="text-gray-600">Forgot Password</span>
              </a>
            </Link>
            <Link href="/" legacyBehavior>
              <a className="flex p-4 text-gray-600  hover:bg-blue-100 rounded-lg ">
                <KeyOutlined className="mr-3 text-xl " />
                <span className="text-gray-600">Reset Password</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
