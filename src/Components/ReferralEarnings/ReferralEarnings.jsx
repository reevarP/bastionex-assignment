import React from "react";
import styles from "./referralEarnings.module.css";
import rank2 from "../../Assets/rank2.PNG";

const ReferralEarnings = () => {
    return (
        <div className={styles.container}>
            <div className={styles.iconContainer}>
                <img src={rank2} alt="" height={30} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.textLine1}>Total Referral Earnings</div>
                <div className={styles.textLine2}>1950.00 MLD</div>
            </div>
        </div>
    );
};

export default ReferralEarnings;
