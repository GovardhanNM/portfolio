import { useContext, useState } from "react";
import styles from "../styles/NavigationBar.module.css";
import { NavContext } from "../context/NavContext";

const NavigationBar = () => {
    const navLinks = ["Home", "About", "Experience", "Projects", "Contact"];
    const { activeLinkId } = useContext(NavContext);

    const [color, setColor] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 200) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeBackground);

    const handleClickName = () => {
        document.getElementById("homeSection").scrollIntoView({
            behavior: "smooth",
        });
    };

    const renderNavLink = (link) => {
        const scrollToId = `${link.toLowerCase()}Section`;
        const onLinkClick = () => {
            document.getElementById(scrollToId).scrollIntoView({
                behavior: "smooth",
            });
        };
        return (
            <ul key={link}>
                <li>
                    <button
                        onClick={onLinkClick}
                        className={
                            activeLinkId === link ? styles.activeClass : ""
                        }
                    >
                        {link}
                    </button>
                </li>
            </ul>
        );
    };

    return (
        <header className={`${styles.header} ${color ? styles.headerBg : ""}`}>
            <div className={styles.container}>
                <div className={styles.navContainer}>
                    <h1 onClick={handleClickName}>
                        Govardhan Narasimha Murthy
                    </h1>
                    <nav>{navLinks.map(renderNavLink)}</nav>
                </div>
            </div>
        </header>
    );
};

export default NavigationBar;
