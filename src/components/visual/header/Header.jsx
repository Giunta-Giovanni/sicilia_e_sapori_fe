// import Hooks
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useLang from "../../../hooks/useLang";

// import Styles
import styles from './Header.module.css';

// import Flag
import Flag from 'react-world-flags';

// Assets
import fbLogoWhite from "../../../assets/svg/general/facebook-white.svg";
import igLogoWhite from "../../../assets/svg/general/instagram-white.svg";
import linearLogoBrown from "../../../assets/svg/logo/logo-header-brown.svg"
import linearLogoWhite from "../../../assets/svg/logo/logo-header-white.svg"

export default function Header() {

    // Save Language
    const lang = useLang();
    // Save Location
    const location = useLocation();
    // Save Navigation
    const navigate = useNavigate();

    // switch lang function
    const switchLang = (targetLang) => {
        let newPath = location.pathname.replace(/^\/(it|en)/, `/${targetLang}`)

        if (location.pathname === '/') {
            newPath = targetLang === 'en' ? '/en/' : '/it/';
        }

        navigate(newPath);
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    // add no scroll to body when nav is open
    useEffect(() => {
        if (isOpen) {
            document.documentElement?.classList.add('noScroll');
            document.body?.classList.add('noScroll');
        } else {
            document.documentElement?.classList.remove('noScroll');
            document.body?.classList.remove('noScroll');
        }

    }, [isOpen])

    return (
        <header className={`${styles.headerWrapper} ${isOpen ? styles.inverted : null}`}>

            {/* left */}
            {/* headerLogo */}
            <div className={styles.headerLogo}>
                <Link to={lang === 'en' ? '/en/' : '/'}>
                    <img src={!isOpen ? linearLogoBrown : linearLogoWhite} alt="logo" />
                </Link>
            </div>

            {/* right */}
            {/* headerHamburgher */}
            <div className={`${styles.hamburger} ${isOpen ? styles.open : null}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* headerMenuHidden*/}
            <nav className={`${styles.headerMenu} ${isOpen ? styles.open : ""}`}>

                {/* headerMenuSection */}
                <section className={`${styles.headerMenuSection} ${styles.hoverAnimation}`}>
                    <Link to={lang === 'en' ? '/en/' : '/'} onClick={toggleMenu}>HOME</Link>
                    <Link to={lang === 'en' ? '/en/menu' : '/it/menu'} onClick={toggleMenu}>MENÙ</Link>
                    <Link to={lang === 'en' ? '/en/about-us' : '/it/chi-siamo'} onClick={toggleMenu}>CHI SIAMO</Link>
                </section>

                {/* headerMenuSectionSecondary */}
                <section className={`${styles.headerMenuSection} ${styles.secondary}`}>
                    <button
                        onClick={() => {
                            switchLang('it');
                            toggleMenu();
                        }}>
                        ITALIANO <br />
                        <Flag code="it" className={styles.flagIcon} />
                    </button>

                    <button
                        onClick={() => {
                            switchLang('en');
                            toggleMenu();
                        }}>
                        INGLESE <br />
                        <Flag code="gb" className={styles.flagIcon} />
                    </button>
                </section>

                {/* headerMenuSection secondary */}
                <section className={`${styles.headerMenuSection} ${styles.secondary}`}>
                    <a href="https://www.facebook.com/siciliaesaporipozzallo" target="_blank" rel="noopener noreferrer">
                        <img className={styles.socialLogo} src={fbLogoWhite} alt=" facebook" />
                    </a>
                    <a href="https://www.instagram.com/siciliaesapori" target="_blank" rel="noopener noreferrer">
                        <img className={styles.socialLogo} src={igLogoWhite} alt="instagram" />
                    </a>
                </section>
            </nav>
        </header >
    );
}