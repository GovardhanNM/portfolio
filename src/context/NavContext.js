import React, { useState } from "react";

export const NavContext = React.createContext();

const NavProvider = ({ children }) => {
    const [activeLinkId, setActiveLinkId] = useState("");
    const [isDarkMode, setIsDarkMode] = useState();

    const providerValue = {
        activeLinkId,
        setActiveLinkId,
        isDarkMode,
        setIsDarkMode,
    };

    return (
        <NavContext.Provider value={providerValue}>
            {children}
        </NavContext.Provider>
    );
};

export default NavProvider;
