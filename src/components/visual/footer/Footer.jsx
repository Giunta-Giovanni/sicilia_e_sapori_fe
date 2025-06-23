// import Hooks
import { useLocation } from "react-router-dom";
import useLang from "../../../hooks/useLang";

// import Styles
import styles from "./Footer.module.css";

// import Assets
import logoBrown from "../../../assets/svg/logo/logo-primary-brown.svg";
import logoWhite from "../../../assets/svg/logo/logo-primary-white.svg";
import { icons } from "../../../assets/svg/general/icons";



export default function Footer() {

    // save Location
    const location = useLocation();

    // save aboutUs Pages
    const aboutUs = location.pathname == "/it/about-us" || location.pathname == "/en/about-us";

    // save Lang
    const lang = useLang();

    // save Icons
    const { tripAdvisorBrown, tripAdvisorWhite, mapsBrown, mapsWhite } = icons;
    // RENDER
    return (<>
        <footer className={
            aboutUs
                ? styles.inverted
                : ''
        }>
            {/* logo */}
            <img className={styles.logo} src={aboutUs ? logoBrown : logoWhite} alt='sicilia e sapori' />

            {/* review */}
            <h6>{lang === 'it' ? 'Se la pizza ti è piaciuta' : 'If you enjoyed the pizza'}</h6>
            <h4>{lang === 'it' ? 'Lascia una recensione' : 'Leave us a review'}</h4>
            <div className={styles.channels}>
                {/* trip advisor */}
                <a href="https://www.tripadvisor.it/Restaurant_Review-g187886-d10371652-Reviews-Sicilia_E_Sapori-Sicily.html" target="_blank" rel="noopener noreferrer">
                    <img src={aboutUs ? tripAdvisorBrown : tripAdvisorWhite} alt="trip advisor" />
                </a>
                {/* google maps */}
                <a href="https://www.google.com/search?client=firefox-b-d&sa=X&sca_esv=1b465dddb89ef670&tbm=lcl&sxsrf=AE3TifNx2OXBl3kQDZck97kxgoOWkksgOg:1750689983347&q=Sicilia+e+Sapori+Recensioni&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxK2NDUxMzIxszAwtjQ1NTExsTAx3MDI-IpROjgzOTMnM1EhVSE4sSC_KFMhKDU5Na84Mz8vcxErPlkADg86Q1YAAAA&rldimm=9546246803955444841&hl=it-IT&ved=2ahUKEwj10Ma05IeOAxXDhP0HHaezPDEQ9fQKegQIQxAF&biw=1112&bih=686&dpr=2#lkt=LocalPoiReviews" target="_blank" rel="noopener noreferrer">
                    <img src={aboutUs ? mapsBrown : mapsWhite} alt="Google review" />
                </a>
            </div>

            {/* social*/}
            <h6>{lang === 'it' ? 'Seguici sui Social' : 'Follow us on socials'}</h6>
            <div className={`${styles.socials} ${styles.channels}`}>
                <a href="https://www.facebook.com/siciliaesaporipozzallo" target="_blank" rel="noopener noreferrer">FACEBOOK</a>
                <a href="https://www.instagram.com/siciliaesapori" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
            </div>

            {/* p.iva */}
            <p className={styles.pIva}>©2022 Baariha Srl. P.IVA 06405370823</p>

            {/* made by */}
            <p className={styles.madeBy}>MADE BY - JUNSO</p>

        </footer >
    </>)
}