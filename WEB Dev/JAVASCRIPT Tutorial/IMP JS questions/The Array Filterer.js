
// The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

let productNames = [
    "UltraClean Dish Soap",
    "SwiftTech Wireless Mouse",
    "PureGlow Face Serum",
    "EcoLite LED Bulb",
    "PowerBoost Protein Powder",
    "SmartTemp Thermostat",
    "AeroFit Running Shoes",
    "FreshBrew Coffee Maker",
    "QuickCharge Power Bank",
    "ZenVibe Yoga Mat",
    "FreshHarvest Organic Granola",
    "Luxora Satin Pillowcase",
    "SafeGuard Baby Monitor",
    "ChillMate Insulated Water Bottle",
    "ComfortNest Memory Foam Mattress"
];


function filterProducts(productNames) {
    let prompt_int = prompt("Enter the product :").toLowerCase();
    return productNames.filter((element) => { return element.toLowerCase().includes(prompt_int) })
}



let result = filterProducts(productNames)
console.log(result.toString());
