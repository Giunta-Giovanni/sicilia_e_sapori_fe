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

    const { arrowDown, allergensDoc, plate, filterIcon, allergens, productCategories, SlowScrollTo, isMobile, isTablet, lang, sections } = useContext(MenuContext);

    const navCategories = [{
        id: 25,
        title: lang === 'it' ? 'Impasti' : 'Doughts',
        subtitle: undefined,
        ref: sections.doughs ? sections.doughs : undefined
    }, ...productCategories];


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

    // hasMenuInteracted state
    const [hasMenuInteracted, setHasMenuInteracted] = useState(false)

    // Filter pop up state
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Filters state
    const [selectedFilters, setSelectedFilters] = useState(initialSelectedFilters)



    // Current section state
    const [currentSection, setCurrentSection] = useState(null);

    // Change state to Toggle menu
    function handleClick(state, setState, setHasInteracted = null) {
        // save user first interaction (optional)
        if (setHasInteracted) setHasInteracted(true);
        // change state
        setState(!state);
    }
    // console.log('firts menu interaction: ' + hasMenuInteracted)
    // console.log('is menu Open: ' + isMenuOpen)


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

                            {/* col -> allergen*/}
                            <div className={styles.col}>
                                {/* item, navDoc */}
                                <div className={`${styles.item} ${styles.navDoc} ${styles.hoverUnderlineAnimation}`} onClick={() => handleClick(isAllergenOpen, setIsAllergenOpen)}>
                                    <img src={allergensDoc} alt="Allergens document" />
                                    <span>{lang === 'it' ? 'Allergeni' : 'Allergens'}</span>
                                </div>
                            </div>

                            {/* col -> menu */}
                            <div className={styles.col} >
                                {/*item, navMenu */}
                                <div className={`${styles.item} ${styles.navMenu}`} onClick={() => handleClick(isMenuOpen, setIsMenuOpen, setHasMenuInteracted)}>
                                    <img src={plate} alt="plate" />
                                    <span>Menù</span>
                                </div>
                            </div>

                            {/* col -> filter*/}
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
                            <ul className={`${styles.navList} ${isMenuOpen ? styles.isOpen : ''} ${!isMenuOpen && hasMenuInteracted ? styles.isClosed : ''}`}>
                                {navCategories.map(category =>
                                    <li
                                        key={category.id}
                                        onClick={() => {
                                            if (isMobile || isTablet) handleClick(isMenuOpen, setIsMenuOpen);
                                            updateCurrentSection(category.title);
                                            SlowScrollTo(category.ref, 1200, (isMobile ? -600 : isTablet ? -650 : -50));
                                        }}
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