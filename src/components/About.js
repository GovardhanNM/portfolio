import React, { useContext } from "react";
import useNav from "../hooks/useNav";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import fullstackImage from "../images/fullstack.jpeg";
import uiuxImage from "../images/uiux.jpeg";
import desktopImage from "../images/desktopdevelopment.jpeg";
import cloudComputingImage from "../images/cloudComputingImage.jpeg";
import styles from "../styles/About.module.css";
import logos from "./utils/logoUtils";
import { NavContext } from "../context/NavContext";
import Text from "./Text";

function About() {
    const aboutRef = useNav("About");
    const { isDarkMode } = useContext(NavContext);

    const getGridCards = () => {
        return [
            {
                image: fullstackImage,
                title: "Full Stack Development",
                description:
                    "Self Learned Full-stack developer with expereince in the MERN stack. Able to build and deploy scalable and user-friendly web applications.",
            },
            {
                image: desktopImage,
                title: "Desktop Development",
                description:
                    "Experienced in building desktop applications using Qt-QML, a cross-platform C++ framework. Contributed to the open-source Cisco Adaptive Card Framework, a Qt-QML plugin.",
            },
            {
                image: cloudComputingImage,
                title: "Cloud Services",
                description:
                    "Experienced in Amazon Web Services and Google Firebase. Able to build and deploy scalable and user-friendly web, mobile and desktop applications using cloud services.",
            },
            {
                image: uiuxImage,
                title: "UI/UX Design",
                description:
                    "I build user-friendly applications that are accessible to all people, including the visually impaired, using screen readers. Leverage bots to streamline data entry with feedback mechanisms.",
            },
        ].map(({ image, title, description }) => {
            return (
                <Grid
                    item
                    xs={4}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    key={title}
                    style={{ opacity: 0.9 }}
                >
                    <Card sx={{ maxWidth: 345, maxHeight: 450 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="170"
                                image={image}
                                alt={title}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    className={styles.cardTitle}
                                    fontFamily="Comic Sans MS"
                                >
                                    {title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    className={styles.cardBody}
                                >
                                    {description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            );
        });
    };

    return (
        <section
            ref={aboutRef}
            id="aboutSection"
            style={{
                backgroundColor: isDarkMode ? "#2e3440" : "#FFFBF5",
                transition: "all 1s ease",
            }}
        >
            <Text
                variant="h3"
                className={styles.header}
                fontFamily="Comic Sans MS"
            >
                About Me
            </Text>
            <Text
                variant="h6"
                className={styles.description}
                fontFamily="Comic Sans MS"
            >
                Software Engineer with 2.5+ years of experience, passionate
                about problem solving, competitive programming, and learning new
                technologies to solve real-world applications. Some of my skills
                are
            </Text>
            <div spacing={1} className={styles.grid}>
                {getGridCards()}
            </div>
            <Text
                variant="h3"
                className={styles.techHeader}
                fontFamily="Comic Sans MS"
            >
                Technologies
            </Text>
            <div className={styles.marqueeParent}>
                {logos.map((logo) => {
                    return (
                        <div key={logo.title}>
                            <img
                                src={logo.image}
                                className={styles.logo}
                                alt={logo.title}
                            />
                            <Text
                                className={styles.techTitle}
                                fontFamily="Comic Sans MS"
                            >
                                {logo.title}
                            </Text>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default About;
