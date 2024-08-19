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
import "../../app/globals.css"

const Sidebar =({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className={`min-h-screen w-[350px] bg-white border-t-2 border-r-2 p-4 transform ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"} transition-transform duration-300 ease-in-out fixed lg:relative z-20`}>
      <div className="p-4"> 
      <ul className="">
        <li className="mb-3 mt-5">
          <Link href="/" legacyBehavior>
          <a className=" sidebar-item-active">
              <HomeOutlined className="sidebar-item-icon" />
              <span className=" sidebar-item-title ">Dashboard</span>
            </a>
          </Link>
        </li>
        <li className="mb-3">
          <Link href="" legacyBehavior>
            <a className="sidebar-item">
              <AppstoreOutlined className="sidebar-item-icon" />
              <span className=" sidebar-item-title">Orders</span>
              <span className="sidebar-item-notification">
                16
              </span>
            </a>
          </Link>
        </li>
        <li className="mb-3">
          <Link href="/" legacyBehavior>
            <a className="sidebar-item">
              <UserOutlined className="sidebar-item-icon" />
              <span className="sidebar-item-title">Products</span>
            </a>
          </Link>
        </li>
        <li className="mb-3">
          <Link href="/" legacyBehavior>
          <a className="sidebar-item">             
           <AppstoreOutlined className="sidebar-item-icon" />
              <span className="sidebar-item-title">Categories</span>
            </a>
          </Link>
        </li>
        <li className="mb-3">
          <Link href="/" legacyBehavior>
            <a className="sidebar-item">
              <UserOutlined className="sidebar-item-icon" />
              <span className="sidebar-item-title">Customers</span>
            </a>
          </Link>
        </li>
        <li className="mb-3">
          <Link href="/" legacyBehavior>
            <a className="sidebar-item">
              <BarChartOutlined className="sidebar-item-icon" />
              <span className="sidebar-item-title">Reports</span>
            </a>
          </Link>
        </li>
        <li className="mb-3">
          <Link href="/" legacyBehavior>
            <a className="sidebar-item">
              <StarOutlined className="sidebar-item-icon" />
              <span className="sidebar-item-title">Coupons</span>
            </a>
          </Link>
        </li>
        <li className="mb-3">
          <Link href="/" legacyBehavior>
            <a className="sidebar-item">
              <MailOutlined className="sidebar-item-icon" />
              <span className="sidebar-item-title">Inbox</span>
            </a>
          </Link>
        </li>
        <li className="mt-10">
          <p className="sidebar-section-title">Authentication</p>
          <Link href="/signup" legacyBehavior>
            <a className="sidebar-item sidebar-section">
              <UserOutlined className="sidebar-item-icon" />
              <span className="sidebar-item-title ">Sign Up</span>
            </a>
          </Link>
          <Link href="/signin" legacyBehavior>
          <a className="sidebar-item sidebar-section">
              <UserOutlined className="sidebar-item-icon" />
              <span className="sidebar-item-title">Sign In</span>
            </a>
          </Link>
          <Link href="/" legacyBehavior>
          <a className="sidebar-item sidebar-section">
              <LockOutlined className="sidebar-item-icon " />
              <span className="sidebar-item-title">Forgot Password</span>
            </a>
          </Link>
          <Link href="/" legacyBehavior>
          <a className="sidebar-item sidebar-section">
              <KeyOutlined className="sidebar-item-icon " />
              <span className="sidebar-item-title">Reset Password</span>
            </a>
          </Link>
        </li>
      
      </ul>
    </div>
    </div>
  );
};

export default Sidebar;
