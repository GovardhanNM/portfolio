import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useContext } from "react";
import styles from "../styles/NavigationBar.module.css";
import { NavContext } from "../context/NavContext";
import DarkModeToggle from "react-dark-mode-toggle";
import Text from "./Text";

function NavigationBar() {
    const expand = "lg";
    const navLinks = ["Home", "About", "Experience", "Projects"];
    const { activeLinkId, isDarkMode, setIsDarkMode } = useContext(NavContext);

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
            <button
                onClick={onLinkClick}
                className={`${styles.navbutton} ${
                    activeLinkId === link ? styles.activeClass : ""
                }`}
                key={link}
            >
                <Text>{link}</Text>
            </button>
        );
    };
    return (
        <Navbar
            key={expand}
            expand={expand}
            className={`${styles.header}`}
            style={{
                backgroundColor: isDarkMode ? "#38434f" : "aliceblue",
                transition: "all 1s ease",
            }}
            variant={isDarkMode ? "dark" : "light"}
        >
            <Container fluid>
                <Navbar.Brand
                    onClick={handleClickName}
                    className={styles.navbarName}
                >
                    <Text
                        variant="h5"
                        fontFamily="Courier New"
                        fontWeight="bold"
                    >
                        Govardhan Narasimha Murthy
                    </Text>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                >
                    <Offcanvas.Body
                        style={{
                            backgroundColor: isDarkMode
                                ? "#38434f"
                                : "aliceblue",
                            transition: "all 1s ease",
                        }}
                    >
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <DarkModeToggle
                                onChange={setIsDarkMode}
                                checked={isDarkMode}
                                size={50}
                                className={styles.darkModeToggle}
                            />
                            {navLinks.map(renderNavLink)}
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
