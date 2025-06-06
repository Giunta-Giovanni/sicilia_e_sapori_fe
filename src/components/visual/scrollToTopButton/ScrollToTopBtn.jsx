import { useEffect, useState } from 'react';
import style from './ScrollToTopBtn.module.css'
export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    // mostra il bottone dopo che si scrolla un po'
    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 200);
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

    if (!visible) return null;

    return (
        <button
            onClick={scrollToTop}
            className={style.button}
            aria-label="Torna su"
        >
            ↑
        </button>
    );
}