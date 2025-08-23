// context
import GlobalContext from '../../context/GlobalContext';
import { useContext, useEffect, useRef } from 'react';

// import image
import { images } from '../../assets/jpg/image.js';

// import assets
import { icons } from '../../assets/svg/general/icons';

// import style
import styles from './AboutPage.module.css';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function AboutPage() {


    // image
    const { insegna, esterno, ingresso, dettagli, saletta, veranda, veranda2, coppe, certificato, lievito } = images

    // icons
    const { numb1, numb2 } = icons;

    const { lang } = useContext(GlobalContext)

    const jumboSwiper = [
       coppe, certificato
    ];

    const locationSwiper = [
      insegna, esterno, ingresso, dettagli, saletta, veranda, veranda2
    ];

        const videoRef = useRef(null);
    
        useEffect(() => {
            const video = videoRef.current;
            if (video) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(err => {
                console.log("Autoplay bloccato:", err);
                });
            }
            }
        }, []);


    // RENDER
    return (<>

        {/* jumbotronHeader */}
        <section class={styles.jumbotronHeader}>

            <div class={styles.sx}>
                <img src={numb1} alt="premio" />
                <h5>Pizza in Due</h5>
                <h6>Solarino, 2016</h6>
            </div>

            <div class={styles.center}>
                {/* <h2>{lang === 'it' ? 'Tecnica e Gusto' : 'Craftmanship and Flavour'}</h2> */}
                <h2>{lang === 'it' ? 'Campionati mondiali di Pizza' : 'World Pizza Championships'}</h2>
            </div>

            <div class={styles.dx}>
                <img src={numb2} alt="premio" />
                <h5>Pizza Classica</h5>
                <h6>Parma, 2017</h6>
            </div>

        </section>

        {/* jumbotronMain */}
        <section class={styles.jumbotronMain}>

            {/* jumbotronSwiper */}
            <div class={styles.jumbotronSwiper}>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 5000 }}
                    loop={true}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    onClick={(swiper, event) => {
                        const box = swiper.el.getBoundingClientRect();
                        const x = event.clientX - box.left;
                        if (x < box.width / 2) swiper.slidePrev();
                        else swiper.slideNext();
                    }}
                >
                    {jumboSwiper.map((img, i) => (
                        <SwiperSlide key={i}>
                            <img
                                src={img}
                                alt={`slide-${i}`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </section>

        {/* presentationDiv */}


        {/* <h3 class={styles.presentationTitle}>{lang === 'it' ? 'Dentro la nostra cucina' : "In the heart of our kitchen"}</h3> */}

        {/* section1 + noline*/}
        <div class={`${styles.presentationDivWrapper} ${styles.nopadding}`}>
            <div className={styles.presentationDiv}>
                {/* img + line */}
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className={styles.line}
                    // poster={test1}
                    src="/video/forno.mp4" ></video>
                {/* description */}
                <div class={styles.description}>
                    <h4>{lang === 'it' ? "Il forno rotante" : "The rotating oven"}</h4>
                    <p className={styles.descriptionOverlay}>{lang === 'it'
                        ? 
                        "Il forno rotante è il cuore pulsante della nostra pizzeria. Grazie al movimento continuo della pietra refrattaria, la temperatura si distribuisce in modo ottimale, garantendo una cottura uniforme e perfetta per ogni pizza."
                        :
                        "The beating heart of our pizzeria: the rotating oven. Thanks to the continuous movement of the refractory stone, the heat is evenly distributed, ensuring perfect, uniform baking for every pizza."
                    }
                    </p>
                </div>
            </div>
        </div >

        {/* section2 */}
        < div class={styles.presentationDivWrapper}>
            {/* inverted */}
            < div className={`${styles.presentationDiv} ${styles.inverted}`
            }>
                {/* img */}
                < img src={lievito} />
                {/* description + line*/}
                < div className={`${styles.description} ${styles.line}`}>
                    <h4>{lang === 'it' ? "Il lievito madre" : "Sourdough starter"}</h4>
                    <p>{lang === 'it'
                        ? 
                        "Il segreto della pizza artigianale sta tutto nel lievito madre. Il nostro dona agli impasti una lievitazione lenta e naturale. Questo processo esalta il gusto e la digeribilità e regala una pasta soffice e fragrante."
                        : 
                        "The secret of artisanal pizza lies in the sourdough starter. Ours gives the dough a slow, natural rise that enhances flavor and digestibility, resulting in a soft, fragrant crust."
                    }
                    </p>
                </div >
            </div >
        </div >

        {/* section3 */}
        < div class={`${styles.presentationDivWrapper} ${styles.margin}`}>
            <div class={styles.presentationDiv}>
                {/* swiper + line */}
                <div className={`${styles.swiper} ${styles.line}`}>
                    <Swiper
                        modules={[Autoplay, EffectFade]}
                        effect="fade"
                        loop
                        speed={1000}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }}
                        onClick={(swiper, event) => {
                            const box = swiper.el.getBoundingClientRect();
                            const x = event.clientX - box.left;
                            if (x < box.width / 2) swiper.slidePrev();
                            else swiper.slideNext();
                        }}
                        onSlideChangeTransitionEnd={(swiper) => {
                            if (!swiper.autoplay.running) {
                                swiper.autoplay.start();
                            }
                        }}
                    >
                        {locationSwiper.map((img, i) => (
                            <SwiperSlide key={i}>
                                <img src={img} alt={`slide-${i}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
                {/* description */}
                <div class={styles.description}>
                    <h4>{lang === 'it' ? "Il nostro locale" : "Our pizzeria"}</h4>
                    <p>{lang === 'it'
                        ? 
                        "Inaugurato nel 2015, Sicilia e Sapori torna sotto la gestione originale nel 2025, portando tante novità sia al locale che sul menù.L’ispirazione arriva dalla Sicilia antica e genuina, fatta di pietra e grano che ondeggia al sole, e decorata dai colori vivaci delle carte siciliane. Un omaggio alle nostre radici, da assaporare ogni giorno."
                        : 
                        "Founded in 2015, Sicilia e Sapori returned to its original management in 2025, bringing many new ideas to both the restaurant and the menu.Our inspiration comes from the ancient, authentic Sicily: stone walls, golden fields of grain swaying under the sun, and the vibrant colors of traditional Sicilian cards. A tribute to our roots, to be savored every day."
                    }
                    </p>
                </div>
            </div>
        </div >

        {/* spacer */}
        < div style={{ height: '5rem' }}></div >
    </>
    )
}