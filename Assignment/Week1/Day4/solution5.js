// Find the 10th number of a fibonacci series(research about this)

var number1 = 0;
var number2 = 1;

var new_number = 0;

for (var counter = 2; counter <= 10; counter++) {
    new_number = number1 + number2;
    number1 = number2;
    number2 = new_number;
}

console.log("10th number of the fibonacci series is: " + new_number);