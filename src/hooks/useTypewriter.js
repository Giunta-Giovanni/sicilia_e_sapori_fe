import { useState, useEffect } from "react";

export const useTypewriter = (text, speed = 100, pause = 1500) => {
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState("forward"); // "forward" | "backward"
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const chars = Array.from(text);
        let timeout;

        if (isPaused) {
            timeout = setTimeout(() => {
                setIsPaused(false);
                setDirection("backward");
            }, pause);
            return () => clearTimeout(timeout);
        }

        if (direction === "forward") {
            if (index < chars.length) {
                timeout = setTimeout(() => {
                    setDisplayText(prev => prev + chars[index]);
                    setIndex(prev => prev + 1);
                }, speed);
            } else {
                setIsPaused(true);
            }
        }

        if (direction === "backward") {
            if (index > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(prev => prev.slice(0, -1));
                    setIndex(prev => prev - 1);
                }, speed);
            } else {
                setDirection("forward");
            }
        }

        return () => clearTimeout(timeout);
    }, [index, direction, isPaused, text, speed, pause]);

    return displayText;
};