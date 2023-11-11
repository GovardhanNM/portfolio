import { useContext, useEffect, useRef } from "react";
import useOnScreen from "./useOnScreen";
import { NavContext } from "../context/NavContext";

function useNav(navLinkId) {
    const ref = useRef(null);
    const { setActiveLinkId } = useContext(NavContext);
    const isOnScreen = useOnScreen(ref);

    useEffect(() => {
        if (isOnScreen) {
            setActiveLinkId(navLinkId);
        }
    }, [isOnScreen, navLinkId, setActiveLinkId]);
    return ref;
}

export default useNav;
