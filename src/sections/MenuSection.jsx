//import Assets
import arrowDown from '../assets/svg/general/arrow-down.svg';
import allergensDoc from '../assets/svg/general/doc.svg';
import plate from '../assets/svg/general/plate.svg';
import filter from '../assets/svg/general/filter.svg'

export default function MenuSection({ styles }) {

    // RENDER
    return (

        // menuSection
        <section className={styles.menuSection}>

            {/* introduction */}
            <div className={styles.introduction}>
                <h2>MENÚ</h2>
                <img src={arrowDown} alt="arrow down" />
            </div>

            {/* menu */}
            <section className={styles.menu}>
                {/* navBar*/}
                <nav className={styles.navbar}>
                    {/* pcTitle */}
                    <h4 className={styles.pcTitle}>Menù</h4>
                    {/* navBarItems */}
                    <div className={styles.navbarItems}>
                        {/* item */}
                        <div className={`${styles.item} ${styles.navDoc}`}>
                            <img src={allergensDoc} alt="Allergens document" />
                            <span>Allergeni</span>
                        </div>
                        {/* item, navMenu */}
                        <div className={`${styles.item} ${styles.navMenu}`}>
                            <img src={plate} alt="plate" />
                            <span>Menù</span>
                        </div>
                        {/* item */}
                        <div className={`${styles.item} ${styles.navFilter}`}>
                            <img src={filter} alt="filter" />
                            <span>Filtra</span>
                        </div>
                    </div>
                    <ul>
                        <li>antipasti</li>
                        <li>pizze gourmet</li>
                        <li>pizze da napoli</li>
                        <li>pii</li>
                        <li>pizze</li>
                    </ul>
                </nav>

                {/* products */}
                <div className={styles.products}></div>
            </section>




            {/* Doughs Section*/}

            {/* Products Section */}
        </section >
    )
}