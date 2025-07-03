// import Hooks
import { useMemo, useContext, useState } from "react";
import useLang from '../../hooks/useLang';
import useMenuSections from "../../hooks/useMenuSections";
import { useViewport } from "../../hooks/useViewport";
import { useScrollSpy } from "../../hooks/useActiveSection";
import GlobalContext from "../../context/GlobalContext";

// import Context
import MenuContext from "../../context/MenuContext";

// import Sections
import MenuSection from "../../sections/MenuSection"

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

    // save popUp state
    const [openProductId, setOpenProductId] = useState(null);

    // save Dinamic ViewPort
    const { isMobile, isTablet } = useViewport()
    // console.log('viewport Mobile? ' + isMobile);
    // console.log('viewport Tablet? ' + isTablet);

    const { products } = useContext(GlobalContext);

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

    // save offset for scrollSpy
    const offset = isTablet || isMobile ? 60 : 100;
    // save dinamic current section
    const currentSection = useScrollSpy(navCategories, offset);

    // RENDER
    return (
        <>
            <MenuContext
                value={{
                    sections,
                    productCategories,
                    navCategories,
                    currentSection,
                    allergens,
                    openProductId,
                    setOpenProductId
                }}>

                <>
                    {/* menuJumbo */}
                    <section className={styles.menuJumbo}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem obcaecati nihil similique, iusto tempore, nisi temporibus pariatur vel ad maxime, accusamus non neque consectetur? Aliquam porro inventore sit fugit voluptatibus?
                        </p>
                    </section>

                    {/* menuSection */}
                    <MenuSection styles={styles} />
                </>

            </MenuContext >
        </>
    )
}