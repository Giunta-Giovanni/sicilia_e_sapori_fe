// import Style
import styles from './Products.module.css';

export default function Products({ lang }) {

    // RENDER
    return (
        < div className={styles.boxProducts} >
            {/* doughs */}
            < section className={styles.doughs} >
                <h4> {lang === 'it' ? 'I nostri impasti' : 'Our dough selection'}</h4>
                {/* traditional */}
                <div className={styles.dough} id={styles.traditional}>
                    <h5>Tradizionale a lunga lievitazione</h5>
                    <p>Impastato con lievito madre e lasciato riposare per 36 ore</p>
                </div>

                {/* wholeWheat */}
                <div className={styles.dough} id={styles.wholeWheat}>
                    <h5>Integrale ai grani antichi siciliani</h5>
                    <p>Un impasto ricco di fibre, realizzato con farine integrali e varietà autoctone siciliane. Sano, profumato e deciso.</p>
                    <p className={styles.price}>Supplemento: 1.00€</p>
                </div>

                {/* glutenFree */}
                <div className={styles.dough} id={styles.glutenFree}>
                    <h5>Senza glutine</h5>
                    <p>Preparato con cura per garantire leggerezza e gusto, ideale per chi segue una dieta gluten free. Naturalmente buono.</p>
                    <p className={styles.price}>Supplemento: 2.00€</p>
                </div>

                {/* rustic */}
                <div className={styles.dough} id={styles.rustic}>
                    <h5>Rustico ai cereali</h5>
                    <p>Un impasto dal carattere deciso, arricchito con un mix di cereali per un gusto intenso e una consistenza più corposa.</p>
                    <p className={styles.price}>Supplemento: 1.50€</p>
                </div>

                {/* crispy */}
                <div className={styles.dough} id={styles.crispy}>
                    <h5>Scrocchiarella</h5>
                    <p>Sottile, dorato e irresistibilmente croccante. Un impasto pensato per chi ama la pizza leggera ma ricca di gusto.</p>
                    <p className={styles.price}>Supplemento: 1.50€</p>
                </div>


            </section >
            {/* pizza Gourmet */}
            < section className={styles.products} >
                pizza gourmet
            </section >
        </div >
    )

}