export default function ProductCard({ lang, product, styles, spicy, vegetarian, allergens }) {
    const formatSize = (size) => {
        const sizeNumber = Number(size);
        if (isNaN(sizeNumber)) return null;

        return sizeNumber >= 100
            ? `${sizeNumber / 100} ltr`
            : `${sizeNumber} cl`;
    };

    let primarySize = formatSize(product.primary_size);
    let secondarySize = formatSize(product.secondary_size);

    return (
        //product
        <div key={product.id} className={styles.product}>
            {/* title */}
            <div className={styles.title}>
                <h6>{lang === 'it' ? product.name_it : product.name_en}</h6>
                {product.type == 'food' ?
                    <>
                        {/* is Spicy */}
                        < img
                            src={spicy}
                            id={styles.spicy}
                            alt="spicy"
                            style={{ display: product.is_spicy === 0 ? 'none' : '' }}
                        />

                        {/* is vegetarian */}
                        <img
                            src={vegetarian}
                            alt="vegetarian"
                            style={{ display: product.is_vegetarian === 0 ? 'none' : '' }}
                        />
                    </>
                    : null}

            </div>

            {/* description */}
            <p className={styles.description}>
                {lang === 'it' ?
                    product.description_it
                    :
                    product.description_en
                }
            </p>

            {/* alcohol volume */}
            {product.type === 'drink' && product.is_alcholic === 1 ?
                <p className={styles.alcoholVolume}>
                    {`${product.alcohol_volume} % vol`}
                </p>
                :
                null
            }

            {/* allergens */}
            {product.allergens ?
                <div className={styles.allergens}>
                    {allergens.map(allergen => {
                        return (
                            <span
                                key={allergen.key}
                                style={{
                                    display: product.allergens.includes(allergen.key) ? '' : 'none'
                                }}>
                                <img src={allergen.icon} alt={allergen.key} />
                            </span>
                        )
                    })}
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
                    display: product.secondary_price === null ? 'none' : ''
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
                                `Prezzo ${product.primary_size != 0 ? secondarySize : ''}`
                                :
                                `Price ${product.primary_size != 0 ? secondarySize : ''}`
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
