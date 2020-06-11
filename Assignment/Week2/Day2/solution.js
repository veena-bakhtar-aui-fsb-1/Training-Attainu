// 1. Taking any five random names, find the person with the longest name

function longest_name(names) {
    var longest_length = 0;
    var longest_length_name;
    for(i = 0; i < names.length; i++) {
      if(names[i].length > longest_length) {
        longest_length = names[i].length;
        longest_length_name = names[i];
      }
    }
    return longest_length_name;
}
  
var names = ["Avinash", "Priyanka", "Manoj", "Veena", "Akhror"]
  
longest_name(names);

// 2. For the same five names, find the person with the most no. of vowels in his/her
// name and the person with the most no. of consonants in his/her name

function max_vowel_consonant(names) {
    var max_vowel = 0;
    var max_consonant = 0;
    var max_vowel_name;
    var max_consonant_name;
    var vowel_list = ['a','e','i','o','u'];
  
    for(i = 0; i < names.length; i++) {
      var vowel = 0;
      var consonant = 0;
      name = names[i].toLowerCase();
  
      for(j = 0; j < name.length; j++) {
        if(vowel_list.indexOf(name[j]) != -1) {
          vowel++;
        }
        else {
          consonant++;
        }
      }
  
      if(vowel > max_vowel) {
        max_vowel = vowel;
        max_vowel_name = name;
      }
  
      if(consonant > max_consonant) {
        max_consonant = consonant;
        max_consonant_name = name;
      }
  
    }
    console.log("Name with maximum vowels: " + max_vowel_name);
    console.log("Name with maximum consonants: " + max_consonant_name);
  }
  
  var names = ["Avinash", "Priyanka", "Manoj", "Veena", "Akhror"]
  
  max_vowel_consonant(names);

// 3. For a random set of names, say 10 names, find all the unique names

function find_unique_names(names) {
    var unique_names = [];
    for (var i = 0; i < names.length; i++) {
        if (unique_names.indexOf(names[i]) == -1) {
            unique_names.push(names[i])
        }
    }
    return unique_names
}

var names = ["Avinash", "Priyanka", "Manoj", "Veena", "Priyanka", "Akhror", "Vatsal", "Avinash"]

find_unique_names(names)