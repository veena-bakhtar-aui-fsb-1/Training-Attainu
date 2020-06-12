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

