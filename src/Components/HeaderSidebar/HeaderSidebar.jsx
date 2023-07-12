import React from "react";
import styles from "./headerSidebar.module.css";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";

const HeaderSidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Header />
            </div>
            <div className={styles.sidebar}>
                <Sidebar />
            </div>
        </div>
    );
};

export default HeaderSidebar;
