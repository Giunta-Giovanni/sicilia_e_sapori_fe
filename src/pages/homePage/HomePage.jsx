// import Hooks
import { useContext } from 'react';
import { Link } from 'react-router-dom';

// import Context
import GlobalContext from "../../context/GlobalContext";

// import Components
import HeroSection from '../../sections/HeroSection';

// import Styles
import styles from './HomePage.module.css';

//import assets
import { icons } from '../../assets/svg/general/icons';
import pizzas from '/pizzas.png';


export default function HomePage() {
    const { lang } = useContext(GlobalContext);
    const { pizzaPeel } = icons;
    return (
        <>
            {/* hero section */}
            <HeroSection styles={styles} />

            {/* presentation section */}
            <section className={styles.presentation}>


                {/* box contenente immagine a sinistra e testo a destra */}
                <div className={styles.welcome}>
                    <div className={styles.imgBox}>
                        <img src={pizzas} alt="" />
                    </div>
                    <div className={styles.textBox}>
                        <p>
                            Sicilia e Sapori vi invita a scoprire l'anima culinaria dell'isola e del Mediterraneo. Un omaggio ai sapori autentici, con la creatività del nostro chef. Tra la brezza marina e l'eco storico della torre Cabrera, assaporate la vera Sicilia.
                        </p>
                    </div>
                </div>
                <div className={styles.boxLink}>

                    <button>
                        <img className={styles.peel} src={pizzaPeel} alt="" />
                        <img className={styles.peel} src={pizzaPeel} alt="" />
                        <Link to={lang === 'en' ? '/en/menu' : '/it/menu'}>ESPLORA IL NOSTRO MENU</Link>
                    </button>
                </div>
                {/* da mostrare solo a schermo tablet mobile */}
                <div className={styles.imgBox}>3</div>
            </section>
        </>
    )
}