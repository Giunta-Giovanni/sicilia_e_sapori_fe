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
        id: 5,
        key: 'gluten',
        icon: gluten,
        label: { it: 'Glutine', en: 'Gluten' }
    },
    {
        id: 11,
        key: 'peanuts',
        icon: peanuts,
        label: { it: 'Arachidi', en: 'Peanuts' }
    },
    {
        id: 10,
        key: 'nut',
        icon: nut,
        label: { it: 'Frutta a Guscio', en: 'Tree Nuts' }
    },
    {
        id: 7,
        key: 'milk',
        icon: milk,
        label: { it: 'Latte', en: 'Milk' }
    },
    {
        id: 3,
        key: 'egg',
        icon: egg,
        label: { it: 'Uova', en: 'Egg' }
    },
    {
        id: 4,
        key: 'fish',
        icon: fish,
        label: { it: 'Pesce', en: 'Fish' }
    },
    {
        id: 2,
        key: 'crustaceans',
        icon: crustaceans,
        label: { it: 'Crostacei', en: 'Crustaceans' }
    },
    {
        id: 8,
        key: 'molluscs',
        icon: molluscs,
        label: { it: 'Molluschi', en: 'Molluscs' }
    },
    {
        id: 9,
        key: 'mustard',
        icon: mustard,
        label: { it: 'Senape', en: 'Mustard' }
    },
    {
        id: 12,
        key: 'sesame',
        icon: sesame,
        label: { it: 'Sesamo', en: 'Sesame' }
    },
    {
        id: 13,
        key: 'sulphites',
        icon: sulphites,
        label: { it: 'Solfiti', en: 'Sulfites' }
    },
    {
        id: 1,
        key: 'celery',
        icon: celery,
        label: { it: 'Sedano', en: 'Celery' }
    },
    {
        id: 6,
        key: 'lupins',
        icon: lupins,
        label: { it: 'Lupini', en: 'Lupins' }
    }
];

// Lable use example
// const lang = 'it'; // o 'en'
// const label = allergenLabels[lang][allergenKey];