// a function to convert celcius to fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// prompt the user for input
const celsiusInput = prompt("Enter temperature in celcius:");

// validate input
if (!isNaN(celsiusInput)) {
  
    // carry out conversion
    const fahrenheit = celsiusToFahrenheit(celsiusInput);

    //  output the result
    alert(`${celsiusInput}°C is equal to ${fahrenheit.toFixed(2)}°F`);
} else {
    alert('Please enter a valid number.');
}