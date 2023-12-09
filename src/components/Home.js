import React, { useContext } from "react";
import useNav from "../hooks/useNav";
import styles from "../styles/Home.module.css";
import Button from "@mui/material/Button";
import codingImage from "../images/Coding.png";
import homePageImageLight from "../images/homePageImageLight.jpg";
import homePageImageDark from "../images/homePageImageDark.jpg";
import { ReactComponent as LeetCode } from "../images/leetcode.svg";
import { ReactComponent as CodeForces } from "../images/codeforces.svg";
import { ReactComponent as CodeChef } from "../images/codechef.svg";
import { IconButton } from "@mui/material";
import Resume from "../images/Govardhan_Narasimha_Murthy_Resume.pdf";
import Text from "./Text";
import { NavContext } from "../context/NavContext";

function Home() {
    const homeRef = useNav("Home");
    const { isDarkMode } = useContext(NavContext);

    return (
        <section
            ref={homeRef}
            id="homeSection"
            style={{
                backgroundImage: `url(${
                    isDarkMode ? homePageImageDark : homePageImageLight
                })`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                transition: "all 1s ease",
            }}
            className={styles.homeContainer}
        >
            <div className={styles.bodyContainer}>
                <img
                    alt="Remy Sharp"
                    src={codingImage}
                    className={styles.profileImage}
                />
                <div className={styles.textBody}>
                    <Text
                        variant="h4"
                        className={styles.textName}
                        fontFamily="Courier New"
                        fontWeight="bold"
                    >
                        Hi, This is Govardhan
                    </Text>
                    <Text variant="body" className={styles.textDescription}>
                        Full Stack/Desktop Developer with a strong academic
                        background in Computer Science, currently pursuing
                        Graduate degree at the University of Colorado Boulder
                    </Text>
                    <div className={styles.avatarContainer}>
                        <IconButton
                            href="https://www.linkedin.com/in/govardhan-murthy/"
                            className={styles.avatarIconButton}
                            style={{
                                border: `1px solid ${
                                    isDarkMode ? "white" : "black"
                                }`,
                                transition: "all 1s ease",
                            }}
                        >
                            <i
                                className={`fa fa-linkedin`}
                                style={{
                                    color: isDarkMode ? "white" : "black",
                                    transition: "all 1s ease",
                                }}
                            ></i>
                        </IconButton>
                        <IconButton
                            href="https://github.com/GovardhanNM"
                            className={styles.avatarIconButton}
                            style={{
                                border: `1px solid ${
                                    isDarkMode ? "white" : "black"
                                }`,
                                transition: "all 1s ease",
                            }}
                        >
                            <i
                                className={`fa fa-github`}
                                style={{
                                    color: isDarkMode ? "white" : "black",
                                    transition: "all 1s ease",
                                }}
                            ></i>
                        </IconButton>
                        <IconButton
                            href="https://leetcode.com/ngovardhan566/"
                            className={styles.avatarIconButton}
                            style={{
                                border: `1px solid ${
                                    isDarkMode ? "white" : "black"
                                }`,
                                transition: "all 1s ease",
                            }}
                        >
                            <LeetCode
                                style={{
                                    padding: "5px",
                                    transition: "all 1s ease",
                                }}
                                fill={isDarkMode ? "white" : "black"}
                            />
                        </IconButton>
                        <IconButton
                            href="https://codeforces.com/profile/Govardhan"
                            className={styles.avatarIconButton}
                            style={{
                                border: `1px solid ${
                                    isDarkMode ? "white" : "black"
                                }`,
                                transition: "all 1s ease",
                            }}
                        >
                            <CodeForces
                                style={{
                                    padding: "5px",
                                    transition: "all 1s ease",
                                }}
                                fill={isDarkMode ? "white" : "black"}
                            />
                        </IconButton>
                        <IconButton
                            href="https://www.codechef.com/users/govardhan_nn"
                            className={styles.avatarIconButton}
                            style={{
                                border: `1px solid ${
                                    isDarkMode ? "white" : "black"
                                }`,
                                transition: "all 1s ease",
                            }}
                        >
                            <CodeChef
                                style={{
                                    padding: "5px",
                                    transition: "all 1s ease",
                                }}
                                fill={isDarkMode ? "white" : "black"}
                            />
                        </IconButton>
                        <IconButton
                            href="mailto:ngovardhan566@gmail.com"
                            className={styles.avatarIconButton}
                            style={{
                                border: `1px solid ${
                                    isDarkMode ? "white" : "black"
                                }`,
                                transition: "all 1s ease",
                            }}
                        >
                            <i
                                className={`fa fa-envelope`}
                                style={{
                                    color: isDarkMode ? "white" : "black",
                                    transition: "all 1s ease",
                                }}
                            ></i>
                        </IconButton>
                    </div>
                    <a href={Resume} download="Govardhan_Resume.pdf">
                        <Button variant="contained" color="info">
                            Resume
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Home;
