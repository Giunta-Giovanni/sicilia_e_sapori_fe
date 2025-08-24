// import Hooks
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// import Context
import GlobalContext from "../../context/GlobalContext";

// import Components
import HeroSection from '../../sections/HeroSection';

// import Styles
import styles from './HomePage.module.css';

//import assets
import { icons } from '../../assets/svg/general/icons';
import pizzas from '/pizza.jpg';
import mappa from '/mappa.png';


export default function HomePage() {

    // context
    const { lang, isDarkMode } = useContext(GlobalContext);
    // icons
    const { pizzaPeel, onPlaceBrown,onPlaceWhite, deliveryBrown,deliveryWhite, pizzaBoxBrown, pizzaBoxWhite } = icons;

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
                                "I nostri impasti a lunga lievitazione, preparati con lievito madre e disponibili anche senza glutine, danno vita a pizze, scrocchiarelle, scrocchiapanini e dolci che raccontano la Sicilia in ogni morso. E se vuoi provare qualcosa di unico, lasciati conquistare dalla vera scrocchiarella: croccante, leggera e irresistibile."
                                :
                                "Technique and passion come together at Sicilia e Sapori. Our long-rising doughs, made with sourdough starter and also available gluten-free, bring to life pizzas, scrocchiarelle, scrocchiapanini, and desserts that tell the story of Sicily in every bite. And if you want to try something truly unique, let yourself be won over by the authentic scrocchiarella: crispy, light, and irresistible."
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
                            <img src={isDarkMode?onPlaceWhite:onPlaceBrown} alt="on Place" />
                            <p>{lang === 'it' ? 'Locale' : "Dine-in"}</p>
                        </div>
                        {/* typeBox */}
                        <div className={styles.typeBox}>
                            <img src={isDarkMode?pizzaBoxWhite:pizzaBoxBrown} alt="on Place" />
                            <p>{lang === 'it' ? 'Asporto' : "Take-Away"}</p>
                        </div>
                        {/* typeBox */}
                        <div className={styles.typeBox}>
                            <img src={isDarkMode?deliveryWhite:deliveryBrown} alt="on Place" />
                            <p>{lang === 'it' ? 'Domicilio' : "Delivery"}</p>
                        </div>
                    </div>
                </div >
                {/* when */}
                < div className={styles.when} >
                    <h3 className={styles.title}>{lang === 'it' ? 'Orario' : "Hours"}</h3>
                    {/* days */}
                    <p className={styles.days}>{lang === 'it' ? 'Lunedì - Domenica' : "Monday - Sunday"}</p>
                    <p>18:00 - 24:00</p>
                    <p>{lang === 'it' ? 'Martedì Chiuso' : "Closed on Tuesday"}</p>
                </div >
                {/* contact */}
                < div className={styles.contact} >
                    <h3 className={styles.title}>{lang === 'it' ? 'Contattaci' : "Contacts"}</h3>
                    <p>{lang === 'it' ? 'Per info e prenotazioni chiama' : "For informations and reservations call"}</p>
                    <a href='tel:+39 3311754757'>+39 3311754757</a>
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
                        <a href="https://maps.app.goo.gl/RBfYmm6kZDBRWpce8" target="_blank" rel="noopener noreferrer" >{lang === 'it' ?'RAGGIUNGICI':'WE ARE HERE'}</a>
                    </button>
                </div>
            </section >
        </>
    )
}