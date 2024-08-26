let celciusToFahrenheit = (n) => (n * 9/5) + 32;
let FahrenheitToCelcius = (p) => (p - 32) * 5/9;
let formatConversion = (a, n, unit) => {
    let result = n(a); 
    return `${a}°${unit === 'C' ? 'C' : 'F'} is ${result.toFixed(2)}°${unit === 'C' ? 'F' : 'C'}`;
};
console.log(formatConversion(20, celciusToFahrenheit, "C")); // 20°C is 68.00°F
console.log(formatConversion(98.6, FahrenheitToCelcius, "F")); // 98.6°F is 37.00°C
console.log(formatConversion(0, celciusToFahrenheit, "C")); // 0°C is 32.00°F
console.log(formatConversion(32, FahrenheitToCelcius, "F")); // 32°F is 0.00°C
