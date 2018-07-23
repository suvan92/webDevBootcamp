var age = prompt("How old are you?");

if (age < 0) {
    console.log("Come back when you're out of the womb");
} else if (age < 18) {
    console.log("Come back when you're 18");
} else if (age < 21) {
    console.log("Enjoy the show, but no drinking");
} else {
    console.log("Have fun!");
}

if (age % 2 !== 0) {
    console.log("Your age is odd!");
}

if (age % Math.sqrt(age) === 0) {
    console.log("Your age is a perfect square!");
}