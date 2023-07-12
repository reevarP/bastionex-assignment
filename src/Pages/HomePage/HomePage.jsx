import React from "react";
import styles from "./homePage.module.css";
import { HiOutlineTrophy } from "react-icons/hi2";
import { leaderboardData } from "../../Services/constants";
import { AiFillCaretDown, AiFillCaretUp, AiOutlineTwitter } from "react-icons/ai";
import rank1 from "../../Assets/rank1.PNG";
import rank2 from "../../Assets/rank2.PNG";
import rank3 from "../../Assets/rank3.PNG";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { RiFileCopyFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoTelegram, BiLogoWhatsapp } from "react-icons/bi";

const HomePage = () => {
    return (
        <div className="main-container">
            <div className={styles.container}>
                <div className={styles.headingContainer}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ display: "flex", alignItems: "center", marginRight: "0.5rem" }}>
                            <HiOutlineTrophy fontSize={20} color="#bc8135" />
                        </div>
                        <div style={{ color: "#ffffff", fontSize: "20px", display: "flex", alignItems: "center", marginRight: "1rem", fontWeight: "600" }}>LEADERBOARDS</div>
                        <div style={{ color: "#55bdd7", fontSize: "14px" }}>(YOUR RANKING 2nd)</div>
                    </div>
                    <div style={{ color: "#c7c7c7", fontSize: "12px", fontWeight: "500", paddingRight: "1rem", display: "flex", alignItems: "center" }}>EARNINGS</div>
                </div>

                <div style={{ marginBottom: "4rem" }}>
                    {leaderboardData.map((curElem, index) => {
                        return (
                            <div className={index === 1 ? styles.eachCardActive : styles.eachCard}>
                                {index === 1 && (
                                    <div className={styles.marker}>
                                        <PiPaperPlaneRightFill />
                                    </div>
                                )}
                                <div className={styles.leftPart}>
                                    <div style={{ fontSize: "28px", fontWeight: "700", color: "#ffffff", marginRight: "1rem" }}>{index + 1}</div>
                                    <div className={styles.posChange}>
                                        <div style={{ display: "flex", alignItems: "flex-end" }}>
                                            {curElem.positionChange.includes("+") ? <AiFillCaretUp color="#3ad774" /> : <AiFillCaretDown color="#ec1c1f" />}
                                        </div>
                                        <div style={{ fontSize: "12px", color: "#ffffff", fontWeight: "600" }}>{curElem.positionChange}</div>
                                    </div>
                                    <div style={{ display: "flex" }}>
                                        <div className="hexagon hexagon2">
                                            <div className="hexagon-in1">
                                                <div className="hexagon-in2"></div>
                                            </div>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                            <div className={styles.userName}>{curElem.name}</div>
                                            <div className={styles.countryName}>{curElem.country}</div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <div className={styles.medalIcon}>
                                        {index < 3 ? <img src={index === 0 ? rank1 : index === 1 ? rank2 : index === 2 ? rank3 : null} alt="" style={{ height: "2rem" }} /> : null}
                                    </div>
                                    <div className={styles.earningNum}>{curElem.earning}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className={styles.referYourFriend}>
                    <div className={styles.referLeft}>
                        <div style={{ fontSize: "32px", color: "#ffffff", fontWeight: "600" }}>Refer & Earn more</div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div style={{ fontSize: "12px", color: "#54afd7", fontWeight: "500", marginRight: "0.25rem" }}>Get 5MLD</div>
                            <div style={{ color: "#335a60", fontSize: "12px" }}>Promo code for new accounts!</div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.codeBox}>
                            0x00AsnkJUI0245x0hgy2
                            <div style={{ width: "2rem", backgroundColor: "#ffffff", height: "100%", borderRadius: "0 30px 30px 0", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <RiFileCopyFill color="#444444" fontSize={18} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.socialMediaContainer}>
                    <div style={{ color: "#ffffff", marginRight: "0.5rem" }}>Share Code:</div>
                    <div className={styles.socialMediaIcons}>
                        <div className={`${styles.soMedIcon} ${styles.facebook}`}>
                            <FaFacebookF />
                        </div>
                        <div className={`${styles.soMedIcon} ${styles.telegram}`}>
                            <BiLogoTelegram />
                        </div>
                        <div className={`${styles.soMedIcon} ${styles.twitter}`}>
                            <AiOutlineTwitter />
                        </div>
                        <div className={`${styles.soMedIcon} ${styles.whatsapp}`}>
                            <BiLogoWhatsapp />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
