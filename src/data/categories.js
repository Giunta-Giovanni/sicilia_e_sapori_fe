// WARNING: If categories are added or modified, 
// also update the useMenuSection hook to keep references consistent!


// create categorie for next rendering
const categories = [
    { id: 1, key: 'gourmet', title_it: 'Pizze Gourmet', title_en: 'Gourmet Pizzas', takeout: false },
    { id: 2, key: 'baciate', title_it: 'Pizze Baciate', title_en: 'Baciate Pizzas', takeout: false },
    { id: 3, key: 'naples', title_it: 'Pizze da Napoli', title_en: 'Pizzas from Naples', takeout: false },
    { id: 4, key: 'redPizzas', title_it: 'Pizze Rosse', title_en: 'Red Pizzas', subtitle_it: null, subtitle_en: null, takeout: true },
    { id: 5, key: 'whitePizzas', title_it: 'Pizze Bianche', title_en: 'White Pizzas', subtitle_it: null, subtitle_en: null, takeout: true },
    { id: 6, key: 'seaPizzas', title_it: 'Pizze al Pesce', title_en: 'Sea Food Pizzas', subtitle_it: null, subtitle_en: null, takeout: true },
    { id: 19, key: 'buffaloPizzas', title_it: 'Pizze con Mozzarella di Bufala', title_en: 'Pizzas with Buffalo Cheese', subtitle_it: null, subtitle_en: null, takeout: true },
    { id: 7, key: 'calzones', title_it: 'Calzoni', title_en: 'Calzones', subtitle_it: null, subtitle_en: null, takeout: true },
    { id: 8, key: 'scaccioni', title_it: 'Scaccioni', title_en: 'Scaccioni', takeout: true },
    { id: 9, key: 'scrocchiaburger', title_it: 'Scrocchiapanini', title_en: 'Scrocchiaburger', takeout: true },
    { id: 10, key: 'dishes', title_it: 'Piatti', title_en: 'Dishes', takeout: false },
    { id: 11, key: 'friedAndSide', title_it: 'Friggitoria e contorni', title_en: 'Fried food and side dishes', takeout: true },
    { id: 12, key: 'desserts', title_it: 'Pizze Dolci', title_en: 'Sweet Pizzas', takeout: true },
    { id: 18, key: 'drinks', title_it: 'Drinks', title_en: 'Drinks', takeout: false },
    { id: 14, key: 'beers', title_it: 'Birre', title_en: 'Beers', takeout: true },
    { id: 15, key: 'wines', title_it: 'Vini', title_en: 'Wines', subtitle_it: 'White Wines', subtitle_en: 'White Wines', takeout: false },
    { id: 16, key: 'whiteWines', title_it: null, title_en: null, subtitle_it: 'Vini Frizzanti', subtitle_en: 'Sparkling Wines', takeout: false },
    { id: 17, key: 'sparklingWines', title_it: null, title_en: null, subtitle_it: 'Vini Rossi', subtitle_en: 'Red Wines', takeout: false },
    { id: 20, key: 'cocktails', title_it: 'Cocktails', title_en: 'Cocktails', subtitle_it: null, subtitle_en: null, takeout: false },
    { id: 13, key: 'bar', title_it: 'Bar', title_en: 'Bar', takeout: false },
];
export { categories };