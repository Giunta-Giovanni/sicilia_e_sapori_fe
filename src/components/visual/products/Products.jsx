// import hooks
import { useContext } from 'react';

// import Context
import GlobalContext from '../../../context/GlobalContext';
import MenuContext from '../../../context/MenuContext';

// import styles
import styles from './Products.module.css';

// import Visual Components
import ProductCard from './ProductCard';
import { icons } from '../../../assets/svg/general/icons';

export default function Products({ selectedFilters }) {

    // context
    const { lang } = useContext(GlobalContext);
    const { productCategories, sections, allergens } = useContext(MenuContext);
    const { oven, glutenFree, rustic, wholeWheat } = icons;

    // RENDER
    return (
        < div className={styles.boxProducts} >
            {/* doughs */}
            <section ref={sections.doughs ? sections.doughs : undefined} className={styles.doughs}>
                <h4>{lang === 'it' ? 'I nostri impasti' : 'Our dough selection'}</h4>

                <h5>
                    {lang === 'it'
                        ? 'Per tutti i nostri impasti usiamo lievito madre a lunga maturazione'
                        : 'All our doughs are made using long-fermentation sourdough.'}
                </h5>


                {/* wholeWheat */}
                <div className={styles.dough} id={styles.wholeWheat}>
                    <div className={styles.leftCol}>
                        <img src={wholeWheat} alt="" />
                        <h6>
                            {lang === 'it'
                                ? 'Integrale ai grani antichi siciliani'
                                : 'Whole wheat with ancient Sicilian grains'}
                        </h6>
                    </div>

                    <div className={styles.rightCol}>
                        <p className={styles.price}>
                            1.50€
                        </p>
                    </div>
                </div>

                {/* glutenFree */}
                <div className={styles.dough} id={styles.glutenFree}>
                    <div className={styles.leftCol}>
                        <img src={glutenFree} alt="" />

                        <h6>{lang === 'it' ? 'Senza glutine' : 'Gluten-free'}</h6>
                    </div>
                    <div className={styles.rightCol}>

                        <p className={styles.price}>
                            3.50€
                        </p>
                    </div>

                </div>

                {/* rustic */}
                <div className={styles.dough} id={styles.rustic}>
                    <div className={styles.leftCol}>
                        <img src={rustic} alt="" />

                        <h6>
                            {lang === 'it'
                                ? 'Rustico ai cereali'
                                : 'Rustic multigrain dough'}
                        </h6>
                    </div>
                    <div className={styles.rightCol}>
                        <p className={styles.price}>
                            1.50€
                        </p>
                    </div>
                </div>

                {/* crispy */}
                <div className={styles.dough} id={styles.crispy}>
                    <div className={styles.leftCol}>
                        <img src={oven} alt="" />

                        <h6>
                            {lang === 'it'
                                ? 'Scrocchiarella Monoporzione'
                                : 'Single-portion Scrocchiarella'}
                        </h6>
                    </div>


                    <div className={styles.rightCol}>

                        <p className={styles.price}>
                            1.50€
                        </p>
                    </div>

                </div>
            </section>

            <div>
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
                                    <span aria-hidden="true"></span>
                                    <h5>{subtitle}</h5>
                                    <span aria-hidden="true"></span>
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

                <div className={styles.extraInfo}>
                    <p>
                        {lang === 'it' ? (
                            <>
                                Coperto 2,00€ | Supplementi da 1€ a 3€, in base al tipo di prodotto.
                                <br />
                                *in mancanza di prodotti freschi verranno usati prodotti surgelati o abbattuti
                            </>
                        ) : (
                            <>
                                Cover charge €2.00 | Extras from €1 to €3, depending on the type of product.
                                <br />
                                *In case of lack of fresh ingredients, frozen or blast-chilled products will be used
                            </>
                        )}
                    </p>


                </div>
            </div>

        </div >
    )
}
























