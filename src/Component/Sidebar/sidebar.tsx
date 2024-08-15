import React from "react";
import styles from "./sidebar.module.css";

import {
  FaHome,
  FaBars,
  FaQuestionCircle,
  FaFolder,
  FaUsers,
  FaChartBar,
  FaStar,
  FaComments,
  FaUserPlus,
  FaSignInAlt,
  FaLock,
  FaSync,
} from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.navMenu}>
        <ul>
          <li className={styles.active}>
            <FaHome className={styles.icon} />
            <span>Dashboard</span>
          </li>
          <li>
            <FaBars className={styles.icon} />
            <span>Orders</span>
            <span className={styles.badge}>16</span>
          </li>
          <li>
            <FaQuestionCircle className={styles.icon} />
            <span>Products</span>
          </li>
          <li>
            <FaFolder className={styles.icon} />
            <span>Categories</span>
          </li>
          <li>
            <FaUsers className={styles.icon} />
            <span>Customers</span>
          </li>
          <li>
            <FaChartBar className={styles.icon} />
            <span>Reports</span>
          </li>
          <li>
            <FaStar className={styles.icon} />
            <span>Coupons</span>
          </li>
          <li>
            <FaComments className={styles.icon} />
            <span>Inbox</span>
          </li>
        </ul>
      </nav>
      <div className={styles.authMenu}>
        <h3>Authentication</h3>
        <ul>
          <li>
            <FaUserPlus className={styles.icon} />
            <span>Sign Up</span>
          </li>
          <li>
            <FaSignInAlt className={styles.icon} />
            <span>Sign In</span>
          </li>
          <li>
            <FaLock className={styles.icon} />
            <span>Forgot Password</span>
          </li>
          <li>
            <FaSync className={styles.icon} />
            <span>Reset Password</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
