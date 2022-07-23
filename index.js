// Write your code in this file!

// 1. Declaring variable currentUser and storing a string into it.
const currentUser = 'Bruce Wayne';

// 2. Defining another variable and storing another variable in it.
// ... Since our currentUser variable contains a string, we can concatenate it to the end of 'Welcome to Flatbook, ' to dynamically create a new string based on whatever value currentUser contains at a given moment:
// => const welcomeMessage00 = 'Welcome to Flatbook, ' + currentUser;

// 3. Interpolation...
// const myString = 'template literal';
// const myNumber = 10;
// const myBoolean = false;
// const paragraph = `Saying that interpolation with ${myString}s is better than concatenation ${90 + myNumber}% of the time is simply ${myBoolean}. But it is pretty cool!

// Beware that new lines inside of a ${myString} will be preserved as new lines in the resulting ${typeof myString}!`;

// ... Let's rewrite our welcome message to use template literals...
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// 4. All strings in JavaScript have access to the same set of default methods, which are common operations like changing a string and returning a new version, searching through a string for specific characters and returning the match, and so on. For example, we will use ".toUpperCase()" on a string to make the entire string uppercase of lowercase.
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// 5. shortGreeting
const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`;
