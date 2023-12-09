import React, { useContext } from "react";
import useNav from "../hooks/useNav";
import { NavContext } from "../context/NavContext";
import Text from "./Text";
import styles from "../styles/Projects.module.css";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";

const projectData = [
    {
        title: "Portfolio Website",
        description:
            "Developed a responsive portfolio website using React, leveraging Material UI for styling and React Router for navigation. Implemented a dark mode toggle feature using React Context API and deployed the website on Netlify.",
        techs: ["React", "JavaScript", "HTML", "CSS"],
        image: "",
        sourceCode: "https://github.com/GovardhanNM/portfolio",
    },
    {
        title: "Prototype for Museum Artefacts",
        description:
            "Developed a comprehensive backend website and Android prototype for the Central Silk Board Museum to facilitate artifact data management and user engagement. Implemented an admin portal for QR code generation and an Android app for QR code scanning and data retrieval.",
        techs: ["Android", "Java", "Firebase", "JavaScript", "HTML", "CSS"],
        image: "",
        sourceCode: "https://github.com/GovardhanNM/QR-Code",
    },
    {
        title: "Blog Website",
        description:
            "Developed a full-stack blogging website using Python and Django, encompassing user authentication, profile management, follow requests, blog creation, search functionality, and commenting capabilities. Leveraged Django's admin interface for secure authentication control.",
        techs: ["Python", "PostgreSQL", "JavaScript", "HTML", "CSS"],
        image: "",
        sourceCode: "https://github.com/GovardhanNM/blog-website",
    },
    {
        title: "ECommerce Application",
        description:
            "Crafted a fully-functional e-commerce application for Android and iOS platforms, leveraging Flutter and Firebase. Integrated user authentication, product search, cart management, and secure payment processing mechanisms. Designed and developed an intuitive admin dashboard for managing product inventory, pricing, and availability.",
        techs: ["Flutter", "Dart", "Firebase", "JavaScript", "HTML", "CSS"],
        image: "",
        sourceCode: "https://github.com/GovardhanNM/m_commerce",
    },
    {
        title: "Online Course Application",
        description:
            "Built a full stack online course application using PHP and MySQL, encompassing user authentication, course creation, course enrollment, and course management. Implemented a secure admin portal for managing user accounts, course content, and course enrollment.",
        techs: ["JavaScript", "PHP", "MySQL", "HTML", "CSS"],
        image: "",
        sourceCode: "https://github.com/GovardhanNM/online_course",
    },
];

function Projects() {
    const projectsRef = useNav("Projects");
    const { isDarkMode } = useContext(NavContext);
    return (
        <section
            ref={projectsRef}
            id="projectsSection"
            style={{
                backgroundColor: isDarkMode ? "#2e3440" : "#FFFBF5",
                transition: "all 1s ease",
                gap: "2rem",
            }}
            className={styles.projectsContainer}
        >
            <Text variant="h3" fontFamily="Comic Sans MS">
                My Projects
            </Text>
            <div className={styles.container}>
                {projectData.map((project) => {
                    return (
                        <Paper
                            key={project.title}
                            style={{
                                padding: "1rem",
                                backgroundColor: `${
                                    isDarkMode ? "#132043" : "#F1EAFF"
                                }`,
                                transition: "all 1s ease",
                                borderRadius: "10px",
                                opacity: "0.85",
                            }}
                        >
                            <div style={{ display: "flex" }}>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        gap: "0.5rem",
                                    }}
                                >
                                    <Text
                                        fontFamily="Comic Sans MS"
                                        variant="h5"
                                    >
                                        {project.title}
                                    </Text>
                                    <Text
                                        fontFamily="Comic Sans MS"
                                        variant="body"
                                        width="100%"
                                        padding="0.5rem 0"
                                    >
                                        {project.description}
                                    </Text>
                                    <Text fontFamily="Comic Sans MS">
                                        Source Code : &nbsp;
                                        <a
                                            href={project.sourceCode}
                                            style={{
                                                color: `${
                                                    isDarkMode
                                                        ? "#2196f3"
                                                        : "#03a9f4"
                                                }`,
                                                wordBreak: "break-all",
                                            }}
                                        >
                                            {project.sourceCode}
                                        </a>
                                    </Text>
                                    <div
                                        style={{
                                            display: "flex",
                                            gap: "1rem",
                                            flexWrap: "wrap",
                                        }}
                                    >
                                        {project.techs.map((tech) => {
                                            return (
                                                <Button
                                                    color={`${
                                                        isDarkMode
                                                            ? "primary"
                                                            : "error"
                                                    }`}
                                                    variant={`${
                                                        isDarkMode
                                                            ? "contained"
                                                            : "outlined"
                                                    }`}
                                                    key={tech}
                                                >
                                                    {tech}
                                                </Button>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    );
                })}
            </div>
        </section>
    );
}

export default Projects;
