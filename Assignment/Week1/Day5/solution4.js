// In your full name, find the number of vowel letters and consonant letters and
// print on the console

var name = "Veena Bakhtar";
var vowels = 0;
var consonents = 0;

var name_lowercase = name.toLowerCase();

for (var i=0; i < name_lowercase.length; i++) {
    char = name_lowercase.charAt(i);

    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
        vowels = vowels + 1;
    }
    else if(char > 'a' && char <= 'z') {
        consonents = consonents + 1;
    }
}

console.log("Vowels = " + vowels);
console.log("Consonents = " + consonents);