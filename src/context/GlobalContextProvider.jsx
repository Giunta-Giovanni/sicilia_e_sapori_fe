// import Context
import GlobalContext from "./GlobalContext.jsx";

// import Hooks
import { useViewport } from "../hooks/useViewport.js";
import useLang from "../hooks/useLang.js";

// import Components
import SlowScrollTo from "../components/technical/SlowScrollTo.jsx";

// import Utils
import { handleClick } from "../utils/ui.js";


export default function GlobalContextProvider({ children }) {
    // save lang
    const lang = useLang();

    // save dinamic view port
    const { isMobile, isTablet } = useViewport();

    // RENDER
    return (
        <GlobalContext.Provider value={{
            SlowScrollTo,
            handleClick,
            isMobile,
            isTablet,
            lang
        }}>
            {children}
        </GlobalContext.Provider>

    )
}