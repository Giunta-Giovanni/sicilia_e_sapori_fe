// import Hooks
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// import context
import GlobalContextProvider from "./context/GlobalContextProvider.jsx";

// import Layout
import DefaultLayout from "./layouts/DefaultLayout.jsx";

// import Pages
import AboutPage from "./pages/aboutPage/AboutPage.jsx";
import HomePage from "./pages/homePage/HomePage.jsx";
import MenuPage from "./pages/menuPage/MenuPage.jsx";
import NotfoundPage from "./pages/NotfoundPage.jsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.jsx";

// import Utilities
import ScrollToTop from "./components/technical/ScrollToTop.jsx";

export default function App() {

  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <GlobalContextProvider>

        <Routes>

          {/* it Routes */}
          <Route path="/it" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="menu" element={<MenuPage />} />
            <Route path="chi-siamo" element={<AboutPage />} />
            <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="*" element={<NotfoundPage />} />
          </Route>

          {/* en Routes */}
          <Route path="/en" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="menu" element={<MenuPage />} />
            <Route path="about-us" element={<AboutPage />} />
            <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="*" element={<NotfoundPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/it" />} />

        </Routes>
      </GlobalContextProvider >

    </BrowserRouter>

  )
};