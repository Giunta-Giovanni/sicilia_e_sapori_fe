import { icons } from "../../../assets/svg/general/icons";

export default function ProductCard({ lang, product, styles, allergens, selectedFilters }) {

    // save icons
    const { spicy, vegetarian } = icons;

    // create function for format size in litre or centilitre
    const formatSize = (size) => {
        const sizeNumber = Number(size);
        if (isNaN(sizeNumber)) return null;

        return sizeNumber >= 100
            ? `${sizeNumber / 100} lt`
            : `${sizeNumber} cl`;
    };

    // save size
    let primarySize = formatSize(product.primary_size);
    let secondarySize = formatSize(product.secondary_size);




    //create function for return true key in array
    function trovaChiaviTrue(obj) {
        return Object.keys(obj).filter(key => obj[key] === true);
    }

    // save readed filters
    const filters = trovaChiaviTrue(selectedFilters);

    let filterMatch = false;

    // if product contains allergens, spicy or vegetarian matching
    const hasMatchingAllergen = product.allergens?.some(allergen => filters.includes(allergen));
    const isSpicyMatch = filters.includes("spicy") && product.is_spicy;
    const isVegetarianMatch = filters.includes("vegetarian") && product.is_vegetarian;

    // if product have one of the above match or more return filterMatch true
    if (hasMatchingAllergen || isSpicyMatch || isVegetarianMatch) {
        filterMatch = hasMatchingAllergen || isSpicyMatch || isVegetarianMatch;
    }

    console.log(`il prodotto ${product.name_it} deve essere disabilitato? ${filterMatch}`);




    return (
        //product
        <div key={product.id} className={`${styles.product} ${filterMatch ? styles.disabled : undefined}`} >
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


            {/* productPrice -> primaryPrice */}
            <div className={styles.productPrice}>
                {product.type === 'food' ?
                    <span>
                        {lang === 'it' ?
                            'Standard'
                            :
                            'Standard'
                        }
                    </span>
                    :
                    <>
                        <span>
                            {lang === 'it' ?
                                `Prezzo ${product.primary_size != 0 ? primarySize : ''}`
                                :
                                `Price ${product.primary_size != 0 ? primarySize : ''}`
                            }
                        </span>
                    </>
                }
                <span></span>
                <span>{product.primary_price}€</span>
            </div>

            {/* productPrice -> secondaryPrice */}
            <div
                className={styles.productPrice}
                style={{
                    display: product.secondary_price === null || product.secondary_price === '' ? 'none' : ''
                }}>
                {product.type === 'food' ?
                    <span>
                        {lang === 'it' ?
                            'Maxi/Scrocchiarella'
                            :
                            'Maxi/Crispy'
                        }</span>
                    :
                    <>
                        <span>
                            {lang === 'it' ?
                                `Prezzo ${product.secondary_size != 0 ? secondarySize : ''}`
                                :
                                `Price ${product.secondary_size != 0 ? secondarySize : ''}`
                            }
                        </span>
                    </>
                }
                <span></span>
                <span>{product.secondary_price}€</span>
            </div>
        </div >
    )
}
