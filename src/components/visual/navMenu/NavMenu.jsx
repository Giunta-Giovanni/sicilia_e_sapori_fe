// import Hooks
import { useContext } from 'react';

// import Context
import MenuContext from '../../../context/MenuContext';

// import Utils
import { counter } from '../../../utils/counter';

// import Assets
import { icons } from '../../../assets/svg/general/icons';

// import Styles
import styles from './NavMenu.module.css';


export default function NavMenu({ isMenuOpen, setIsMenuOpen, hasMenuInteracted, setHasMenuInteracted, isFilterOpen, setIsFilterOpen, isAllergenOpen, setIsAllergenOpen, selectedFilters }) {

    // save context
    const { isMobile, isTablet, navCategories, SlowScrollTo, lang, handleClick, currentSection } = useContext(MenuContext);

    // save icons
    const { allergensDoc, plate, filterIcon } = icons;

    // RENDER
    return (

        // boxNavbar
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
                                className={currentSection === category.key ? styles.active : ''}
                                onClick={() => {
                                    if (isMobile || isTablet) handleClick(isMenuOpen, setIsMenuOpen);
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
    )
}