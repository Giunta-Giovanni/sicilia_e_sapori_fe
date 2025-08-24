// import Context
import GlobalContext from "./GlobalContext.jsx";

// import Axios
import axios from "axios";

// import Hooks
import { useState, useEffect } from "react";
import { useViewport } from "../hooks/useViewport.js";
import useLang from "../hooks/useLang.js";
import useDarkMode from "../hooks/useDarkmode.js";


// import Components
import SlowScrollTo from "../components/technical/SlowScrollTo.jsx";

// import Utils
import { handleClick } from "../utils/ui.js";


export default function GlobalContextProvider({ children }) {
    // save lang
    const lang = useLang();

    const isDarkMode = useDarkMode();

    // save dinamic view port
    const { isMobile, isTablet } = useViewport();

    // products state 
    const [products, setProducts] = useState([]);

    // loader state
    const [isLoading, setIsLoading] = useState(true);
    const [isReady, setIsReady] = useState(false);

    // fetch products data
    const fetchProducts = () => {
        // start Loader
        setIsLoading(true);

        axios.get(`${import.meta.env.VITE_API_URL}/products`)
            .then(res => {
                setProducts(res.data.data);
            })
            .catch(err => console.log(err))
            .finally(() => {
                setTimeout(() => { setIsLoading(false) }, 500);
                setIsReady(true);
            });
    };

    // upload data after Pageload
    useEffect(() => {
        fetchProducts();
        setIsReady(false);
    }, []);

    // check if page or data are already loaded
    useEffect(() => {
        if (isLoading) {
            console.log('sta caricando la pagina');
        } else {
            console.log('la pagina ha completato il caricamento')
        }
    }, [isLoading]);

    


    // RENDER
    return (
        <GlobalContext.Provider value={{
            handleClick,
            SlowScrollTo,
            isMobile,
            isTablet,
            isDarkMode,
            lang,
            isLoading,
            setIsLoading,

            isReady,
            setIsReady,

            products,
            setProducts

        }}>
            {children}
        </GlobalContext.Provider>

    )
}