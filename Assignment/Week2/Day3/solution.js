// 1. Create a function called "addition" that takes two numbers as arguments and return their sum.

function addition (num1,num2) {
    return num1+num2;
  }
  
  addition (3,2);

// 2. Write a function called "convert" that takes an integer minutes and converts it to seconds.

function convert (minutes) {
    return minutes * 60;
  }
  
  convert (5);

// 3. Create a function called "addition" that takes a number as an argument, increments the number by +1 and returns the result.

function addition (number) {
    return number + 1;
  }
  
  addition (-9);

// 4. Write a function called "triArea" that takes the base and height of a triangle and return its area.

function triArea(base, height) {
    var area = (base * height)/2;
    return area;
  }
  
  triArea(10,10);

// 5. Using the "&&" Operator

function and (a, b) {
    return a && b;
  }
  
  and(true,true);

// 6. Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

function nextEdge (side1, side2) {
    return (side1 + side2) - 1;
  }
  
  nextEdge(5, 7);

// 7. Return the Remainder from Two Numbers

function remainder(num1, num2) {
    return num1%num2;
  }
  
  remainder(11,3);

// 8. Football Points

function footballPoints (wins,draws,losses) {
    return wins*3+draws*1+losses*0;
  }
  
  footballPoints(5,1,2);

// 9. Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function lessThan100 (num1, num2) {
    if((num1 + num2 ) < 100) {
      return true;
    } else {
        return false;
    }
  }
  
  lessThan100 (22,50);

// 10. Are the Numbers Equal?

function isSameNum(num1, num2) {
    if(num1 === num2) {
      return true;
    } else {
      return false;
    }
  }
  
  isSameNum (7,10);

// 11. The Farm Problem

function animals (chickens, cows, pigs) {
    return (chickens * 2 + cows * 4 + pigs * 4);
  }
  
  animals (10, 4, 2);

// 12. Write a function that takes two integers (hours, minutes) and converts them into seconds.

function convert (hours, minutes) {
    var seconds = hours * 60 * 60 + minutes * 60;
  
    return seconds;
  }
  
  convert (2, 30);

// 13.  Create a function that takes a string and returns it as an integer.

function stringInt (string) {
    return parseInt(string);
  }
  
  stringInt ("8765");

// 14. Compare Strings by Count of Characters

function comp (string1, string2) {
    if(string1.length == string2.length) {
      return true;
    } else {
      return false;
    }
  }
  
  comp ("abc", "de");

// 15. Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

function dividesEvenly (a, b) {
    if ( a % b == 0 ) {
      return true;
    } else {
        return false;
    }
  }
  
  dividesEvenly (85, 7);
