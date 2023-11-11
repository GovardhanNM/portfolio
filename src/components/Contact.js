import React from "react";
import useNav from "../hooks/useNav";

function Contact() {
    const contactRef = useNav("Contact");
    return (
        <section
            ref={contactRef}
            id="contactSection"
            className="secondary-section"
        >
            <h1>Contacts</h1>
            <p>Some Text</p>
        </section>
    );
}

export default Contact;
