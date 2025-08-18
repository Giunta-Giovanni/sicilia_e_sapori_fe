//create function for return true key in array
export function getActiveFilters(obj) {
    return Object.keys(obj).filter(key => obj[key] === true);
}

// Return true if the product should be disabled according to the selected filters
export function shouldDisableProduct(product, selectedFilters) {

    // save readed filters
    const filters = getActiveFilters(selectedFilters);

    // if product contains allergens, spicy or vegetarian matching
    const hasMatchingAllergen = product.allergens?.some(allergen => filters.includes(allergen));
    const isSpicyMatch = filters.includes("spicy") && !product.is_spicy;
    const isVegetarianMatch = filters.includes("vegetarian") && !product.is_vegetarian;

    // if product have one of the above match or more return filterMatch true(default false)
    return hasMatchingAllergen || isSpicyMatch || isVegetarianMatch;

}