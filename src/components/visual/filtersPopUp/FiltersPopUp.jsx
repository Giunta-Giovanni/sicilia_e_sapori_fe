// import hooks
import { useState } from 'react';
import useLang from '../../../hooks/useLang';

// import styles
import styles from './FiltersPopUp.module.css';

export default function FiltersPopUp({ isFilterOpen, setIsFilterOpen, handleClick, selectedFilters, setSelectedFilters, allergens, spicy, vegetarian }) {

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
                                        {/* checkmark */}
                                        <span className={styles.checkmark}></span>
                                        {/* icon, allergens */}
                                        <span className={`${styles.icon} ${styles.allergens}`}>
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
                    <h5 className={styles.filterTitle}>{lang === 'it' ? 'Preferenze' : 'Preferences'}</h5>
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
                                {/* checkmark */}
                                <span className={styles.checkmark}></span>
                                {/* icon */}
                                <span className={styles.icon}>
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
                                {/* checkmark */}
                                <span className={styles.checkmark}></span>
                                {/* icon */}
                                <span className={styles.icon}>
                                    <img src={vegetarian} alt="" />
                                </span>
                                <span>{lang === 'it' ? 'Vegetariano' : 'Vegeterian'}</span>
                            </label>
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