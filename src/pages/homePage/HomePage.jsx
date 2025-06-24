//import hooks
import { useContext } from "react";

// import Context
import GlobalContext from "../../context/GlobalContext";

// import Styles
import styles from './HomePage.module.css';

//import assets

//import content
import jumboVideo from "../../../public/video/jumbo.mp4"
import jumboPoster from "../../../public/video/poster.png"




export default function HomePage() {

    // const { lang } = useContext(GlobalContext);

    return (
        <>
            {/* hero */}
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
        </>
    )
}