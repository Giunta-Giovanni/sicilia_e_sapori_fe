// import hooks
import useLang from '../../../hooks/useLang';
// import Style
import styles from './AllergensPopUp.module.css'

export default function AllergenPopUp({ allergens, isAllergenOpen, setIsAllergenOpen, handleClick }) {

    const lang = useLang()
    console.log(lang);

    // let lang = 'it';


    // RENDER
    return (
        <>
            {/* popUpWrapper */}
            <div className={styles.popUpWrapper}>
                {/* Allergens popUp  */}
                <div className={styles.popUp}>

                    {lang === 'it' ?
                        // it
                        <>
                            {/* Allergens popUp  */}
                            < div className={styles.popUp}>
                                <div className={styles.header}>
                                    {/* title */}
                                    <h5 className={styles.title}>Info allergeni</h5>
                                    {/* closeButton */}
                                    <button
                                        className={styles.closeButton}
                                        onClick={() => handleClick(isAllergenOpen, setIsAllergenOpen)}
                                    >
                                    </button>
                                </div>


                                {/* legend */}
                                <h6>LEGENDA</h6>
                                <div className={styles.legend}>
                                    <ul>
                                        {allergens.map(allergen => {
                                            return (
                                                <>
                                                    <li key={allergen.key}>
                                                        <img src={allergen.icon} alt="" />
                                                        <span>
                                                            {allergen.label.it}
                                                        </span>
                                                    </li>

                                                </>
                                            )
                                        })}
                                    </ul>
                                </div>

                                {/* regulations */}
                                <p className={styles.regulation}>
                                    In ottemperanza al Regolamento UE 1169/2011, informiamo la gentile clientela che alcuni piatti possono contenere allergeni. Di seguito è riportata la legenda degli allergeni rappresentati con icone.
                                </p>
                            </div>
                        </>
                        :
                        // en
                        <>

                            {/* title */}
                            <h4 className={styles.title}>Allergen Information</h4>
                            {/* regulation */}
                            <p className={styles.regulation}>
                                In compliance with EU Regulation 1169/2011, we inform our valued customers that some dishes may contain allergens. Below is the legend of allergens represented by icons.
                            </p>
                            {/* legend */}
                            <div className={styles.legend}>
                                <h5>LEGEND</h5>
                                <ul>
                                    {allergens.map(allergen => {
                                        return (
                                            <li key={allergen.key}>
                                                {allergen.label.en}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </>
                    }



                </div >
            </div>

        </>
    )
}