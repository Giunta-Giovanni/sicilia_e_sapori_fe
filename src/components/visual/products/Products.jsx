// import hooks
import { useContext } from 'react';

// import Context
import GlobalContext from '../../../context/GlobalContext';
import MenuContext from '../../../context/MenuContext';

// import styles
import styles from './Products.module.css';

// import Visual Components
import ProductCard from './ProductCard';

export default function Products({ selectedFilters }) {

    // context
    const { lang } = useContext(GlobalContext);
    const { productCategories, sections, allergens } = useContext(MenuContext);

    // RENDER
    return (
        < div className={styles.boxProducts} >
            {/* doughs */}
            <section ref={sections.doughs ? sections.doughs : undefined} className={styles.doughs}>
                <h4>{lang === 'it' ? 'I nostri impasti' : 'Our dough selection'}</h4>

                {/* traditional */}
                <div className={styles.dough} id={styles.traditional}>
                    <h5>
                        {lang === 'it'
                            ? 'Tradizionale a lunga lievitazione'
                            : 'Traditional long-fermented dough'}
                    </h5>
                    <p>
                        {lang === 'it'
                            ? 'Impastato con lievito madre e lasciato riposare per 36 ore'
                            : 'Made with sourdough starter and rested for 36 hours'}
                    </p>
                </div>

                {/* wholeWheat */}
                <div className={styles.dough} id={styles.wholeWheat}>
                    <h5>
                        {lang === 'it'
                            ? 'Integrale ai grani antichi siciliani'
                            : 'Whole wheat with ancient Sicilian grains'}
                    </h5>
                    <p>
                        {lang === 'it'
                            ? 'Un impasto ricco di fibre, realizzato con farine integrali e varietà autoctone siciliane. Sano, profumato e deciso.'
                            : 'A fibre-rich dough made with whole wheat flour and native Sicilian grain varieties. Wholesome, aromatic, and bold.'}
                    </p>
                    <p className={styles.price}>
                        {lang === 'it' ? 'Supplemento: 1.00€' : 'Extra: 1.00€'}
                    </p>
                </div>

                {/* glutenFree */}
                <div className={styles.dough} id={styles.glutenFree}>
                    <h5>{lang === 'it' ? 'Senza glutine' : 'Gluten-free'}</h5>
                    <p>
                        {lang === 'it'
                            ? 'Preparato con cura per garantire leggerezza e gusto, ideale per chi segue una dieta gluten free. Naturalmente buono.'
                            : 'Carefully crafted to ensure lightness and flavour — ideal for those following a gluten-free diet. Naturally delicious.'}
                    </p>
                    <p className={styles.price}>
                        {lang === 'it' ? 'Supplemento: 2.00€' : 'Extra: 2.00€'}
                    </p>
                </div>

                {/* rustic */}
                <div className={styles.dough} id={styles.rustic}>
                    <h5>
                        {lang === 'it'
                            ? 'Rustico ai cereali'
                            : 'Rustic multigrain dough'}
                    </h5>
                    <p>
                        {lang === 'it'
                            ? 'Un impasto dal carattere deciso, arricchito con un mix di cereali per un gusto intenso e una consistenza più corposa.'
                            : 'A bold, flavourful dough enriched with a blend of grains for a hearty taste and rustic texture.'}
                    </p>
                    <p className={styles.price}>
                        {lang === 'it' ? 'Supplemento: 1.50€' : 'Extra: 1.50€'}
                    </p>
                </div>

                {/* crispy */}
                <div className={styles.dough} id={styles.crispy}>
                    <h5>
                        {lang === 'it'
                            ? 'Scrocchiarella'
                            : 'Crispy thin crust'}
                    </h5>
                    <p>
                        {lang === 'it'
                            ? 'Sottile, dorato e irresistibilmente croccante. Un impasto pensato per chi ama la pizza leggera ma ricca di gusto.'
                            : 'Thin, golden, and irresistibly crunchy. Perfect for those who love a light yet flavourful pizza.'}
                    </p>
                    <p className={styles.price}>
                        {lang === 'it' ? 'Supplemento: 1.50€' : 'Extra: 1.50€'}
                    </p>
                </div>
            </section>

            {/* products */}
            {productCategories.map(productCategory => {
                const { id, title, subtitle, products, ref } = productCategory;
                return (
                    // products
                    <section key={id} className={styles.products} ref={ref ? ref : undefined}>
                        {title && <h4>{title}</h4>}
                        {subtitle &&
                            // subtitle
                            <div className={styles.subtitle}>
                                <span></span>
                                <h5>{subtitle}</h5>
                                <span></span>
                            </div>
                        }
                        {products.map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                styles={styles}
                                allergens={allergens}
                                selectedFilters={selectedFilters}
                                lang={lang}
                            />
                        ))}
                    </section>
                )
            })}
        </div>
    )
}
























