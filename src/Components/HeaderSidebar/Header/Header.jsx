import React from "react";
import styles from "./header.module.css";
import { RiCoinsFill } from "react-icons/ri";
import { BsPersonCircle } from "react-icons/bs";
import { AiFillDownCircle } from "react-icons/ai";
import logo from "../../../Assets/logo.PNG";

const Header = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.headerLeft}>
                    <img src={logo} alt="" />
                </div>

                <div className={styles.headerRight}>
                    <div className={styles.walletBox}>
                        <div className={styles.walletAmount}>
                            <div className={styles.walletText}>WALLET</div>
                            <div className={styles.walletNum}>7120.00 MLD</div>
                        </div>
                        <div className={styles.depositBox}>
                            <RiCoinsFill color="#ffffff" style={{ marginRight: "0.5rem" }} />
                            Deposit
                        </div>
                    </div>

                    <div className={styles.profileContainer}>
                        <BsPersonCircle fontSize={40} color="#ffffff" />
                        <div className={styles.downIcon}>
                            <AiFillDownCircle />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
