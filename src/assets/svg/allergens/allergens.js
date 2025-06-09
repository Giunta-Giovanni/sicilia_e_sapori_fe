// import svg
import celery from './celery.svg';
import crustaceans from './crustaceans.svg';
import egg from './egg.svg';
import fish from './fish.svg';
import gluten from './gluten.svg';
import lupins from './lupins.svg';
import milk from './milk.svg';
import molluscs from './molluscs.svg';
import mustard from './mustard.svg';
import nut from './nut.svg';
import peanuts from './peanuts.svg';
import sesame from './sesame.svg';
import sulphites from './sulphites.svg';

// allergens
export const allergens = [
    {
        key: 'celery',
        icon: celery,
        label: { it: 'Sedano', en: 'Celery' }
    },
    {
        key: 'crustaceans',
        icon: crustaceans,
        label: { it: 'Crostacei', en: 'Crustaceans' }
    },
    {
        key: 'egg',
        icon: egg,
        label: { it: 'Uova', en: 'Egg' }
    },
    {
        key: 'fish',
        icon: fish,
        label: { it: 'Pesce', en: 'Fish' }
    },
    {
        key: 'gluten',
        icon: gluten,
        label: { it: 'Glutine', en: 'Gluten' }
    },
    {
        key: 'lupins',
        icon: lupins,
        label: { it: 'Lupini', en: 'Lupins' }
    },
    {
        key: 'milk',
        icon: milk,
        label: { it: 'Latte', en: 'Milk' }
    },
    {
        key: 'molluscs',
        icon: molluscs,
        label: { it: 'Molluschi', en: 'Molluscs' }
    },
    {
        key: 'mustard',
        icon: mustard,
        label: { it: 'Senape', en: 'Mustard' }
    },
    {
        key: 'nut',
        icon: nut,
        label: { it: 'Frutta a guscio', en: 'Tree nuts' }
    },
    {
        key: 'peanuts',
        icon: peanuts,
        label: { it: 'Arachidi', en: 'Peanuts' }
    },
    {
        key: 'sesame',
        icon: sesame,
        label: { it: 'Sesamo', en: 'Sesame' }
    },
    {
        key: 'sulphites',
        icon: sulphites,
        label: { it: 'Solfiti', en: 'Sulfites' }
    }
];

// Icons
export const allergenIcons = {
    celery,
    crustaceans,
    egg,
    fish,
    gluten,
    lupins,
    milk,
    molluscs,
    mustard,
    nut,
    peanuts,
    sesame,
    sulphites
}

// Labels
export const allergenLabels = {
    it: {
        celery: "Sedano",
        crustaceans: "Crostacei",
        egg: "Uova",
        fish: "Pesce",
        gluten: "Glutine",
        lupins: "Lupini",
        milk: "Latte",
        molluscs: "Molluschi",
        mustard: "Senape",
        nut: "Frutta a guscio",
        peanuts: "Arachidi",
        sesame: "sesamo",
        sulphites: "Solfiti"
    },
    en: {
        celery: "Celery",
        crustaceans: "Crustaceans",
        egg: "Egg",
        fish: "Fish",
        gluten: "Gluten",
        lupins: "Lupins",
        milk: "Milk",
        molluscs: "Molluscs",
        mustard: "Mustard",
        nut: "Tree nuts",
        peanuts: "Peanuts",
        sesame: "Sesame seeds",
        sulphites: "Sulfites"
    }
}


// Lable use example
// const lang = 'it'; // o 'en'
// const label = allergenLabels[lang][allergenKey];