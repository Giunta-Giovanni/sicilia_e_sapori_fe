// import hooks
import React from 'react';
import useLang from '../../../hooks/useLang';

// import context
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import MenuContext from '../../../context/MenuContext';

// import Style
import styles from './ProductPopUp.module.css'

// import Assets
import { icons } from '../../../assets/svg/general/icons';


export default function ProductPopUp({ openProductId, setOpenProductId, id, primarySize, secondarySize }) {

    console.log(id)
    const [product, setProduct] = useState([])

    const fetchData = () => {
        axios.get(`http://127.0.0.1:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        console.log(product);
    }, [product])


    // context
    const { allergens } = useContext(MenuContext);

    // icons
    const { vegetarian, spicy } = icons;

    // save lang
    const lang = useLang()

    // RENDER
    return (
        <>
            {/* popUpWrapper */}
            <div className={styles.popUpWrapper}>

                {product ?
                    <>
                        {/* popUp */}
                        < div className={styles.popUp}>
                            {/* header */}
                            <div className={styles.header}>
                                {/* title */}
                                < div >
                                    <h4>Categoria: {product.category_name}</h4>
                                </div >
                                {/* closeButton */}
                                <button
                                    className={styles.closeButton}
                                    onClick={() => setOpenProductId(null)}
                                >
                                </button>
                            </div>

                            {/* title */}
                            < div className={styles.title} >
                                <h5>{lang === 'it' ? product.name_it : product.name_en}</h5>
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
                                    <>
                                        <h6 className={styles.allergensTitle}>Allergeni</h6>

                                        <div className={styles.allergens}>
                                            {allergens
                                                .filter(allergen => product.allergens.includes(allergen.key))
                                                .map(allergen => (
                                                    <React.Fragment key={allergen.key}>
                                                        <span>
                                                            <img src={allergen.icon} alt={allergen.key} />
                                                        </span>
                                                        {lang === 'it' ? allergen.label.it : allergen.label.en}
                                                    </React.Fragment>
                                                ))}
                                        </div>
                                    </>

                                    :
                                    null
                            }

                            {/*  */}

                            {
                                product.type == 'food' ?
                                    <div className={styles.is}>

                                        <p>Il prodotto è piccante? {product.is_spicy === 1 ? 'YES' : 'NO'}</p>
                                        <p>Il prodotto è vegetariano? {product.is_vegetarian === 1 ? 'YES' : 'NO'}</p>
                                    </div>


                                    : null
                            }


                            {/* productPrice -> primaryPrice */}
                            <div className={styles.productPrice}>
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
                                            'Maxi Scrocchiarella'
                                            :
                                            'Maxi Crispy '
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

                    </>


                    : null

                }

            </div >
        </>
    );
}