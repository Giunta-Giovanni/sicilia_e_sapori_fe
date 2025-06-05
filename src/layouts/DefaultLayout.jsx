import { Outlet } from "react-router-dom"
import Header from "../components/visual/header/Header";
import Footer from "../components/visual/footer/Footer";

export default function DefaultLayout() {
    return (
        <>
            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    )
}