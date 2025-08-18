// import Context
import MenuContextProvider from "../../context/MenuContextProvider";

// import Sections
import MenuSection from "../../sections/MenuSection"

// import Styles
import styles from "./MenuPage.module.css";

export default function MenuPage() {

    // RENDER
    return (
        <>
            <MenuContextProvider>
                {/* menuJumbo */}
                {/* <section className={styles.menuJumbo}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem obcaecati nihil similique, iusto tempore, nisi temporibus pariatur vel ad maxime, accusamus non neque consectetur? Aliquam porro inventore sit fugit voluptatibus?
                    </p>
                </section> */}

                {/* menuSection */}
                <MenuSection styles={styles} />
            </MenuContextProvider >
        </>
    )
}