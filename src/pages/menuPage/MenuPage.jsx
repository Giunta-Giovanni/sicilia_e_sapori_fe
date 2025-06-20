// import Hooks
import { useRef, useState, useEffect, useMemo } from "react";
import useLang from '../../hooks/useLang';
import useMenuSections from "../../hooks/useMenuSections";

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

// import Styles
import styles from "./MenuPage.module.css";

export default function MenuPage() {
    // save lang
    const lang = useLang();

    // save sections
    const sections = useMenuSections();

    // Dinamic viewport State
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    // products state 
    const [products, setProducts] = useState([]);

    // dinamic section in scroll
    const [currentSection, setCurrentSection] = useState('');

    // save dinamic viewport
    const setActualViewPort = (setViewPort, min, max) => {
        const ActualViewPort = window.innerWidth >= min && window.innerWidth <= max;
        setViewPort(ActualViewPort);
    }

    // dinamic save dinamic vieport
    useEffect(() => {
        const handleResize = () => {
            // check window dimension
            // console.log("check window dimension!", window.innerWidth);
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



    // fetch products data
    const fetchProducts = () =>
        axios.get('http://127.0.0.1:8000/api/products')
            .then(res => setProducts(res.data.data))
            .catch(err => console.log(err))

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
        key: category.key,
        title: lang === 'it' ? category.title_it : category.title_en,
        subtitle: lang === 'it' ? category.subtitle_it : category.subtitle_en,
        products: categorizedProducts[category.key] ?? [],
        ref: category.key ? sections[category.key] : undefined
    }));
    // console.log('questi sono i productCategories completi', productCategories)

    const navCategories = [{
        id: 0,
        key: 'doughts',
        title: lang === 'it' ? 'Impasti' : 'Doughts',
        subtitle: undefined,
        ref: sections.doughs ? sections.doughs : undefined
    }, ...productCategories];

    // Change state to Toggle menu
    function handleClick(state, setState, setHasInteracted = null) {
        // save user first interaction (optional)
        if (setHasInteracted) setHasInteracted(true);
        // change state
        setState(!state);
    }


    useEffect(() => {
        const handleScroll = () => {
            // save dinamic scroll positions
            const scrollPosition = window.scrollY + (isTablet || isMobile ? 60 : 100);

            // save temporary current
            let current = '';

            // loop through navCategories from last to first
            for (let i = navCategories.length - 1; i >= 0; i--) {
                const category = navCategories[i];
                const ref = category.ref;

                // skip if ref is missing or not yet attached
                if (!ref?.current) continue;

                // get top offset of the section
                const offSetTop = ref.current.offsetTop;

                // if scroll is below the section's top, it's the current one
                if (scrollPosition >= offSetTop) {
                    // store the active section key
                    current = category.key;
                    // exit loop once found
                    break;
                }
            }

            setCurrentSection(current);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [navCategories, isMobile, isTablet]);


    useEffect(() => {
        fetchProducts();
    }, []);

    // RENDER
    return (
        <>
            <MenuContext
                value={{
                    SlowScrollTo,
                    handleClick,
                    isMobile,
                    isTablet,
                    sections,
                    productCategories,
                    navCategories,
                    allergens,
                    currentSection,
                    lang
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