import React from "react";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import NavProvider from "./context/NavContext";
import Experience from "./components/Experience";

function App() {
    return (
        <>
            <NavProvider>
                <NavigationBar />
                <Home />
                <About />
                <Experience />
                <Projects />
            </NavProvider>
        </>
    );
}

export default App;
