// import Hooks
import { useContext } from 'react';

//Component
import Typewriter from '../../components/technical/TypeWriter';


// import Context
import GlobalContext from "../../context/GlobalContext";

// import Styles
import styles from './HomePage.module.css';

//import assets
import { icons } from '../../assets/svg/general/icons';

//import content
import jumboVideo from "../../../public/video/jumbo.mp4"
import jumboPoster from "../../../public/video/poster.png"




export default function HomePage() {


    const { lang } = useContext(GlobalContext);
    const { arrowDownWhite } = icons;

    return (
        <>
            {/* hero */}
            <section className={styles.hero}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    poster={jumboPoster} //in caso di attesa del caricamento del video aggiungi un poster
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