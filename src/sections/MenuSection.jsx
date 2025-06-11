// import Hooks
import { useState, useEffect } from 'react';

// import Components
import AllergensPopUp from '../components/visual/allergensPopUp/AllergensPopUp';
import FiltersPopUp from '../components/visual/filtersPopUp/FiltersPopUp';

//import Assets
import { allergens } from '../assets/svg/allergens/allergens';
import spicy from '../assets/svg/general/pepper.svg';
import vegetarian from '../assets/svg/general/leaf.svg'
import allergensDoc from '../assets/svg/general/doc.svg';
import arrowDown from '../assets/svg/general/arrow-down.svg';
import filterIcon from '../assets/svg/general/filter.svg';
import plate from '../assets/svg/general/plate.svg';

// import Data
import { categories } from '../data/categories';
import { displayName } from 'react-world-flags';


export default function MenuSection({ styles }) {

    // Initial Selected Filters
    const initialSelectedFilters = {
        celery: false,
        crustaceans: false,
        egg: false,
        fish: false,
        gluten: false,
        lupins: false,
        milk: false,
        molluscs: false,
        mustard: false,
        nut: false,
        peanuts: false,
        sesame: false,
        sulphites: false,
        spicy: false,
        vegetarian: false,
    }

    // Allergen pop up state
    const [isAllergenOpen, setIsAllergenOpen] = useState(false)
    // Burgher menù state
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Filter pop up state
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Filters state
    const [selectedFilters, setSelectedFilters] = useState(initialSelectedFilters)

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

    // function to update section
    function updateCurrentSection(name) {
        setCurrentSection(name);
    }

    function counter(obj) {
        const count = Object.values(obj).reduce((a, filter) => a + (filter === true ? 1 : 0), 0)
        return count
    }

    // add no scroll to body when pop up is open
    useEffect(() => {
        if (isAllergenOpen || isFilterOpen) {
            document.documentElement?.classList.add('noScroll');
            document.body?.classList.add('noScroll');
        } else {
            document.documentElement?.classList.remove('noScroll');
            document.body?.classList.remove('noScroll');
        }

    }, [isAllergenOpen, isFilterOpen])
    console.log(counter(selectedFilters))
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
                                <div>
                                    <img src={filterIcon} alt="filter" />
                                    <p
                                        className={styles.counter}
                                        style={counter(selectedFilters) === 0
                                            ? { display: 'none' }
                                            : {}
                                        }
                                    >
                                        {counter(selectedFilters)}
                                    </p>
                                </div>
                                <span>Filtra</span>

                                {/* counter */}
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




            {/* Allergens Pop Up */}
            {
                isAllergenOpen ?
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

            {/* Filters PopUp */}
            {
                isFilterOpen ?
                    <>
                        {/* overlay */}
                        < div className={styles.overlay}></div>

                        {/* FiltersPopUp */}
                        <FiltersPopUp
                            allergens={allergens}
                            spicy={spicy}
                            vegetarian={vegetarian}
                            isFilterOpen={isFilterOpen}
                            setIsFilterOpen={setIsFilterOpen}
                            handleClick={handleClick}
                            selectedFilters={selectedFilters}
                            setSelectedFilters={setSelectedFilters}
                        />
                    </>
                    : null
            }



        </section >
    )
}