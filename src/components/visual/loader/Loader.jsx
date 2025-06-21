// import Styles
import styles from './Loader.module.css';

// import Assets
import logo from '../../../assets/svg/logo/logo-primary-brown.svg';

export default function Loader({ isReady }) {

    // RENDERING
    return (

        // loader
        <div className={`${styles.loader} ${isReady ? styles.fadeOut : ''}`}>
            <img src={logo} alt="Loading..." />
        </div>
    )
}