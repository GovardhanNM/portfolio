import React, { useContext } from "react";
import useNav from "../hooks/useNav";
import styles from "../styles/Experience.module.css";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Work, School, Star } from "@mui/icons-material";
import Text from "./Text";
import { NavContext } from "../context/NavContext";

const getDateTag = (date) => {
    return (
        <Text
            style={{
                fontWeight: "bold",
                marginTop: "auto",
                marginBottom: "auto",
            }}
        >
            {date}
        </Text>
    );
};

const experienceDetails = [
    {
        date: getDateTag("Aug 2023 - Present"),
        type: "education",
        title: "University of Colorado Boulder",
        location: "Boulder, CO",
        descripition: (
            <>
                <p>
                    Masters of Science in Computer Science <br /> GPA: 4.0/4.0{" "}
                    <br /> Expected Graduation: May 2025
                </p>
                <p>Relevant Coursework</p>
                <ol>
                    <li>Design and Analysis of algorithms</li>
                    <li>Data Mining</li>
                </ol>
            </>
        ),
    },
    {
        date: getDateTag("April 2023 - August 2023"),
        type: "work",
        title: "Software Engineer 2, Cisco",
        location: "Bengaluru, India",
        descripition: (
            <ol>
                <li>
                    Led a performance enhancement effort for the Adaptive Cards
                    Framework, improving rendering performance by 50% and
                    reducing memory usage by 20%.
                </li>
                <li>
                    Migrated Adaptive Card framework to Qt6 and CMake,
                    increasing maintainability and ease of integration with
                    CMake-based third-party C++ applications
                </li>
            </ol>
        ),
    },
    {
        date: getDateTag("August 2021 - April 2023"),
        type: "work",
        title: "Software Engineer 1, Cisco",
        location: "Bengaluru, India",
        descripition: (
            <ol>
                <li>
                    Built a newWebex feature that empowers organization admins
                    to manage third-party app usage on a granular level,
                    increasing customer freedom and flexibility, beta tested by
                    Apple.
                </li>
                <li>
                    Implemented client-side code for App Picker in Cisco Webex
                    Meetings to enable collaboration, working with senior
                    software engineers to consume Microsoft WebView APIs
                    triggering JSSDK callbacks.
                </li>
            </ol>
        ),
    },
    {
        date: getDateTag("February 2021 - July 2023"),
        type: "work",
        title: "Software Engineer Intern, Cisco",
        location: "Bengaluru, India",
        descripition: (
            <ol>
                <li>
                    Engineered native Qt-QML renderer for Microsoft Adaptive
                    Cards, enabling apps to request data instead of webpages,
                    improving user experience and security.
                </li>
                <li>
                    Built a user interface for the Custom Apps feature in Webex,
                    enabling organization administrators to add custom apps for
                    their users.
                </li>
            </ol>
        ),
    },
    {
        date: getDateTag("August 2017 - July 2021"),
        type: "education",
        title: "R V College of Engineering",
        location: "Bengaluru, India",
        descripition: (
            <>
                <p>
                    Bachelors of Engineering in Information Science <br /> GPA:
                    3.48/4.0{" "}
                </p>
                <p>Relevant Coursework</p>
                <ol>
                    <li>OOPS</li>
                    <li>Data Structures</li>
                    <li>Algorithms</li>
                    <li>Operating Systems</li>
                    <li>Computer Networks</li>
                    <li>Database Management Systems</li>
                    <li>Software Engineering</li>
                    <li>Computer Architecture</li>
                    <li>Compiler Design</li>
                </ol>
            </>
        ),
    },
];

function Experience() {
    const experienceRef = useNav("Experience");
    const { isDarkMode } = useContext(NavContext);
    const getTimelineElements = (detail, index) => {
        return (
            <VerticalTimelineElement
                className={`vertical-timeline-element--${detail.type}`}
                date={detail.date}
                dateClassName={styles.date}
                iconStyle={{
                    background: `${
                        detail.type === "work"
                            ? "rgb(33, 150, 243)"
                            : "rgb(233, 30, 99)"
                    }`,
                    color: "#fff",
                }}
                contentStyle={
                    index === 0
                        ? {
                              background: "rgb(33, 150, 243)",
                              color: "#fff",
                              opacity: 0.85,
                          }
                        : { opacity: 0.85 }
                }
                contentArrowStyle={
                    index === 0
                        ? {
                              borderRight: "7px solid  rgb(33, 150, 243)",
                          }
                        : {}
                }
                icon={detail.type === "work" ? <Work /> : <School />}
                key={index}
            >
                <h3 className="vertical-timeline-element-title timelineTitle">
                    {detail.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    {detail.location}
                </h4>
                {detail.descripition}
            </VerticalTimelineElement>
        );
    };

    return (
        <section
            ref={experienceRef}
            id="experienceSection"
            style={{
                backgroundColor: isDarkMode ? "#332D2D" : "#f1ddcf",
                transition: "all 1s ease",
                gap: "2rem",
            }}
            className={styles.experienceContainer}
        >
            <Text variant="h3" fontFamily="Comic Sans MS">
                My Education and Expereince
            </Text>
            <div className={styles.container}>
                <VerticalTimeline>
                    {experienceDetails.map(getTimelineElements)}
                    <VerticalTimelineElement
                        iconStyle={{
                            background: "rgb(16, 204, 82)",
                            color: "#fff",
                        }}
                        icon={<Star />}
                    />
                </VerticalTimeline>
            </div>
        </section>
    );
}

export default Experience;
