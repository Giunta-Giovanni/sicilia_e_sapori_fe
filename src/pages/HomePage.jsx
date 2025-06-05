import { Link } from "react-router-dom";
import ScrollToTopButton from "../components/visual/scrollToTopButton/ScrollToTopBtn";
export default function HomePage() {
    return (<>
        <h1>questa è l'Homepag
        </h1>

        <div style={{ height: '800px' }}>

        </div >

        <Link to={'/it/menu'}>menu</Link>

        <ScrollToTopButton />

    </>)
}