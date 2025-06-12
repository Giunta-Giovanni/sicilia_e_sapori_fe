import { Outlet, useLocation } from "react-router-dom"
import Header from "../components/visual/header/Header";
import Footer from "../components/visual/footer/Footer";
import ScrollToTopButton from "../components/visual/scrollToTopButton/ScrollToTopBtn";

export default function DefaultLayout() {

    const location = useLocation()

    console.log(location.pathname)
    // RENDER
    return (
        <div id="pageWrapper">
            <Header />
            <main className={
                location.pathname == "/it/about-us" || location.pathname == "/en/about-us"
                    ? 'inverted'
                    : ''
            }>
                <Outlet />
            </main >
            <ScrollToTopButton />

            {/* <Footer /> */}
        </div>

    )
}