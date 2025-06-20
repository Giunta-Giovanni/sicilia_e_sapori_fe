// useMenuSections.js
import { useRef } from "react";

export default function useMenuSections() {
    return {
        doughs: useRef(null),
        gourmet: useRef(null),
        stuffed: useRef(null),
        naples: useRef(null),
        pizzas: useRef(null),
        calzones: useRef(null),
        scaccioni: useRef(null),
        sandwiches: useRef(null),
        dishes: useRef(null),
        friedFood: useRef(null),
        desserts: useRef(null),
        beers: useRef(null),
        wines: useRef(null),
        softDrinks: useRef(null),
    };
}