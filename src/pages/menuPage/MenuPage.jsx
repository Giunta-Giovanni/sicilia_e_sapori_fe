// import Hooks
import { useRef, useState, useEffect, useMemo } from "react";
import useLang from '../../hooks/useLang';

// import Context
import MenuContext from "../../context/MenuContext";

// import Axios
import axios from 'axios';

// import Sections
import MenuSection from "../../sections/MenuSection"

// import Components
import SlowScrollTo from "../../components/technical/SlowScrollTo";

// import Data
import { categories } from '../../data/categories';

// import Assets
import { allergens } from '../../assets/svg/allergens/allergens';
import spicy from '../../assets/svg/general/pepper.svg';
import vegetarian from '../../assets/svg/general/leaf.svg'
import allergensDoc from '../../assets/svg/general/doc.svg';
import arrowDown from '../../assets/svg/general/arrow-down.svg';
import filterIcon from '../../assets/svg/general/filter.svg';
import plate from '../../assets/svg/general/plate.svg';

// import Styles
import styles from "./MenuPage.module.css";



export default function MenuPage() {

    // save lang
    const lang = useLang();

    // Dinamic viewport State
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    // save dinamic viewport
    const setActualViewPort = (setViewPort, min, max) => {
        const ActualViewPort = window.innerWidth >= min && window.innerWidth <= max;
        setViewPort(ActualViewPort);
    }

    useEffect(() => {
        const handleResize = () => {
            // check window dimension
            console.log("check window dimension!", window.innerWidth);
            setActualViewPort(setIsMobile, 0, 567);
            setActualViewPort(setIsTablet, 568, 768);
        };

        // inizialize Dinamic view port
        handleResize();

        // listen windows change dimension and update every time dinamic viewport
        window.addEventListener('resize', handleResize);

        // clean state when view port change
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // console.log('viewport Mobile? ' + isMobile);
    // console.log('viewport Tablet? ' + isTablet);


    // products state 
    const [products, setProducts] = useState([]);

    // fetch products data
    const fetchProducts = () =>
        axios.get('http://127.0.0.1:8000/api/products')
            .then(res => setProducts(res.data.data))
            .catch(err => console.log(err))

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
    // console.log('questi sono i productCategories completi', productCategories)

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
                    isTablet,
                    sections,
                    productCategories,
                    allergens,
                    spicy,
                    vegetarian,
                    allergensDoc,
                    arrowDown,
                    filterIcon,
                    plate
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