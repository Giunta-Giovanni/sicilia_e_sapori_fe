import styles from './AboutPage.module.css';
import { icons } from '../../assets/svg/general/icons';
import GlobalContext from '../../context/GlobalContext';
import { useContext } from 'react';

export default function AboutPage() {

    const { numb1, numb2 } = icons;
    const { lang } = useContext(GlobalContext)

    return (<>
        <section class={styles.jumbotronHeader}>

            <div class={styles.sx}>
                <img src={numb1} alt="" />
            </div>

            <div class={styles.center}>
                <h2>{lang === 'it' ? 'Tecnica e Gusto' : 'Craftmanship and Flavour'}</h2>
                <h3>{lang === 'it' ? 'Campionati mondiali di Pizza' : 'World Pizza Championships'}</h3>
            </div>

            <div class={styles.dx}>
                <img src={numb2} alt="" />
            </div>

        </section>
    </>)
}