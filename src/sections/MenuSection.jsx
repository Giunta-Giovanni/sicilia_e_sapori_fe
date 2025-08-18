// import Hooks
import { useState, useEffect, useContext } from 'react';

// import Context
import GlobalContext from '../context/GlobalContext';
import MenuContext from '../context/MenuContext';

// import Components
import NavMenu from '../components/visual/navMenu/NavMenu';
import Products from '../components/visual/products/Products';
import AllergensPopUp from '../components/visual/allergensPopUp/AllergensPopUp';
import FiltersPopUp from '../components/visual/filtersPopUp/FiltersPopUp';

// import assets
import { icons } from '../assets/svg/general/icons';

export default function MenuSection({ styles }) {


    const { lang } = useContext(GlobalContext)
    // Menu context 
    const { takeOut, setTakeOut } = useContext(MenuContext)

    // Icons
    // const { arrowDownBrown } = icons;

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
    };

    // Allergen pop up state
    const [isAllergenOpen, setIsAllergenOpen] = useState(false);

    // Burgher menù state
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // hasMenuInteracted state
    const [hasMenuInteracted, setHasMenuInteracted] = useState(false);

    // Filter pop up state
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Filters state
    const [selectedFilters, setSelectedFilters] = useState(initialSelectedFilters);

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

            <div className={styles.boxChooseMenu}>
                <button
                    onClick={() => setTakeOut(false)}
                    className={`${styles.chooseMenu} 
                ${takeOut ? null : styles.active}`}
                >
                    {lang === "it" ? "AL TAVOLO" : "DINE-IN"}
                </button>
                <button
                    onClick={() => setTakeOut(true)}
                    className={`${styles.chooseMenu} ${takeOut ? styles.active : null}`}
                >
                    {lang === "it" ? "D'ASPORTO" : "TAKE-AWAY"}
                </button>
            </div>

            {/* introduction */}
            <div className={styles.introduction}>

                <h2>{takeOut ? lang === "it" ? "MENÚ D'ASPORTO" : "TAKE-OUT MENÚ" : lang === "it" ? "MENÚ AL TAVOLO" : "DINE-IN MENÚ"}</h2>
                {/* <img src={arrowDownBrown} alt="arrow down" /> */}
            </div>

            {/* menu */}
            <section className={styles.menu}>
                <NavMenu
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                    hasMenuInteracted={hasMenuInteracted}
                    setHasMenuInteracted={setHasMenuInteracted}
                    isAllergenOpen={isAllergenOpen}
                    setIsAllergenOpen={setIsAllergenOpen}
                    isFilterOpen={isFilterOpen}
                    setIsFilterOpen={setIsFilterOpen}
                    selectedFilters={selectedFilters}
                />

                {/* products */}
                <Products
                    selectedFilters={selectedFilters}
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
                            isAllergenOpen={isAllergenOpen}
                            setIsAllergenOpen={setIsAllergenOpen}
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
                            selectedFilters={selectedFilters}
                            setSelectedFilters={setSelectedFilters}
                        />
                    </>
                    : null
            }
        </section >
    )
}