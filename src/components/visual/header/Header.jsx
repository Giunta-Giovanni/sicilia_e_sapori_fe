// import Hooks
import { useState } from "react";

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

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <header className={`${styles.headerWrapper} ${isOpen ? styles.inverted : null}`}>

            {/* left */}
            {/* headerLogo */}
            <div className={styles.headerLogo}>
                <a href="#home">
                    <img src={!isOpen ? linearLogoBrown : linearLogoWhite} alt="#logo" />
                </a>
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
                    <a href="#home">HOME</a>
                    <a href="#menu">MENÙ</a>
                    <a href="#contact">CHI SIAMO</a>
                </section>

                {/* headerMenuSectionSecondary */}
                <section className={`${styles.headerMenuSection} ${styles.secondary}`}>
                    <a href="#italiano">ITALIANO <br />
                        <Flag code="it" className="flag-icon" />
                    </a>

                    <a href="#inglese">INGLESE <br />
                        <Flag code="gb" className="flag-icon" />
                    </a>
                </section>

                {/* headerMenuSection secondary */}
                <section className={`${styles.headerMenuSection} ${styles.secondary}`}>
                    <a href="#facebook">
                        <img className="social-logo" src={fbLogoWhite} alt="facebook" />
                    </a>
                    <a href="#instagram">
                        <img className="social-logo" src={igLogoWhite} alt="instagram" />
                    </a>
                </section>

            </nav>

        </header >
    );
}