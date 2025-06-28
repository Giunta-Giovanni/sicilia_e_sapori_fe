// useMenuSections.js
import { useRef } from "react";

export default function useMenuSections() {
    return {
        doughs: useRef(null),
        gourmet: useRef(null),
        stuffed: useRef(null),
        naples: useRef(null),
        redPizzas: useRef(null),
        whitePizzas: useRef(null),
        seaPizzas: useRef(null),
        buffaloPizzas: useRef(null),
        calzones: useRef(null),
        scaccioni: useRef(null),
        scrocchiaburger: useRef(null),
        dishes: useRef(null),
        friedAndSide: useRef(null),
        desserts: useRef(null),
        bar: useRef(null),
        beers: useRef(null),
        wines: useRef(null),
        drinks: useRef(null),
        cocktails: useRef(null),
    };
}