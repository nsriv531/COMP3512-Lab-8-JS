// Use the existing csv variable from data.js without redeclaring it

// Convert comma-separated values into an array
let countries = csv.split(",");
console.log("Countries array:", countries);

// Convert array into a comma-delimited string
let countriesString = countries.join(",");
console.log("Comma-delimited string:", countriesString);

// Check if csv and countries are arrays
console.log("Is csv an array?", Array.isArray(csv));
console.log("Is countries an array?", Array.isArray(countries));

// Sort the countries array
countries.sort();
console.log("Sorted countries:", countries);

// Reverse the sort
countries.reverse();
console.log("Reversed countries:", countries);

// Remove the first element
countries.shift();
console.log("After removing the first element:", countries);

// Remove the last element
countries.pop();
console.log("After removing the last element:", countries);

// Add two new elements to the front of the array
countries.unshift("Australia", "Brazil");
console.log("After adding new elements to the front:", countries);

// Search for country named Germany
console.log("Does the array include 'Germany'?", countries.includes("Germany"));

// Find the index for country named Germany
console.log("Index of 'Germany':", countries.indexOf("Germany"));

// Make a new array by extracting from another array
let europeanCountries = countries.slice(1, 4);
console.log("European countries (sliced):", europeanCountries);

console.log('---------------------');

// Output all cities whose continent == "NA"
cities.forEach(city => {
    if (city.continent === "NA") {
        console.log("City in NA:", city.city);
    }
});

console.log('---------------------');

// Output gallery names whose country == "USA"
galleries.forEach(gallery => {
    if (gallery.location.country === "USA") {
        console.log("Gallery in USA:", gallery.name);
    }
});

console.log('---------------------');

// Convert JSON colorsAsString to JavaScript literal object
const colors = JSON.parse(colorsAsString);
console.log("Colors object:", colors);

// Output color name if luminance < 75
colors.forEach(color => {
    if (color.luminance < 75) {
        console.log("Color with luminance < 75:", color.name);
    }
});

console.log('---------------------');

// Nested loop to output color name and sum of RGB values
colors.forEach(color => {
    let rgbSum = color.rgb.reduce((sum, value) => sum + value, 0);
    console.log(`Color: ${color.name}, RGB sum: ${rgbSum}`);
});

console.log('---------------------');

// Output an unordered list of links to the galleries
document.write("<ul>");
galleries.forEach(gallery => {
    document.write(`<li><a href="${gallery.url}">${gallery.name}</a></li>`);
});
document.write("</ul>");

// Output an unordered list of color names with specific styles
document.write("<ul>");
colors.forEach(color => {
    let rgbColor = `rgb(${color.rgb.join(",")})`;
    let textColor = color.luminance < 75 ? "white" : "black";
    document.write(`<li style="background-color: ${rgbColor}; color: ${textColor};">${color.name}</li>`);
});
document.write("</ul>");
