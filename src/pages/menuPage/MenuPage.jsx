// import Hooks
import { useRef, useState, useEffect, useMemo } from "react";
import MenuContext from "../../context/MenuContext";
import useLang from '../../hooks/useLang';

// import axios
import axios from 'axios';

// import Sections
import MenuSection from "../../sections/MenuSection"

// import components
import SlowScrollTo from "../../components/technical/SlowScrollTo";

// import Styles
import styles from "./MenuPage.module.css"

// import Assets
import { allergens } from '../../assets/svg/allergens/allergens';
import spicy from '../../assets/svg/general/pepper.svg';
import vegetarian from '../../assets/svg/general/leaf.svg'
import allergensDoc from '../../assets/svg/general/doc.svg';
import arrowDown from '../../assets/svg/general/arrow-down.svg';
import filterIcon from '../../assets/svg/general/filter.svg';
import plate from '../../assets/svg/general/plate.svg';

export default function MenuPage() {

    // products state 
    const [products, setProducts] = useState([]);

    // fetch products data
    const fetchProducts = () =>
        axios.get('http://127.0.0.1:8000/api/products')
            .then(res => setProducts(res.data.data))
            .catch(err => console.log(err))

    // save lang
    const lang = useLang();

    // save dinamic viewport
    const isMobile = window.innerWidth < 768;

    const sections = {
        doughs: useRef(null),
        gourmet: useRef(null),
        stuffed: useRef(null),
        naples: useRef(null),
        pizzas: useRef(null),
        calzones: useRef(null),
        scaccioni: useRef(null),
        sandwiches: useRef(null),
        dishes: useRef(null),
        friedFood: useRef(null),
        desserts: useRef(null),
        beers: useRef(null),
        wines: useRef(null),
        softDrinks: useRef(null),
    };


    const categories = [
        { id: 1, key: 'gourmet', title_it: 'Pizze Gourmet', title_en: 'Gourmet Pizzas' },
        { id: 2, key: 'stuffed', title_it: 'Pizze Baciate', title_en: 'Stuffed Pizzas' },
        { id: 3, key: 'naples', title_it: 'Pizze da Napoli', title_en: 'Pizzas from Naples' },
        { id: 4, key: 'pizzas', title_it: 'Pizze', title_en: 'Pizzas', subtitle_it: 'Pizze Rosse', subtitle_en: 'Red Pizzas' },
        { id: 5, key: 'whitePizzas', title_it: null, title_en: null, subtitle_it: 'Pizze Bianche', subtitle_en: 'White Pizzas' },
        { id: 6, key: 'seaPizzas', title_it: null, title_en: null, subtitle_it: 'Pizze al Pesce', subtitle_en: 'Sea Food Pizzas' },
        { id: 19, key: 'buffaloPizzas', title_it: null, title_en: null, subtitle_it: 'Pizze con Mozzarella di Bufala', subtitle_en: 'Pizzas with Buffalo Cheese' },
        { id: 7, key: 'calzones', title_it: 'Calzoni', title_en: 'Calzones', subtitle_it: null, subtitle_en: null },
        { id: 8, key: 'scaccioni', title_it: 'Scaccioni', title_en: 'Scaccioni' },
        { id: 9, key: 'sandwiches', title_it: 'Panini', title_en: 'Sandwiches' },
        { id: 10, key: 'dishes', title_it: 'Piatti', title_en: 'Dishes' },
        { id: 11, key: 'friedFood', title_it: 'Friggitoria', title_en: 'Fried Food' },
        { id: 12, key: 'desserts', title_it: 'Dolci', title_en: 'Desserts' },
        { id: 14, key: 'beers', title_it: 'Birre', title_en: 'Beers' },
        { id: 15, key: 'wines', title_it: 'Vini', title_en: 'Wines', subtitle_it: 'Vini Rossi', subtitle_en: 'Red Wines' },
        { id: 16, key: 'WhiteWines', title_it: null, title_en: null, subtitle_it: 'Vini Bianchi', subtitle_en: 'White Wines' },
        { id: 17, key: 'SparklingWines', title_it: null, title_en: null, subtitle_it: 'Vini Frizzanti', subtitle_en: 'Sparkling Wines' },
        { id: 18, key: 'softDrinks', title_it: 'Soft Drinks', title_en: 'Soft Drinks' },
    ];

    // save product in specific categories
    const categorizedProducts = useMemo(() => {
        if (!Array.isArray(products)) return {}; // fallback protettivo

        const map = {};
        categories.forEach(({ id, key }) => {
            if (key) map[key] = products.filter(p => p.category_id === id);
        });
        return map;
    }, [products]);
    // console.log('questi sono i categorized product use memo', categorizedProducts)

    // create product categories array for rendendering
    const productCategories = categories.map(category => ({
        id: category.id,
        title: lang === 'it' ? category.title_it : category.title_en,
        subtitle: lang === 'it' ? category.subtitle_it : category.subtitle_en,
        products: categorizedProducts[category.key] ?? [],
        ref: category.key ? sections[category.key] : undefined
    }));
    console.log('questi sono i productCategories completi', productCategories)



    useEffect(() => {
        fetchProducts()
    }, []);
    // RENDER
    return (
        <>
            <MenuContext
                value={{
                    SlowScrollTo,
                    isMobile,
                    sections,
                    // categories,
                    allergens,
                    spicy,
                    vegetarian,
                    allergensDoc,
                    arrowDown,
                    filterIcon,
                    plate,
                    productCategories

                }}>

                {/* menuJumbo */}
                <section className={styles.menuJumbo}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem obcaecati nihil similique, iusto tempore, nisi temporibus pariatur vel ad maxime, accusamus non neque consectetur? Aliquam porro inventore sit fugit voluptatibus?
                    </p>
                </section>

                {/* menuSection */}
                <MenuSection styles={styles} />
            </MenuContext >
        </>
    )
}