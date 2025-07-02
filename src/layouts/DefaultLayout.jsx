import { Outlet, useLocation } from "react-router-dom"
import Header from "../components/visual/header/Header";
import Footer from "../components/visual/footer/Footer";
import ScrollToTopButton from "../components/visual/scrollToTopButton/ScrollToTopBtn";
import Loader from "../components/visual/loader/Loader";
import GlobalContext from "../context/GlobalContext";
import { useContext } from "react";

export default function DefaultLayout() {

    const location = useLocation()

    const { isLoading, isReady } = useContext(GlobalContext);

    const aboutUs = location.pathname == "/it/about-us" || location.pathname == "/en/about-us"

    // RENDER
    return (
        <div id="pageWrapper">
            {isLoading ? (
                <Loader isLoading={isLoading} isReady={isReady} />
            ) : (
                <>
                    <Header />
                    <main className={aboutUs ? 'inverted' : ''}>
                        <Outlet />
                    </main >
                    <ScrollToTopButton />
                    <Footer />
                </>
            )}

        </div>

    )
}