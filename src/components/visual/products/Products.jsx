// import hooks
import { useState, useContext } from 'react';

// import Context
import GlobalContext from '../../../context/GlobalContext';
import MenuContext from '../../../context/MenuContext';

// import styles
import styles from './Products.module.css';

// import Visual Components
import ProductCard from './ProductCard';
import { icons } from '../../../assets/svg/general/icons';

export default function Products({ selectedFilters }) {

    // Gloabl context
    const { lang } = useContext(GlobalContext);

    // Menu context
    const { productCategories, sections, allergens, takeOut } = useContext(MenuContext);

    // icons
    const { oven, glutenFree, rustic, wholeWheat } = icons;

    const filteredCategories = takeOut
        ? productCategories.filter(cat => cat.takeOut)
        : productCategories;

    // RENDER
    return (
        < div className={styles.boxProducts} >
            {/* doughs */}
            <section ref={sections.doughs ? sections.doughs : undefined} className={styles.doughs}>
                <h4>{lang === 'it' ? 'I nostri impasti' : 'Our dough selection'}</h4>

                <h5>
                    {lang === 'it'
                        ? 'Per tutti i nostri impasti usiamo lievito madre a lunga maturazione'
                        : 'All of our doughs are made with long-fermentation sourdough.'}
                </h5>

                <div className={styles.extra}>
                    <p>
                        {lang === 'it'
                            ? 'Aggiunta'
                            : 'Extra'}
                    </p>
                </div>

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
                {filteredCategories.map(productCategory => {
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
                                />
                            ))}

                        </section>
                    )
                })
                }

                {/* extraInfo */}
                < div className={styles.extraInfo}>
                    <p>
                        {lang === 'it' ? (
                            <>
                                {takeOut ? "Asporto 1,00€" : "Coperto 2,00€"} | Supplementi da 1€ a 3€, in base al tipo di prodotto.
                                <br />
                                *in mancanza di prodotti freschi verranno usati prodotti surgelati o abbattuti
                            </>
                        ) : (
                            <>
                                {takeOut ? "Take-Away charge €1,00" : "Service charge €2.00"} | Extras from €1 to €3, depending on the product.
                                <br />
                                *In case of lack of fresh ingredients, frozen or blast-chilled products will be used
                            </>
                        )}
                    </p>


                </div>
                <></>

            </div>


        </div >
    )
}
























