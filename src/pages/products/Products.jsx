// import hooks
import { useState, useEffect, useMemo } from 'react';

// import axios
import axios from 'axios';

// import styles
import styles from './Products.module.css';

// import Components
import ProductCard from './ProductCard';

export default function Products({ lang, spicy, vegetarian, allergens }) {

    // products state 
    const [products, setProducts] = useState([]);

    // fetch products data
    const fetchProducts = () =>
        axios.get('http://127.0.0.1:8000/api/products')
            .then(res => setProducts(res.data.data))
            .catch(err => console.log(err))


    useEffect(() => {
        fetchProducts()
    }, []);

    const gourmetPizzas = useMemo(() =>
        products.filter(p => p.category_id === 1),
        [products]);

    const StuffedPizzas = useMemo(() =>
        products.filter(p => p.category_id === 2),
        [products]);

    const PizzasNaples = useMemo(() =>
        products.filter(p => p.category_id === 3),
        [products]);

    const redPizzas = useMemo(() =>
        products.filter(p => p.category_id === 4),
        [products]);

    const whitePizzas = useMemo(() =>
        products.filter(p => p.category_id === 5),
        [products]);

    const seaFoodPizzas = useMemo(() =>
        products.filter(p => p.category_id === 6),
        [products]);

    const buffaloCheesePizzas = useMemo(() =>
        products.filter(p => p.category_id === 19),
        [products]);

    const calzones = useMemo(() =>
        products.filter(p => p.category_id === 7),
        [products]);

    const scaccioni = useMemo(() =>
        products.filter(p => p.category_id === 8),
        [products]);

    const sandwiches = useMemo(() =>
        products.filter(p => p.category_id === 9),
        [products]);

    const dishes = useMemo(() =>
        products.filter(p => p.category_id === 10),
        [products]);

    const friedFood = useMemo(() =>
        products.filter(p => p.category_id === 11),
        [products]);

    const desserts = useMemo(() =>
        products.filter(p => p.category_id === 12),
        [products]);

    const beers = useMemo(() =>
        products.filter(p => p.category_id === 14),
        [products]);

    const cocktails = useMemo(() =>
        products.filter(p => p.category_id === 13),
        [products]);

    const whiteWines = useMemo(() =>
        products.filter(p => p.category_id === 15),
        [products]);

    const sparklingWines = useMemo(() =>
        products.filter(p => p.category_id === 16),
        [products]);

    const redWines = useMemo(() =>
        products.filter(p => p.category_id === 17),
        [products]);

    const softDrinks = useMemo(() =>
        products.filter(p => p.category_id === 18),
        [products]);

    // Array of categories products
    const productCategories = [
        {
            id: 1,
            title: lang === 'it' ? 'Pizze Gourmet' : 'Gourmet Pizzas',
            subtitle: undefined,
            products: gourmetPizzas
        },
        {
            id: 2,
            title: lang === 'it' ? 'Pizze Baciate' : 'Stuffed Pizzas',
            subtitle: undefined,
            products: StuffedPizzas
        },
        {
            id: 3,
            title: lang === 'it' ? 'Pizze da Napoli' : 'Pizzas From Naples',
            subtitle: undefined,
            products: PizzasNaples
        },
        {
            id: 4,
            title: lang === 'it' ? 'Pizze' : 'Pizzas',
            subtitle: lang === 'it' ? 'Pizze Rosse' : 'Red Pizzas',
            products: redPizzas
        },
        {
            id: 5,
            title: undefined,
            subtitle: lang === 'it' ? 'Pizze Bianche' : 'White Pizzas',
            products: whitePizzas
        },
        {
            id: 6,
            title: undefined,
            subtitle: lang === 'it' ? 'Pizze al Pesce' : 'Sea Food Pizzas',
            products: seaFoodPizzas
        },
        {
            id: 7,
            title: undefined,
            subtitle: lang === 'it' ? 'Pizze con Mozzarella di Bufala' : 'Pizzas with Buffalo Cheese',
            products: buffaloCheesePizzas
        },
        {
            id: 8,
            title: lang === 'it' ? 'Calzoni' : 'Calzones',
            subtitle: undefined,
            products: calzones
        },
        {
            id: 9,
            title: lang === 'it' ? 'Scaccioni' : 'Scaccioni',
            subtitle: undefined,
            products: scaccioni
        },
        {
            id: 10,
            title: lang === 'it' ? 'Panini' : 'Sandwiches',
            subtitle: undefined,
            products: sandwiches
        },
        {
            id: 11,
            title: lang === 'it' ? 'Piatti' : 'Dishes',
            subtitle: undefined,
            products: dishes
        },
        {
            id: 12,
            title: lang === 'it' ? 'Friggitoria' : 'Fried Food',
            subtitle: undefined,
            products: friedFood
        },
        {
            id: 13,
            title: lang === 'it' ? 'Dolci' : 'Desserts',
            subtitle: undefined,
            products: desserts
        },
        {
            id: 14,
            title: lang === 'it' ? 'Birre' : 'Beers',
            subtitle: undefined,
            products: beers
        },
        {
            id: 15,
            title: lang === 'it' ? 'Vini Rossi' : 'Red Wines',
            subtitle: undefined,
            products: redWines
        },
        {
            id: 16,
            title: lang === 'it' ? 'Vini Bianchi' : 'White Wines',
            subtitle: undefined,
            products: whiteWines
        },
        {
            id: 17,
            title: lang === 'it' ? 'Vini Frizzanti' : 'Sprarkling Wines',
            subtitle: undefined,
            products: sparklingWines
        },
        {
            id: 18,
            title: lang === 'it' ? 'Soft Drinks' : 'Soft Drinks',
            subtitle: undefined,
            products: softDrinks
        },
    ]

    // RENDER
    return (
        < div className={styles.boxProducts} >
            {/* doughs */}
            <section className={styles.doughs}>
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

            {productCategories.map(productCategory => {
                const { title, subtitle, products } = productCategory;
                return (
                    <section className={styles.products}>
                        {title && <h4>{title}</h4>}
                        {subtitle &&
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
                                spicy={spicy}
                                vegetarian={vegetarian}
                                allergens={allergens}
                                lang={lang}
                            />
                        ))}
                    </section>
                )
            })}
        </div>
    )
}
























