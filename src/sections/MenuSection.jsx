//import Assets
import arrowDown from '../assets/svg/general/arrow-down.svg'

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
                {/* navbar*/}
                <div className={styles.navbar}>
                </div>

                {/* products */}
                <div className={styles.products}></div>
            </section>




            {/* Doughs Section*/}

            {/* Products Section */}
        </section>
    )
}