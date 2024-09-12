let number = prompt("Please enter a number between 0 and 1 million:");

number = parseInt(number);

if (isNaN(number) || number < 0 || number > 1000000) {
    alert("Invalid number");
} else {
    let sum = (number * (number + 1)) / 2;
    // Display the result
    alert("Sum of numbers up to " + number + " is " + sum);
}