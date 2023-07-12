import React, { useRef } from "react";
import styles from "./sidebarMenuItem.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sidebarAccordionToggler } from "../../../../Redux/Slices/dashboardSlice";
import { AiFillCaretRight } from "react-icons/ai";

const SidebarMenuItem = ({ data, location }) => {
    const dispatch = useDispatch();
    const navigateTo = useNavigate();
    const { openedAccordion } = useSelector((state) => state.dashboard);

    const subItemsRef = useRef(null);
    const goToPage = (path, label) => {
        if (path) {
            navigateTo(path);
        } else {
            if (data.route) {
                navigateTo(data.route);
            } else {
                // toggleAccordion();
                dispatch(sidebarAccordionToggler(label));
            }
        }
    };

    return (
        <>
            <div className={location.pathname === data.route ? styles.eachSidebarLinkActive : styles.eachSidebarLink} onClick={() => goToPage(false, data.label)}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div className={styles.iconContainer} style={{ color: location.pathname === data.route ? "#353535" : "#ffffff" }}>
                        {data.icon}
                    </div>
                    <div className={styles.labelContainer}>{data.label}</div>
                </div>
                {data.children && data.children.length > 0 && (
                    <>
                        <AiFillCaretRight className={`${styles.arrow} ${openedAccordion === data.label ? styles.arrowDown : styles.arrowRight}`} />
                    </>
                )}
            </div>
            <div
                ref={subItemsRef}
                className={`${styles.subItemsContainer} ${openedAccordion === data.label ? styles.open : styles.close}`}
                style={{ maxHeight: openedAccordion === data.label ? `${subItemsRef.current.scrollHeight}px` : "0px" }}
            >
                {data.children &&
                    data.children.map((cur) => {
                        return (
                            <div key={cur.label} className={location.pathname === cur.route ? styles.eachSidebarSubLinkActive : styles.eachSidebarSubLink} onClick={() => goToPage(cur.route, false)}>
                                <div className={styles.labelContainer}>{cur.label}</div>
                            </div>
                        );
                    })}
            </div>
        </>
    );
};

export default SidebarMenuItem;
