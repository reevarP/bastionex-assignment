import React from "react";
import styles from "./sidebar.module.css";
import ReferralEarnings from "../../ReferralEarnings/ReferralEarnings";
import { sidebarLinks } from "../../../Services/constants";
import { AiFillInfoCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { selectLink } from "../../../Redux/Slices/dashboardSlice";

const Sidebar = () => {
    const dispatch = useDispatch();
    const { selectedLink } = useSelector((state) => state.dashboard);
    return (
        <div className={styles.container}>
            <ReferralEarnings />
            {sidebarLinks.map((curElem) => {
                return (
                    <div className={selectedLink === curElem.label ? styles.eachLinkActive : styles.eachLink} onClick={() => dispatch(selectLink(curElem.label))}>
                        <div className={selectedLink === curElem.label ? styles.iconContainerActive : styles.iconContainer}>{curElem.icon}</div>
                        <div>{curElem.label}</div>
                    </div>
                );
            })}
            <div className={styles.horizontalLine}></div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div className={styles.linkIcon}>
                    <AiFillInfoCircle fontSize={24} />
                </div>
                <div className={styles.linkText}>Other Information</div>
            </div>
            <div className={styles.subLinks}>Payments</div>
            <div className={styles.subLinks}>Referral Policy</div>
            <div className={styles.subLinks}>Terms & Conditions</div>
        </div>
    );
};

export default Sidebar;
