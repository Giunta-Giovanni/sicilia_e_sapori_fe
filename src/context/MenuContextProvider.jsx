// import Context
import MenuContext from './MenuContext.jsx';

// import Hooks
import { useMemo, useState, useContext } from "react";
import useLang from '../hooks/useLang';
import useMenuSections from "../hooks/useMenuSections";
import { useViewport } from "../hooks/useViewport";
import { useScrollSpy } from "../hooks/useActiveSection";
import GlobalContext from './GlobalContext.jsx';
// import Data
import { categories } from '../data/categories.js';

// import Assets
import { allergens } from '../assets/svg/allergens/allergens.js';

export default function MenuContextProvider({ children }) {

    // save lang
    const lang = useLang();

    // takeOut menu state
    const [takeOut, setTakeOut] = useState(false);

    // save sections
    const sections = useMenuSections();

    // save Dinamic ViewPort
    const { isMobile, isTablet } = useViewport()
    // console.log('viewport Mobile? ' + isMobile);
    // console.log('viewport Tablet? ' + isTablet);

    // Call all products
    const { products } = useContext(GlobalContext);

    // creates a "categorizedProducts" object from 'products', memorized and recalculated only when 'products' changes
    const categorizedProducts = useMemo(() => {
        // if 'products' is not an array (e.g., null or undefined), return an empty object as a safe fallback
        if (!Array.isArray(products)) return {};
        // initialize an object to store products grouped by category
        const map = {};

        // for each category, if it has a key (like "pizzas", "burgers", etc.)
        categories.forEach(({ id, key }) => {

            console.log('questa è la chiave', key)
            if (key) {
                // filter products that match the current category ID
                // and assign them to the corresponding key in the map
                map[key] = products.filter(p => p.category_id === id);
            }
        });

        // return the final categorized map
        return map;

    }, [products]); // recompute only when 'products' changes

    // console.log('questi sono i categorized product use memo', categorizedProducts)

    // create product categories array for rendendering (OUTPUT)
    const productCategories = categories.map(category => ({
        id: category.id,
        key: category.key,
        takeOut: category.takeOut,
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
        takeOut: true,
        title: lang === 'it' ? 'Impasti' : 'Doughts',
        subtitle: undefined,
        ref: sections.doughs ? sections.doughs : undefined
    }, ...productCategories];

    // save offset for scrollSpy
    const offset = isTablet || isMobile ? 60 : 100;

    // save dinamic current section
    const currentSection = useScrollSpy(navCategories, offset);
    // RENDER
    return (
        <MenuContext.Provider value={{
            // inserisci i value
            sections,
            productCategories,
            navCategories,
            currentSection,
            allergens,
            takeOut, setTakeOut
        }}>
            {children}
        </MenuContext.Provider>
    )
}