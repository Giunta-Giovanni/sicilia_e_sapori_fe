// import Hooks
import { useContext } from 'react';

// import Context
import GlobalContext from '../context/GlobalContext';

//Component
import Typewriter from "../components/technical/Typewriter";

//import content
import jumboVideo from "/video/jumbo2.mp4";
import jumboPoster from "/video/poster2.png";

//import assets
import { icons } from '../assets/svg/general/icons';


export default function HeroSection({ styles }) {

    const { lang } = useContext(GlobalContext);
    const { arrowDownWhite } = icons;

    // RENDER
    return (
        <>
            {/* hero */}
            <section className={styles.hero}>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    poster={jumboPoster}
                    src={jumboVideo}
                    className={styles.jumboVideo}
                >
                </video>
                <div className={styles.textBox}>
                    <Typewriter text={lang === 'it' ? "  Benvenuti da Sicilia e Sapori!" : "  Welcome to Sicilia e Sapori"} speed={100} pause={10000} />
                </div>
                <div className={styles.arrowBox}>
                    <img src={arrowDownWhite} alt="Arrow Down" />
                </div>
            </section>
        </>
    )
}