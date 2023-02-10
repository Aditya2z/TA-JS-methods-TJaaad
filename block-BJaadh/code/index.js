// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));

// - Find the last index of `9` in numbers
numbers.lastIndexOf(9);

// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(' '));

// - Add two new words in the strings array "called" and "sentance"
strings.push("called", "sentance");

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(' '));

// - Remove the first word in the array (strings)
strings.shift();
console.log(strings);

// - Find all the words that contain 'is' use string method 'includes'
for(word of strings) {
  if(word.includes(`is`)) console.log(word);
}

// - Find all the words that contain 'is' use string method 'indexOf'
for(word of strings) {
  if(word.includes(`is`)) console.log(strings.indexOf(word));
}

// - Check if all the numbers in numbers array are divisible by three use array method (every)
let isDivisibleBy3 = (number) => number % 3 === 0;
console.log(numbers.every(isDivisibleBy3));

// -  Sort Array from smallest to largest
let compareFunction = (a,b) => a-b;
let sorted = [...numbers].sort(compareFunction);
console.log(sorted);

// - Remove the last word in strings
strings.pop();

// - Find largest number in numbers
sorted[sorted.length - 1];

// - Find longest string in strings
let compareFunctionString = (a,b) => b.length - a.length;
let sortedStrings = [...strings].sort(compareFunctionString);
console.log(`longest string in strings:`, sortedStrings[0]);

// - Find all the even numbers
console.log(numbers.filter((num) => num % 2 === 0));

// - Find all the odd numbers
console.log(numbers.filter((num) => num % 2 !== 0));

// - Place a new word at the start of the array use (unshift)
strings.unshift(`newWord`);
console.log(strings);

// - Make a subset of numbers array [18,9,7,11]
console.log(numbers.slice(3,7));

// - Make a subset of strings array ['a','collection']
console.log(strings.slice(2,4));

// - Replace 12 & 18 with 1221 and 1881
numbers.splice(1, 1, 1221);
numbers.splice(3,1, 1881);
console.log(numbers);

// - Replace words in strings array with the length of the word
var wordLengths = strings.map(function(word) {
  return word.length;
});
console.log(wordLengths);

// - Find the sum of the length of words using above question
var sum = wordLengths.reduce(function(total, length) {
  return total + length;
}, 0);
console.log(sum);

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];

// - Find all customers whose firstname starts with 'J'
var filteredCustomers = customers.filter(function(customer) {
  return customer.firstname[0] === 'J';
});
console.log(filteredCustomers);

// - Create new array with only first name
var firstNames = customers.map(function(customer) {
  return customer.firstname;
});
console.log(firstNames);


// - Create new array with all the full names (ex: "Joe Blogs")
var fullNames = customers.map(function(customer) {
  return customer.firstname + ' ' + customer.lastname;
});
console.log(fullNames);

// - Sort the array created above alphabetically
fullNames.sort();
console.log(fullNames);

// - Create a new array that contains only user who has at least one vowel in the firstname.
var filteredCustomersVowel = customers.filter(function(customer) {
  if (customer.firstname.includes(`a` || `e` || `i` || `o` || `u` || `A` || `E` || `I` || `O` || `U`)) {
    return customer.firstname;
  }
});
console.log(filteredCustomersVowel);
