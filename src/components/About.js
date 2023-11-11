import React from "react";
import useNav from "../hooks/useNav";
import aboutPageImage from "../images/aboutpage.jpeg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import fullstackImage from "../images/fullstack.jpeg";
import uiuxImage from "../images/uiux.jpeg";
import desktopImage from "../images/desktopdevelopment.jpeg";
import styles from "../styles/About.module.css";
import Marquee from "react-fast-marquee";
import logos from "./utils/logoUtils";

function About() {
    const aboutRef = useNav("About");

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
                backgroundImage: `url(${aboutPageImage})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <h1 className={styles.header}>About Me</h1>
            <h2 className={styles.description}>
                Software Engineer with 2.5+ years of experience, passionate
                about problem solving, competitive programming, and learning new
                technologies to build real-world applications.
            </h2>
            <Grid container spacing={1} className={styles.grid}>
                {getGridCards()}
            </Grid>
            <h1 className={styles.techHeader}>Tech Stack</h1>
            <Marquee className={styles.marquee}>
                {logos.map((logo) => {
                    return (
                        <div key={logo.title}>
                            <img
                                src={logo.image}
                                className={styles.logo}
                                alt={logo.title}
                            />
                            <p className={styles.techTitle}>{logo.title}</p>
                        </div>
                    );
                })}
            </Marquee>
        </section>
    );
}

export default About;
