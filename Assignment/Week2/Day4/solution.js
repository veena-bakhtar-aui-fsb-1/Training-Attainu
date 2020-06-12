// 1. Concatenate First and Last Name into One String. 
// Given two strings, firstName and lastName, return a single string in the format "last, first".

function concatName (str1, str2) {
    let name = str2 + ", " + str1;
    return name;
  }
  
  concatName ("Mary", "Jane");

// 2. Flip the Boolean

function flipBool (str) {
    if (str == "true" || str == 1) {
      return 0;
    }
    if (str == "false" || str == 0) {
      return 1;
    } 
  }
  
  flipBool (true);

// 3. Reverse an Array

function reverse (array) {
    var reverseArray = [];
    var length = array.length;
    for (var i = 0; i < length; i++) {
      reverseArray.push(array.pop());
    }
    return reverseArray;
  }
  
  reverse ([1, 2, 3, 4]);

// 4. Return the Last Element in an Array

function getLastItem (array) {
    return array.pop();
  }
  
  getLastItem(["cat", "dog", "duck"]);

// 5. Find the Index

function search (array, item) {
    var index = array.indexOf(item);
    return index;
  }
  
  search([1, 2, 3], 2)

// 6. Concatenating Two Integer Arrays

function concat (array1, array2) {
    var length = array2.length;
    for (var i = 0; i < length ; i++) {
      array1.push(array2.shift());
    }
    return array1;
  }
  
  concat([1, 3, 5], [2, 6, 8]);

// 7. Create a function that takes an array of two numbers and checks if the square root of the first number  // is equal to the cube root of the second number.

function checkSquareAndCube (array) {
    if (Math.sqrt(array[0]) == Math.cbrt(array[1])) {
      return true;
    } else {
      return false;
    }
  }
  
  checkSquareAndCube([9, 27]);

// 8. Multiply Every Array Item by Two

function getMultipliedArr (array) {
    for (var i = 0; i < array.length; i++) {
      array[i] = array[i] * 2;
    }
    return array;
  }
  
  getMultipliedArr ([2, 5, 3]);

// 9. Write a JavaScript program to display the reading status (i.e. display book name, author name and
// reading status) of the following books.

function getReadingstatus (library) {
    for (var i = 0; i < library.length; i++) {
      if (library[i].readingStatus == true) {
        console.log("Already read " + library[i].title + " by " + library[i].author);
      } else {
        console.log("You still need to read " + library[i].title + " by " + library[i].author);
      }
    }
  }
  
  var library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
  }, 
  {
    author: 'Walter Isaacson',
    title: 'Steve Jobs',
    readingStatus: true
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games', 
    readingStatus: false
  }
  ];
  
  getReadingstatus (library);

// 10. Write a JavaScript program to sort an array of JavaScript objects.

