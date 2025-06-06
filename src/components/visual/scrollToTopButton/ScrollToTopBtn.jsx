// import Hooks
import { useEffect, useState } from 'react';

// import styles
import styles from './ScrollToTopBtn.module.css';

export default function ScrollToTopButton() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // RENDER
    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to Top"
            className={`${styles.scrollButton} ${isVisible ? styles.scrollButtonVisible : ''}`}
        >
            &#8593;
        </button>
    );
}