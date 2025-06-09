import { useLocation } from "react-router-dom";

const useLang = () => {
    const location = useLocation();
    const lang = location.pathname.split("/")[1];
    return ["it", "en"].includes(lang) ? lang : "it";
}

export default useLang;