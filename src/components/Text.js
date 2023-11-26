import React from "react";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { NavContext } from "../context/NavContext";
import styles from "../styles/Text.module.css";

const Text = (props) => {
    const { isDarkMode } = useContext(NavContext);

    return (
        <Typography
            {...props}
            color={isDarkMode ? "white" : "black"}
            className={`${props.className} ${styles.textTransition}`}
        >
            {props.children}
        </Typography>
    );
};

export default Text;
