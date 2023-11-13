import React from "react";
import useNav from "../hooks/useNav";
import homePageImage from "../images/homepage.jpeg";
import styles from "../styles/Home.module.css";
// import Button from "@mui/material/Button";
// import { Download } from "@mui/icons-material";

function Home() {
    const homeRef = useNav("Home");
    return (
        <section
            ref={homeRef}
            id="homeSection"
            style={{
                backgroundImage: `url(${homePageImage})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <h1 className={styles.textName}>
                Hey, This is Govardhan Narasimha Murthy
            </h1>
            <p className={styles.textDescription}>
                Software engineer passionate about building innovative and
                scalable solutions, with experience in Web and Desktop
                development. Eager to learn and contribute to the tech
                community.
            </p>
            {/* <Button variant="contained" endIcon={<Download />} color="info">
                Download My Resume
            </Button> */}
        </section>
    );
}

export default Home;
