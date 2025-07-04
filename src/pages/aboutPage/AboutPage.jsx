// style
import styles from './AboutPage.module.css';
// assets
import { icons } from '../../assets/svg/general/icons';
import test1 from '/pizzas.png';
import test2 from '/mappa.png';
// context
import GlobalContext from '../../context/GlobalContext';
import { useContext } from 'react';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function AboutPage() {

    const { numb1, numb2 } = icons;
    const { lang } = useContext(GlobalContext)

    const images = [
        test1,
        test2,
        test1,
        test2
    ];

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
                <h2>{lang === 'it' ? 'Tecnica e Gusto' : 'Craftmanship and Flavour'}</h2>
                <h5>{lang === 'it' ? 'Campionati mondiali di Pizza' : 'World Pizza Championships'}</h5>
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
                    {images.map((img, i) => (
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


        <h3 class={styles.presentationTitle}>{lang === 'it' ? 'Dentro la nostra cucina' : "In the heart of our kitchen"}</h3>

        {/* section1 + noline*/}
        <div class={`${styles.presentationDivWrapper} ${styles.nopadding}`}>
            <div className={styles.presentationDiv}>
                {/* img + line */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.line}
                    poster={test1}
                    src="/video/jumbo.mp4"></video>
                {/* description */}
                <div class={styles.description}>
                    <h4>{lang === 'it' ? "Il forno rotante" : "The rotating oven"}</h4>
                    <p className={styles.descriptionOverlay}>{lang === 'it'
                        ? "Il nostro forno rotante è il cuore pulsante della pizzeria, garantendo una cottura uniforme e perfetta per ogni pizza. Grazie al movimento continuo della pietra refrattaria, la temperatura si distribuisce in modo ottimale, esaltando sapori e consistenze uniche."
                        : "Our rotating oven is the beating heart of the pizzeria, ensuring an even and perfect bake for every pizza. Thanks to the continuous movement of the refractory stone, heat is distributed optimally, enhancing unique flavors and textures."
                    }
                    </p>
                </div>
            </div>
        </div>

        {/* section2 */}
        <div class={styles.presentationDivWrapper}>
            {/* inverted */}
            <div className={`${styles.presentationDiv} ${styles.inverted}`}>
                {/* img */}
                <img src={test2} />
                {/* description + line*/}
                <div className={`${styles.description} ${styles.line}`}>
                    <h4>{lang === 'it' ? "Il lievito madre" : "Sourdough starter"}</h4>
                    <p>{lang === 'it'
                        ? "Il nostro lievito madre è il segreto della pizza artigianale, capace di donare una lievitazione lenta e naturale. Questo processo esalta il gusto e la digeribilità, regalando una pasta soffice e fragrante."
                        : "Our natural sourdough starter is the secret behind our artisan pizza, enabling a slow and natural fermentation. This process enhances flavor and digestibility, delivering a soft and fragrant dough."
                    }
                    </p>
                </div>
            </div>
        </div>

        {/* section3 */}
        <div class={`${styles.presentationDivWrapper} ${styles.margin}`}>
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
                        {images.map((img, i) => (
                            <SwiperSlide key={i}>
                                <img src={img} alt={`slide-${i}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
                {/* description */}
                <div class={styles.description}>
                    <h4>{lang === 'it' ? "Il nostro locale" : "Our place"}</h4>
                    <p>{lang === 'it'
                        ? "Il nostro locale, che nasce dalla passione e dalla tradizione, ti aspetta PROPRIO QUI per regalarti un'esperienza autentica. Ogni dettaglio è pensato per farti sentire come a casa."
                        : "Our place, born from passion and tradition, is waiting for you RIGHT HERE to offer an authentic experience. Every detail is designed to make you feel right at home."
                    }
                    </p>
                </div>
            </div>
        </div>

        {/* spacer */}
        <div style={{ height: '5rem' }}></div>
    </>
    )
}