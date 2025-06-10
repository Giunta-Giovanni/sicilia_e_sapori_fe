// import hooks
import useLang from '../../../hooks/useLang';
// import Style
import styles from './AllergensPopUp.module.css'

export default function AllergenPopUp({ allergens, isAllergenOpen, setIsAllergenOpen, handleClick }) {

    // save lang
    const lang = useLang()

    // RENDER
    return (
        <>
            {/* popUpWrapper */}
            <div className={styles.popUpWrapper}>
                {/* popUp */}
                <div className={styles.popUp}>
                    {/* header */}
                    <div className={styles.header}>
                        {/* title */}
                        <h5 className={styles.title}>
                            {lang === 'it' ? 'Info allergeni' : 'Allergen Information'}
                        </h5>

                        {/* closeButton */}
                        <button
                            className={styles.closeButton}
                            onClick={() => handleClick(isAllergenOpen, setIsAllergenOpen)}
                        >
                        </button>
                    </div>

                    <h6>{lang === 'it' ? 'LEGENDA' : 'LEGEND'}</h6>
                    {/* legend */}
                    <div className={styles.legend}>
                        <ul>
                            {allergens.map(allergen => (
                                <li key={allergen.key}>
                                    <img src={allergen.icon} alt={allergen.key} />
                                    <span>{allergen.label[lang]}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* regulation */}
                    <p className={styles.regulation}>
                        {lang === 'it'
                            ? "In ottemperanza al Regolamento UE 1169/2011, informiamo la gentile clientela che alcuni piatti possono contenere allergeni. Al di sopra è riportata la legenda degli allergeni rappresentati con icone."
                            : "In compliance with EU Regulation 1169/2011, we inform our valued customers that some dishes may contain allergens. The icons above represent the allergen legend."
                        }
                    </p>
                </div>
            </div>
        </>
    );
}