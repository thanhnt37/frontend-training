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
import "../../app/globals.scss";

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={`min-h-screen w-[350px] bg-white border-t-2 border-r-2 p-4 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      } transition-transform duration-300 ease-in-out fixed lg:relative z-20`}
    >
      <div className="p-4">
        <ul className="sidebar">
          <li className=" mb-3 mt-5">
            <Link href="/" legacyBehavior>
              <a className="  bg-blue-600 text-white flex items-center p-4 text-base rounded-lg  ">
                <HomeOutlined className="sidebar__icon" />
                <span className=" sidebar__title ">Dashboard</span>
              </a>
            </Link>
          </li>
          <li className="mb-3">
            <Link href="" legacyBehavior>
              <a className="sidebar__item">
                <AppstoreOutlined className="sidebar__icon" />
                <span className=" sidebar__title">Orders</span>
                <span className=" ml-auto bg-gray-900 text-gray-100 text-xs rounded-full p-1 flex items-center justify-center">16</span>
              </a>
            </Link>
          </li>
          <li className="mb-3">
            <Link href="/" legacyBehavior>
              <a className="sidebar__item">
                <UserOutlined className="sidebar__icon" />
                <span className="sidebar__title">Products</span>
              </a>
            </Link>
          </li>
          <li className="mb-3">
            <Link href="/" legacyBehavior>
              <a className="sidebar__item">
                <AppstoreOutlined className="sidebar__icon" />
                <span className="sidebar__title">Categories</span>
              </a>
            </Link>
          </li>
          <li className="mb-3">
            <Link href="/" legacyBehavior>
              <a className="sidebar__item">
                <UserOutlined className="sidebar__icon" />
                <span className="sidebar__title">Customers</span>
              </a>
            </Link>
          </li>
          <li className="mb-3">
            <Link href="/" legacyBehavior>
              <a className="sidebar__item">
                <BarChartOutlined className="sidebar__icon" />
                <span className="sidebar__title">Reports</span>
              </a>
            </Link>
          </li>
          <li className="mb-3">
            <Link href="/" legacyBehavior>
              <a className="sidebar__item">
                <StarOutlined className="sidebar__icon" />
                <span className="sidebar__title">Coupons</span>
              </a>
            </Link>
          </li>
          <li className="mb-3">
            <Link href="/" legacyBehavior>
              <a className="sidebar__item">
                <MailOutlined className="sidebar__icon" />
                <span className="sidebar__title">Inbox</span>
              </a>
            </Link>
          </li>
          <li className="sidebar__section mt-3">
            <p className="sidebar__section--auth">Authentication</p>
            <Link href="/signup" legacyBehavior>
              <a className="sidebar__item mt-3 ">
                <UserOutlined className="sidebar__icon" />
                <span className="sidebar__section--title ">Sign Up</span>
              </a>
            </Link>
            <Link href="/signin" legacyBehavior>
              <a className="sidebar__item ">
                <UserOutlined className="sidebar__icon" />
                <span className="sidebar__section--title">Sign In</span>
              </a>
            </Link>
            <Link href="/" legacyBehavior>
              <a className="sidebar__item sidebar__section--auth">
                <LockOutlined className="sidebar__icon " />
                <span className="sidebar__section--title">Forgot Password</span>
              </a>
            </Link>
            <Link href="/" legacyBehavior>
              <a className="sidebar__item sidebar__section--auth">
                <KeyOutlined className="sidebar__icon " />
                <span className="sidebar__section--title">Reset Password</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
