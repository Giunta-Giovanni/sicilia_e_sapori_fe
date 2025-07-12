// import hooks
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// import context
import GlobalContext from '../../context/GlobalContext';

// import styles
import styles from './NotFoundPage.module.css';

export default function NotFoundPage() {
    const { lang } = useContext(GlobalContext);
    const navigate = useNavigate();

    const goHome = () => {
        navigate(lang === 'it' ? '/it/' : '/en/');
    };

    return (
        <div className={styles.wrapper}>
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className={styles.videoBox}
                // poster={test1}
                src="/video/forno_vuoto.mp4"
                onPlay={() => console.log('video is playing')}
                onError={() => console.log('video failed to load')}
            >
            </video>
            <div className={styles.textBox}>
                <h1>{lang === 'it' ? 'Non abbiamo trovato la tua pizza!' : 'We couldn’t find your pizza!'}</h1>
                <p>{lang === 'it' ? 'Torna alla home e riprova a cercarla.' : 'Go back home and try again.'}</p>
                <button className={styles.btnStyle} onClick={goHome}>
                    {lang === 'it' ? 'Torna alla Home' : 'Back to Home'}
                </button>
            </div>

        </div >
    );
}