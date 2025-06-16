// import Hooks
import { useState, useEffect, useContext, useRef } from 'react';

// import Context
import MenuContext from '../context/MenuContext';

// import Components
import Products from '../components/visual/products/Products';
import AllergensPopUp from '../components/visual/allergensPopUp/AllergensPopUp';
import FiltersPopUp from '../components/visual/filtersPopUp/FiltersPopUp';

// import Utilities
import counter from '../utilities/counter';


export default function MenuSection({ styles }) {

    const { arrowDown, allergensDoc, plate, filterIcon, allergens, productCategories, SlowScrollTo, isMobile, lang, sections } = useContext(MenuContext);

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
    // console.log(counter(selectedFilters))

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
                {/* boxNavbar */}
                <div className={styles.boxNavbar}>
                    {/* navBar*/}
                    <nav className={styles.navbar}>
                        {/* pcTitle */}
                        <h4 className={styles.pcTitle}>Menù</h4>
                        {/* navBarItems */}
                        <div className={styles.navbarItems}>
                            {/* col */}
                            <div className={styles.col}>
                                {/* item, navDoc */}
                                <div className={`${styles.item} ${styles.navDoc} ${styles.hoverUnderlineAnimation}`} onClick={() => handleClick(isAllergenOpen, setIsAllergenOpen)}>
                                    <img src={allergensDoc} alt="Allergens document" />
                                    <span>{lang === 'it' ? 'Allergeni' : 'Allergens'}</span>
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
                                <div className={`${styles.item} ${styles.navFilter} ${styles.hoverUnderlineAnimation}`} onClick={() => handleClick(isFilterOpen, setIsFilterOpen)}>
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
                                    <span> {lang === 'it' ? 'Filtra' : 'Filter'}</span>

                                    {/* counter */}
                                </div>
                            </div>
                        </div>

                        {/* boxNavList */}
                        <div className={`${styles.boxNavList} ${isMenuOpen ? styles.isOpen : ''}`}>
                            {/* navList */}
                            <ul className={`${styles.navList} ${isMenuOpen ? styles.isOpen : ''}`}>
                                <li
                                    onClick={() => { updateCurrentSection('impasti'), SlowScrollTo(sections.doughs, 1200, isMobile ? -100 : -50) }}
                                >
                                    {lang === 'it' ? 'Impasti' : 'Doughts'}
                                </li>
                                {productCategories.map(category =>
                                    <li
                                        key={category.id}
                                        onClick={() => { updateCurrentSection(category.title), SlowScrollTo(category.ref, 1200, isMobile ? -100 : -50) }}
                                    >
                                        {lang === 'it' ? category.title : category.title}
                                    </li>
                                )}
                            </ul>
                        </div>

                    </nav>
                </div>


                {/* products */}
                <Products lang={lang}
                />

            </section >

            {/* Allergens Pop Up */}
            {
                isAllergenOpen ?
                    <>
                        {/* overlay */}
                        < div className={styles.overlay}></div>

                        {/* AllergensPopUp */}
                        <AllergensPopUp
                            allergens={allergens} s
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