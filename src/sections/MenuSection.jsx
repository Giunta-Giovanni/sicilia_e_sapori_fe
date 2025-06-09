// import Hooks
import { useState, useEffect } from 'react';

// import Components
import AllergensPopUp from '../components/visual/allergensPopUp/AllergensPopUp';

//import Assets
import { allergens, allergenIcons, allergenLabels } from '../assets/svg/allergens/allergens';
import allergensDoc from '../assets/svg/general/doc.svg';
import arrowDown from '../assets/svg/general/arrow-down.svg';
import filter from '../assets/svg/general/filter.svg';
import plate from '../assets/svg/general/plate.svg';

// import Data
import { categories } from '../data/categories';


export default function MenuSection({ styles }) {

    // Allergen pop up state
    const [isAllergenOpen, setIsAllergenOpen] = useState(false)
    // Burgher menù state
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Filter pop up state
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Current section state
    const [currentSection, setCurrentSection] = useState(null);

    // Change state to Toggle menu
    function handleClick(state, setState) {
        // if state is close open it
        if (!state) {
            setState(true);
            // if state is open close it
        } else {
            setState(false);
        }
    }

    // 
    function updateCurrentSection(name) {
        setCurrentSection(name);
    }

    // add no scroll to body when pop up is open
    useEffect(() => {
        if (isAllergenOpen) {
            document.documentElement?.classList.add('noScroll');
            document.body?.classList.add('noScroll');
        } else {
            document.documentElement?.classList.remove('noScroll');
            document.body?.classList.remove('noScroll');
        }

    }, [isAllergenOpen])

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
                        {/* col */}
                        <div className={styles.col}>
                            {/* item, navDoc */}
                            <div className={`${styles.item} ${styles.navDoc}`} onClick={() => handleClick(isAllergenOpen, setIsAllergenOpen)}>
                                <img src={allergensDoc} alt="Allergens document" />
                                <span>Allergeni</span>
                            </div>
                        </div>
                        {/* col */}
                        <div className={styles.col} >
                            {/*item, navMenu */}
                            <div className={`${styles.item} ${styles.navMenu}`} onClick={() => handleClick(isMenuOpen, setIsMenuOpen)}>
                                <img src={plate} alt="plate" />
                                <span>Menù</span>
                            </div>
                        </div>
                        {/* col */}
                        <div className={styles.col}>
                            {/* item, navFilter */}
                            <div className={`${styles.item} ${styles.navFilter}`} onClick={() => handleClick(isFilterOpen, setIsFilterOpen)}>
                                <img src={filter} alt="filter" />
                                <span>Filtra</span>
                            </div>
                        </div>
                    </div>

                    {/* boxNavList */}
                    <div className={`${styles.boxNavList} ${isMenuOpen ? styles.isOpen : ''}`}>
                        {/* navList */}
                        <ul className={`${styles.navList} ${isMenuOpen ? styles.isOpen : ''}`}>
                            {categories.map(category =>
                                <li
                                    key={category.id}
                                    onClick={() => updateCurrentSection(category.name)}
                                >
                                    {category.name}
                                </li>
                            )}
                        </ul>
                    </div>

                </nav>

                {/* products */}
                <div className={styles.products}></div>
            </section >




            {/* Doughs Section*/}

            {/* Products Section */}




            {/* allergens pop up -> after move in component */}

            {isAllergenOpen ?
                <>
                    {/* overlay */}
                    < div className={styles.overlay}></div>

                    {/* AllergensPopUp */}
                    <AllergensPopUp
                        allergens={allergens}
                        isAllergenOpen={isAllergenOpen}
                        setIsAllergenOpen={setIsAllergenOpen}
                        handleClick={handleClick}
                    />
                </>

                : null

            }



        </section >
    )
}