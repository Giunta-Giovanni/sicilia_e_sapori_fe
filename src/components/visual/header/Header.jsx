// import Hooks
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation, NavLink } from "react-router-dom";
import useLang from "../../../hooks/useLang";

// import Styles
import styles from './Header.module.css';

// import Flag
import Flag from 'react-world-flags';

//import assets
import { icons } from '../../../assets/svg/general/icons';

// Assets
import linearLogoBrown from "../../../assets/svg/logo/logo-header-brown.svg"
import linearLogoWhite from "../../../assets/svg/logo/logo-header-white.svg"

export default function Header() {

    // Save
    const { facebookWhite, instagramWhite, phoneBrown } = icons;
    // Save Language
    const lang = useLang();
    // Save Location
    const location = useLocation();
    // Save Navigation
    const navigate = useNavigate();

    // save location
    const aboutUs = location.pathname == "/it/about-us" || location.pathname == "/en/about-us";
    const home = location.pathname == "/it/" || location.pathname == "/en/";

    // console.log(home);

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
        const wrapper = document.getElementById("pageWrapper");
        if (!wrapper) return;

        if (isOpen) {
            wrapper.classList.add("noScroll");
        } else {
            wrapper.classList.remove("noScroll");
        }
    }, [isOpen]);

    // find scroll more then 60px and add background
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            let isScrolled = window.scrollY > 60;
            setScrolled(isScrolled);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <header className={`
        ${styles.headerWrapper} 
        ${isOpen || aboutUs ? styles.inverted : null} 
        ${home || isOpen ? styles.noScroll : null} 
        ${home && scrolled ? styles.scroll : null}
         `}>
            {/* left */}
            {/* headerLogo */}
            <div className={styles.headerLogo}>
                <Link to={lang === 'en' ? '/en/' : '/it/'}>
                    <img src={isOpen || aboutUs || (home && !scrolled) ? linearLogoWhite : linearLogoBrown} alt="logo" />
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
                    <Link to={lang === 'en' ? '/en/' : '/it/'} onClick={toggleMenu}>HOME</Link>
                    <Link to={lang === 'en' ? '/en/menu' : '/it/menu'} onClick={toggleMenu}>MENÙ</Link>
                    <Link to={lang === 'en' ? '/en/about-us' : '/it/about-us'} onClick={toggleMenu}>{lang === 'it' ? "CHI SIAMO":"ABOUT US"}</Link>
                </section>

                {/* headerMenuSectionSecondary */}
                <section className={`${styles.headerMenuSection} ${styles.secondary}`}>
                    <button className={lang === 'it'? styles.active: ""}
                        onClick={() => {
                            switchLang('it');
                            toggleMenu();
                        }}>
                        ITALIANO <br />
                        <Flag code="it" className={styles.flagIcon} />
                    </button>

                    <button className={lang === 'en'? styles.active: ""}
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
                        <img className={styles.socialLogo} src={facebookWhite} alt="facebook" />
                    </a>
                    <a href="https://www.instagram.com/siciliaesapori" target="_blank" rel="noopener noreferrer">
                        <img className={styles.socialLogo} src={instagramWhite} alt="instagram" />
                    </a>
                    <a href='tel:+39 3311754757'>
                    <img className={styles.socialLogo} src={phoneBrown} alt="Phone Number" />
                </a>
                </section>
            </nav>
        </header >
    );
}