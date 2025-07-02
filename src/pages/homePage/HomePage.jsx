// import Hooks
import { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// import Context
import GlobalContext from "../../context/GlobalContext";

// import Components
import HeroSection from '../../sections/HeroSection';

// import Styles
import styles from './HomePage.module.css';

//import assets
import { icons } from '../../assets/svg/general/icons';
import pizzas from '/pizzas.png';
import mappa from '/mappa.png';


export default function HomePage() {

    // context
    const { lang } = useContext(GlobalContext);
    // icons
    const { pizzaPeel, onPlace, delivery, pizzaBox } = icons;

    // animation
    const [animation, setAnimation] = useState(false);
    const navigate = useNavigate();


    // handleClick
    const handleclick = () => {
        setAnimation(true);
    }

    useEffect(() => {
        if (animation) {
            setTimeout(() => {
                navigate(`${lang === 'it' ? '/it/menu/' : '/en/menu'}`)
            }, 2100)
        }

    }, [animation])


    useEffect(() => {
        console.log(animation);

    }, [animation])

    return (
        <>
            {/* hero section */}
            <HeroSection styles={styles} />

            {/* presentation */}
            <section className={styles.presentation}>


                {/* boxLayout */}
                <div className={styles.boxLayout} style={{ margin: 0 }}>
                    {/* imgBox */}
                    <div className={styles.imgBox}>
                        <img src={pizzas} alt="Pizzas photo" />
                    </div>

                    {/* textBox */}
                    <div className={styles.textBox}>
                        <p>
                            {lang === 'it'
                                ?
                                "Sicilia e Sapori vi invita a scoprire l'anima culinaria dell'isola e del Mediterraneo. Un omaggio ai sapori autentici, con la creatività del nostro chef. Tra la brezza marina e l'eco storico della torre Cabrera, assaporate la vera Sicilia."
                                :
                                "Sicilia e Sapori invites you to discover the culinary soul of Sicily and the Mediterranean. We pay homage to authentic flavors, brought to life by the creativity of our chef. Amidst the sea breeze and the historical echo of the Cabrera Tower, savor the true taste of Sicily."
                            }

                        </p>
                    </div>
                </div>

                {/* boxLink */}
                <div className={styles.boxLink}>
                    <button className={styles.btnStyle} onClick={handleclick}>
                        {/* BtnStyle */}
                        {lang === 'it' ? 'ESPLORA IL NOSTRO MENU' : "EXPLORE OUR MENU"}
                    </button>
                    {/* peel -> leftPeel*/}
                    <img
                        className={`${styles.peel} ${styles.leftPeelStatic} ${animation ? styles.leftPeelDinamic : ''}`}
                        src={pizzaPeel}
                        alt="button decoration"
                    />
                    {/* peel -> rigthPeel*/}
                    <img
                        className={`${styles.peel} ${styles.rightPeelStatic} ${animation ? styles.rightPeelDinamic : ''}`}
                        src={pizzaPeel}
                        alt="button decoration" />
                </div>

                {/* imgBox */}
                <div className={styles.imgBox}>
                    <img src={pizzas} alt="" />
                </div>
            </section >

            {/* infoBox */}
            < section className={`${styles.boxLayout} ${styles.infoBox}`
            }>
                {/* where */}
                < div className={styles.where} >
                    <h3 className={styles.title}>{lang === 'it' ? 'Gusta la tua Pizza' : "Enjoy your Pizza"}</h3>
                    <div className={styles.types}>
                        {/* typeBox */}
                        <div className={styles.typeBox}>
                            <img src={onPlace} alt="on Place" />
                            <p>{lang === 'it' ? 'Locale' : "On Place"}</p>
                        </div>
                        {/* typeBox */}
                        <div className={styles.typeBox}>
                            <img src={pizzaBox} alt="on Place" />
                            <p>{lang === 'it' ? 'Asporto' : "Take & Way"}</p>
                        </div>
                        {/* typeBox */}
                        <div className={styles.typeBox}>
                            <img src={delivery} alt="on Place" />
                            <p>{lang === 'it' ? 'Domicilio' : "Delivery"}</p>
                        </div>
                    </div>
                </div >
                {/* when */}
                < div className={styles.when} >
                    <h3 className={styles.title}>{lang === 'it' ? 'Orario' : "Hours"}</h3>
                    {/* days */}
                    <p className={styles.days}>{lang === 'it' ? 'Mercoledì - Lunedì' : "Wednesday - Monday"}</p>
                    <p>18:00 - 24:00</p>
                    <p>{lang === 'it' ? 'Martedì Chiuso' : "Closed Tuesday"}</p>
                </div >
                {/* contact */}
                < div className={styles.contact} >
                    <h3 className={styles.title}>{lang === 'it' ? 'Contattaci' : "Contacts"}</h3>
                    <p>{lang === 'it' ? 'Per info e prenotazione chiamare' : "For information and reservations call"}</p>
                    <p>+39 3311754757</p>
                </div >
            </section >

            {/* maps */}
            < section className={styles.maps} >
                <h3 className={styles.title}>{lang === 'it' ? 'Dove siamo' : "Find us"}</h3>
                {/* mapBox */}
                <div className={styles.mapBox}>
                    <img src={mappa} alt="maps" />
                    {/* BtnStyle */}
                    <button className={styles.btnStyle}>
                        <a href="https://maps.app.goo.gl/RBfYmm6kZDBRWpce8" target="_blank" rel="noopener noreferrer" >RAGGIUNGICI</a>
                    </button>
                </div>
            </section >
        </>
    )
}