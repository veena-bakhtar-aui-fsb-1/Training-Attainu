// Find out whether a given number or a string is palindrome(something that looks 
// the same reading straight or in reverse)

var str = "Madam";

var str_length = str.length;
var str_lowercase = str.toLowerCase();
var low_index = 0;
var high_index = str_length - 1;

while (low_index < high_index) {
    if (str_lowercase.charAt(low_index) != str_lowercase.charAt(high_index)) {
        console.log(str + " is not palindrome");
        return;
    }
    low_index++;
    high_index--;
}

console.log(str + " is palindrome");
