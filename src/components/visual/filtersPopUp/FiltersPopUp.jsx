// import hooks
import { useState } from 'react';
import useLang from '../../../hooks/useLang';

// import context
import { useContext } from 'react';
import GlobalContext from '../../../context/GlobalContext';
import MenuContext from '../../../context/MenuContext';

// import styles
import styles from './FiltersPopUp.module.css';

// import assets
import { icons } from '../../../assets/svg/general/icons';

export default function FiltersPopUp({ isFilterOpen, setIsFilterOpen, selectedFilters, setSelectedFilters }) {

    // context
    const { handleClick } = useContext(GlobalContext)
    const { allergens } = useContext(MenuContext)

    // icons
    const { spicy, vegetarian } = icons

    // pendingSelectedFilters state
    const [pendingSelectedFilters, setPendingSelectedFilters] = useState(selectedFilters);

    // Function SaveChackedValue
    const saveCheckedValue = (event) => {
        const { name, checked } = event.target

        setPendingSelectedFilters(prev => ({
            ...prev,
            [name]: checked
        }));
    }

    // function to preset check value
    const isChecked = (obj, key) => {
        // check if object exist
        if (!obj) {
            return false
        }
        else {
            // if object contain key & key have value true
            if (obj.hasOwnProperty(key) && obj[key] === true) {
                return true;
            }
            return false
        }
    }

    // filteredAllergens
    const filteredAllergens = allergens.filter(allergen => allergen.key !== 'gluten');

    // save lang
    const lang = useLang();

    // RENDER
    return (
        <>
            {/* popUpWrapper */}
            <div className={styles.popUpWrapper}>
                {/* popUp */}
                <div className={styles.popUp}>
                    <div className={styles.header}>
                        {/* title */}
                        <h5 className={styles.title}>
                            {lang === 'it' ? 'Filtra il menù' : 'menù filters'}
                        </h5>

                        {/* closeButton */}
                        <button
                            className={styles.closeButton}
                            onClick={() => handleClick(isFilterOpen, setIsFilterOpen)}
                        >
                        </button>
                    </div>

                    {/* bodyPopup */}
                    <div className={styles.bodyPopUp}>
                        {/* Allergens */}
                        {/* filterTitle */}
                        <h5 className={styles.filterTitle}>{lang === 'it' ? 'Allergeni' : 'Allergens'}</h5>
                        {/* allergenFilters */}
                        <div className={styles.filters}>
                            {filteredAllergens.map(allergen => {
                                return (
                                    < div key={allergen.key} className={styles.filter} >
                                        <label>
                                            <input
                                                type="checkbox"
                                                name={allergen.key}
                                                onChange={saveCheckedValue}
                                                checked={isChecked(pendingSelectedFilters, allergen.key)}
                                            />
                                            {/* icon, checkmark */}
                                            <span className={`${styles.icon} ${styles.checkmark}`}>
                                                <img src={allergen.icon} alt='' />
                                            </span>
                                            <span>{lang === 'it' ? allergen.label.it : allergen.label.en}</span>
                                        </label>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Preferences */}

                        {/* filterTitle */}
                        <h5>{lang === 'it' ? 'Preferenze' : 'Preferences'}</h5>
                        {/* Filters */}
                        <div className={styles.filters}>
                            {/* is spicy?*/}
                            <div className={styles.filter} >
                                <label>
                                    <input
                                        type="checkbox"
                                        name='spicy'
                                        onChange={saveCheckedValue}
                                        checked={isChecked(pendingSelectedFilters, 'spicy')}
                                    />

                                    {/* icon */}
                                    <span className={`${styles.icon} ${styles.checkmark}`}>

                                        {/* spicy */}
                                        <img id={styles.spicy} src={spicy} alt="" />
                                    </span>
                                    <span>{lang === 'it' ? `Piccante` : 'Spicy'}</span>
                                </label>
                            </div>
                            {/* is vegetarian? */}
                            <div className={styles.filter} >
                                <label>
                                    <input
                                        type="checkbox"
                                        name='vegetarian'
                                        onChange={saveCheckedValue}
                                        checked={isChecked(pendingSelectedFilters, 'vegetarian')}
                                    />

                                    {/* icon */}
                                    <span className={`${styles.icon} ${styles.checkmark}`}>

                                        <img src={vegetarian} alt="" />
                                    </span>
                                    <span>{lang === 'it' ? 'Vegetariano' : 'Vegeterian'}</span>
                                </label>
                            </div>
                        </div>


                    </div>

                    {/* filtersApplyBtn */}
                    <div className={styles.filtersApplyBtn}>
                        <button
                            onClick={() => {
                                handleClick(isFilterOpen, setIsFilterOpen);
                                setSelectedFilters(pendingSelectedFilters);
                            }}
                        >
                            Applica
                        </button>
                    </div>

                </div>
            </div >
        </>
    )
}