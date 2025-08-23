// import hooks
import { useContext } from 'react';

// import context
import GlobalContext from '../../../context/GlobalContext';
// import Styles
import styles from './Loader.module.css';

// import Assets
import logoBrown from '../../../assets/svg/logo/logo-primary-brown.svg';
import logoWhite from '../../../assets/svg/logo/logo-primary-white.svg';


export default function Loader({ isReady }) {

    const {isDarkMode} = useContext(GlobalContext)
    // RENDERING
    return (

        // loader
        <div className={`${styles.loader} ${isReady ? styles.fadeOut : ''}`}>
            <img src={isDarkMode?logoWhite:logoBrown} alt="Loading..." />
        </div>
    )
}