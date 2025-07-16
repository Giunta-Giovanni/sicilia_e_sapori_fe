// import Utilities
import { shouldDisableProduct } from "../../../utils/filters";
import { formatSize } from "../../../utils/format";

// import Icons
import { icons } from "../../../assets/svg/general/icons";

export default function ProductCard({ lang, product, styles, allergens, selectedFilters }) {

    // save icons
    const { spicy, vegetarian } = icons;

    // save state on filtered product
    const isDisabled = shouldDisableProduct(product, selectedFilters);

    // save size
    let primarySize = formatSize(product.primary_size);
    let secondarySize = formatSize(product.secondary_size);

    // RENDER
    return (
        //product
        <div key={product.id} className={`${styles.product} ${isDisabled ? styles.disabled : undefined}`} >


            {/* leftCol  */}
            <div className={styles.leftCol}>
                {/* title */}
                < div className={styles.title} >
                    <h6>{lang === 'it' ? product.name_it : product.name_en}</h6>
                    {
                        product.type == 'food' ?
                            <>
                                {product.is_spicy === 1 && (
                                    <img
                                        src={spicy}
                                        id={styles.spicy}
                                        alt="spicy"
                                    />
                                )}
                                {product.is_vegetarian === 1 && (
                                    <img
                                        src={vegetarian}
                                        alt="vegetarian"
                                    />
                                )}
                            </>
                            : null
                    }

                    {/* allergens */}
                    {
                        product.allergens ?
                            <div className={styles.allergens}>
                                {allergens
                                    .filter(allergen => product.allergens.includes(allergen.key))
                                    .map(allergen => (
                                        <span key={allergen.key}>
                                            <img src={allergen.icon} alt={allergen.key} />
                                        </span>
                                    ))}
                            </div>
                            :
                            null
                    }
                </div >



                {/* description */}
                < p className={styles.description} >
                    {lang === 'it' ?
                        product.description_it
                        :
                        product.description_en
                    }
                </p >

                {/* alcohol volume */}
                {
                    product.type === 'drink' && product.is_alcholic === 1 ?
                        <p className={styles.alcoholVolume}>
                            {`${product.alcohol_volume} % vol`}
                        </p>
                        :
                        null
                }

            </div>


            <div className={styles.rightCol}>

                {/* productPrice -> primaryPrice */}
                <div className={`${styles.productPrice}`}>

                    <p>{product.primary_price}</p>
                    {product.secondary_price === null || product.secondary_price === '' ? null : <p className={styles.text}>(Normale)</p>}

                </div>

                {/* <div className={styles.productPrice}>
                    {product.type === 'food' ?
                        <span>
                            {lang === 'it' ?
                                'Prezzo'
                                :
                                'Price'
                            }
                        </span>
                        :
                        <>
                            <span>
                                {lang === 'it' ?
                                    ` ${product.primary_size != 0 ? primarySize : 'Prezzo'}`
                                    :
                                    ` ${product.primary_size != 0 ? primarySize : 'Price'}`
                                }
                            </span>
                        </>
                    }
                    <span></span>
                    <span>{product.primary_price}€</span>
                </div> */}

                {/* productPrice -> secondaryPrice */}
                <div className={`${styles.productPrice}`} style={{
                    display: product.secondary_price === null || product.secondary_price === '' ? 'none' : ''
                }}>

                    <p>{product.secondary_price}</p>
                    <p className={styles.text}>(Scrocchiarella)</p>

                </div>

                {/* <div
                    className={styles.productPrice}
                    style={{
                        display: product.secondary_price === null || product.secondary_price === '' ? 'none' : ''
                    }}>
                    {product.type === 'food' ?
                        <span>
                            {lang === 'it' ?
                                'Maxi Scrocchiarella'
                                :
                                'Maxi Crispy '
                            }</span>
                        :
                        <>
                            <span>
                                {lang === 'it' ?
                                    ` ${product.secondary_size != 0 ? secondarySize : 'Prezzo'}`
                                    :
                                    ` ${product.secondary_size != 0 ? secondarySize : 'Price'}`
                                }
                            </span>
                        </>
                    }
                    <span></span>
                    <span>{product.secondary_price}€</span>
                </div> */}
            </div>

        </div >
    )
}
