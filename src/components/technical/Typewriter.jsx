import { useTypewriter } from "../../hooks/useTypewriter";

export default function Typewriter({ text, speed = 50, pause = 1500 }) {
    const displayText = useTypewriter(text, speed, pause);

    // definisci gli stili inline
    const cursorStyle = {
        display: "inline-block",
        width: "1ch",
        animation: "blink 1s step-end infinite"
    };

    const paragraphStyle = {
        overflow: "hidden",
        letterSpacing: "0.15em",
    };

    // definisci l'animazione con un blocco <style>
    const keyframes = `
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }
    `;

    // RENDER
    return (
        <>
            <style>{keyframes}</style>
            <p style={paragraphStyle} aria-label={text} role="text">
                {displayText}
                <span style={cursorStyle}>|</span>
            </p>
        </>
    );
};
