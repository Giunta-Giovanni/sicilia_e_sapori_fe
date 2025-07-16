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

    const specificCat = [4, 5, 6, 14, 18, 19];
    const hasSecondaryPrice = product.secondary_price !== null && product.secondary_price !== '';
    const isFood = product.type === 'food';
    const isDrink = product.type === 'drink';

    console.log(product);
    // RENDER
    return (
        //product
        <div key={product.id} className={`${styles.product} ${isDisabled ? styles.disabled : undefined}`} >


            {/* leftCol  */}
            <div className={styles.leftCol}>
                {/* title */}
                <div className={styles.title} >
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


            <div className={`${styles.rightCol} ${isDrink ? styles.flexBox : null}`}>

                {/* Primary price */}
                <div className={`${styles.productPrice} ${specificCat.includes(product.category_id) ? '' : styles.textEnd}`}>
                    <p>{product.primary_price}€</p>

                    {(product.id === 68 || product.category_id === 18 || hasSecondaryPrice) && (
                        <p className={styles.text}>
                            {isFood
                                ? lang === 'it' ? 'Normale' : 'Standard'
                                : lang === 'it' ? 'Piccola' : 'Small'
                            }
                        </p>
                    )}
                </div>

                {/* Secondary price */}
                {specificCat.includes(product.category_id) && (
                    < div className={`${styles.productPrice} `}>
                        {hasSecondaryPrice && (
                            <>
                                <p>{product.secondary_price}€</p>
                                <p className={styles.text}>
                                    {isFood
                                        ? 'Scrocchiarella'
                                        : lang === 'it' ? 'Grande' : 'Large'
                                    }
                                </p>
                            </>

                        )}
                    </div>
                )}

            </div>

        </div >
    )
}
