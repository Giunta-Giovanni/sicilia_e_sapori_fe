// import Hooks
import { useState, useEffect, useContext } from 'react';

// import Context
import MenuContext from '../context/MenuContext';

// import Components
import NavMenu from '../components/visual/navMenu/NavMenu';
import Products from '../components/visual/products/Products';
import AllergensPopUp from '../components/visual/allergensPopUp/AllergensPopUp';
import FiltersPopUp from '../components/visual/filtersPopUp/FiltersPopUp';

// import assets
import { icons } from '../assets/svg/general/icons';

export default function MenuSection({ styles }) {

    //menuContext
    const { openProductId } = useContext(MenuContext);

    // Icons
    const { arrowDownBrown } = icons;

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
        if (isAllergenOpen || isFilterOpen || openProductId) {
            document.documentElement?.classList.add('noScroll');
            document.body?.classList.add('noScroll');
        } else {
            document.documentElement?.classList.remove('noScroll');
            document.body?.classList.remove('noScroll');
        }

    }, [isAllergenOpen, isFilterOpen, openProductId])
    // console.log(counter(selectedFilters))

    // RENDER
    return (

        // menuSection
        <section className={styles.menuSection}>

            {/* introduction */}
            <div className={styles.introduction}>
                <h2>MENÚ</h2>
                <img src={arrowDownBrown} alt="arrow down" />
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

            {
                openProductId !== null ?
                    <>
                        {/* overlay */}
                        < div className={styles.overlay}></div>
                    </>
                    : null
            }
        </section >
    )
}