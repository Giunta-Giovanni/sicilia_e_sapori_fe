// import hooks
import useLang from '../../../hooks/useLang';

// import styles
import styles from './FiltersPopUp.module.css';

export default function FiltersPopUp(isFilterOpen, setIsFilterOpen, handleClick) {

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

                </div>

            </div>
        </>
    )
}