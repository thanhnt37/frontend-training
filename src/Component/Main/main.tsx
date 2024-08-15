import React from 'react';
import styles from './main.module.css';
import { FaCog, FaDollarSign, FaShoppingCart, FaUser, FaUsers } from "react-icons/fa";

const Main: React.FC = () => {
    return (
        <div className={styles.mainContainer}>
        <div className={styles.dashboardHeader}>
          <h1>Dashboard</h1>
          <button className={styles.manageButton }> <FaCog className={styles.facog} /> Manage
          
          </button>
        </div>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statContent}>
              <h2>$10,540</h2>
              <p>Total Revenue</p>
              <span className={styles.positiveChange}>22.45% ↑</span>
            </div>
            <div className={styles.statIcon}>
              <div className={styles.iconCircle}>
                 <FaDollarSign size={20} color='#1E5EFF'/>
              </div>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statContent}>
              <h2>1,056</h2>
              <p>Orders</p>
              <span className={styles.positiveChange}>22.45% ↑</span>
            </div>
            <div className={styles.statIcon}>
              <div className={styles.iconCircle}>
              <FaShoppingCart size={20} color='#1E5EFF'/>
              </div>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statContent}>
              <h2>$56</h2>
              <p>Active Sessions</p>
              <span className={styles.negativeChange}>2.45% ↓</span>
            </div>
            <div className={styles.statIcon}>
              <div className={styles.iconCircle}>
              <FaUser size={20} color='#1E5EFF'/>
              </div>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statContent}>
              <h2>$56</h2>
              <p>Total Sessions</p>
              <span className={styles.negativeChange}>0.45% ↓</span>
            </div>
            <div className={styles.statIcon}>
              <div className={styles.iconCircle}>
              <FaUsers size={20} color='#1E5EFF'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Main;