// import hooks
import useLang from '../../../hooks/useLang';

// import context
import { use, useContext, useEffect } from 'react';
import axios from 'axios';
import GlobalContext from '../../../context/GlobalContext';
import MenuContext from '../../../context/MenuContext';

// import Style
import styles from './ProductPopUp.module.css'

export default function AllergenPopUp({ isAllergenOpen, setIsAllergenOpen }) {
    const [product, setProduct] = useState([])

    const fetchData = () => {
        axios.get(`${import.meta.env.VITE_API_URL}/products/1`)
            .then(res => {
                setProducts(res.data.data);
            })
            .catch(err => console.log(err))
            .finally(() => {
                setTimeout(() => { setIsLoading(false) }, 500);
                setIsReady(true);
            });
    }

    useEffect(() => {
        fetchData();
    }, product)

    useEffect(() => {
        console.log(product);
    }, product)





    // context
    const { handleClick } = useContext(GlobalContext)
    const { allergens } = useContext(MenuContext);

    // save lang
    const lang = useLang()

    // RENDER
    return (
        <>
            {/* popUpWrapper */}
            <div className={styles.popUpWrapper}>
                {/* popUp */}
                <div className={styles.popUp}>
                    {/* header */}
                    <div className={styles.header}>
                        {/* title */}
                        <h5 className={styles.title}>
                            {lang === 'it' ? 'Pizza Margherita' : 'margherita Pizzas'}
                        </h5>

                        {/* closeButton */}
                        <button
                            className={styles.closeButton}
                            onClick={() => handleClick(isAllergenOpen, setIsAllergenOpen)}
                        >
                        </button>
                    </div>

                    <h6>{lang === 'it' ? 'LEGENDA' : 'LEGEND'}</h6>


                    {/* regulation */}
                    <p className={styles.regulation}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, error? Quas commodi similique aperiam consequuntur odio? Veritatis nesciunt rem provident saepe, quibusdam vitae. Sed vitae est repudiandae rerum beatae doloribus?
                    </p>
                </div>
            </div>
        </>
    );
}