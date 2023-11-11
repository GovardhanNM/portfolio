import React from "react";
import useNav from "../hooks/useNav";

function Projects() {
    const projectsRef = useNav("Projects");
    return (
        <section ref={projectsRef} id="projectsSection">
            <h1>Project</h1>
            <p>Some Text</p>
        </section>
    );
}

export default Projects;
