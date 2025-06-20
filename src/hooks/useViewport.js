import { useState, useEffect } from "react";

export function useViewport() {

    // Dinamic viewport State
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    // save dinamic viewport
    const setActualViewPort = (setViewPort, min, max) => {
        const ActualViewPort = window.innerWidth >= min && window.innerWidth <= max;
        setViewPort(ActualViewPort);
    }
    // dinamic save dinamic vieport
    useEffect(() => {
        const handleResize = () => {
            // check window dimension
            // console.log("check window dimension!", window.innerWidth);
            setActualViewPort(setIsMobile, 0, 567);
            setActualViewPort(setIsTablet, 568, 768);
        };

        // inizialize Dinamic view port
        handleResize();

        // listen windows change dimension and update every time dinamic viewport
        window.addEventListener('resize', handleResize);

        // clean state when view port change
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // RENDER
    return { isMobile, isTablet };
}