// Look at the time of the day and tell whether it's time for breakfast, lunch or
// dinner and print it on the console

var today = new Date();
var current_time = today.getHours();


if (6 <= current_time && current_time < 12) {
    console.log ("It's time for Breakfast");
}
else if (12 <= current_time && current_time < 16) {
    console.log ("It's time for Lunch");
}
else if (16 <= current_time && current_time <= 20) {
    console.log("It's time for Dinner");
}
else {
    console.log("Sleep Time");
}

