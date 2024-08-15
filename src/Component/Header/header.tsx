
import React from 'react';
import styles from './header.module.css';
import { FaRegBell, FaFlagUsa, FaUserAlt, FaBars, FaSearch   } from "react-icons/fa";

const Header: React.FC<{ toggleSidebar: () => void }> = ({ toggleSidebar })=> {
return (
    
    <header className={styles.header}>
            <div className={styles.logoSection}>
                <img  className={styles.logo} />
                <h1 className={styles.title}>Modernize</h1>
                <FaBars size={24} className={styles.menuIcon} onClick={toggleSidebar}/>
                 <FaSearch size={24} className={styles.searchIcon} />
            </div>
            <div className={styles.userSection}>
                <div className={styles.flag}><FaFlagUsa /> </div>
                <div className={styles.notification}>
                    <i className={styles.FaRegBell }><FaRegBell /></i>
                    <span className={styles.badge}>5</span>
                </div>
                <div className={styles.avatar} ><FaUserAlt /> </div>
                <span className={styles.userName}>X'eriya Ponald</span>
            </div>
        </header>
    
)
}
export default Header;