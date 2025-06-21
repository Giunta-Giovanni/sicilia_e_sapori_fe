// import Hooks
import { useState, useEffect, useMemo } from "react";
import useLang from '../../hooks/useLang';
import useMenuSections from "../../hooks/useMenuSections";
import { useViewport } from "../../hooks/useViewport";
import { useScrollSpy } from "../../hooks/useActiveSection";
import { handleClick } from "../../utils/ui";

// import Context
import MenuContext from "../../context/MenuContext";

// import Axios
import axios from 'axios';

// import Sections
import MenuSection from "../../sections/MenuSection"

// import Components
import SlowScrollTo from "../../components/technical/SlowScrollTo";
import Loader from "../../components/visual/loader/Loader";

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

    // save Dinamic ViewPort
    const { isMobile, isTablet } = useViewport()
    // console.log('viewport Mobile? ' + isMobile);
    // console.log('viewport Tablet? ' + isTablet);

    // loader state
    const [isLoading, setIsLoading] = useState(true);
    const [isReady, setIsReady] = useState(false);

    // products state 
    const [products, setProducts] = useState([]);

    // fetch products data
    const fetchProducts = () => {
        // start Loader
        setIsLoading(true);

        axios.get('http://127.0.0.1:8000/api/products')
            .then(res => {
                setProducts(res.data.data);
            })
            .catch(err => console.log(err))
            .finally(() => {
                setTimeout(() => { setIsLoading(false) }, 500);
                setIsReady(true);
            });
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
        key: category.key,
        title: lang === 'it' ? category.title_it : category.title_en,
        subtitle: lang === 'it' ? category.subtitle_it : category.subtitle_en,
        products: categorizedProducts[category.key] ?? [],
        ref: category.key ? sections[category.key] : undefined
    }));
    // console.log('questi sono i productCategories completi', productCategories)

    // add dought categories
    const navCategories = [{
        id: 0,
        key: 'doughts',
        title: lang === 'it' ? 'Impasti' : 'Doughts',
        subtitle: undefined,
        ref: sections.doughs ? sections.doughs : undefined
    }, ...productCategories];

    useEffect(() => {
        fetchProducts();
        setIsReady(false);
    }, []);

    useEffect(() => {
        if (isLoading) {
            console.log('sta caricando la pagina');
        } else {
            console.log('la pagina ha completato il caricamento')
        }
    }, [isLoading]);

    // save offset for scrollSpy
    const offset = isTablet || isMobile ? 60 : 100;
    // save dinamic current section
    const currentSection = useScrollSpy(navCategories, offset);

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

                {isLoading ? (
                    <Loader isLoading={isLoading} isReady={isReady} />
                ) : (
                    <>
                        {/* menuJumbo */}
                        < section className={styles.menuJumbo}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem obcaecati nihil similique, iusto tempore, nisi temporibus pariatur vel ad maxime, accusamus non neque consectetur? Aliquam porro inventore sit fugit voluptatibus?
                            </p>
                        </section>

                        {/* menuSection */}
                        <MenuSection styles={styles} />
                    </>

                )}


            </MenuContext >
        </>
    )
}