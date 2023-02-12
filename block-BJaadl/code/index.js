let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
let compareFunctionAscending = (a,b) => a - b;
 function findLongestWord(arr) {
  let longestWord = arr.reduce((acc, cv) => {
    if(cv.length > acc.length) acc = cv;
    return acc;
  })
  return longestWord;
};

// - Convert the above array "words" into an array of length of word instead of word.
let lengthArray = words.map(ele => ele.length);

// - Create a new array that only contains word with atleast one vowel.
let vowelArray = words.filter(ele => {
 if(ele.toLowerCase().includes(`a`) ||
    ele.toLowerCase().includes(`e`) ||
    ele.toLowerCase().includes(`i`) ||
    ele.toLowerCase().includes(`o`) ||
    ele.toLowerCase().includes(`u`)
 ) {
  return true;
} else {
    return false;
  }
}
  );

// - Find the index of the word "rhythm"
words.indexOf(`rhythm`);

// - Create a new array that contians words not starting with vowel.
let nonVowelArray =  words.filter(ele => {
  if(ele.toLowerCase().includes(`a`) ||
     ele.toLowerCase().includes(`e`) ||
     ele.toLowerCase().includes(`i`) ||
     ele.toLowerCase().includes(`o`) ||
     ele.toLowerCase().includes(`u`)
  ) {
   return false;
 } else {
     return true;
   }
 }
   );

// - Create a new array that contianse words not ending with vowel
let nonVowelEndingWords =  words.filter(ele => {
  if(ele.toLowerCase().endsWith(`a`) ||
     ele.toLowerCase().endsWith(`e`) ||
     ele.toLowerCase().endsWith(`i`) ||
     ele.toLowerCase().endsWith(`o`) ||
     ele.toLowerCase().endsWith(`u`)
  ) {
   return false;
 } else {
     return true;
   }
 }
   );

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
let sumOfArray = function (arr) {
  return arr.reduce((acc, cv) => {
    acc += cv;
    return acc; 
  }, 0)
}

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let multiplyArray = numbers.map(ele => ele * 3);

// - Create a new array that contains only even numbers
let evenNumbers = numbers.filter(ele => ele % 2 === 0);

// - Create  a new array that contains only odd numbers.
let oddNumbers = numbers.filter(ele => ele % 2 !== 0);

// - Create a new array that should have true for even number and false for odd numbers.
let trueFalseArray = numbers.map(ele => ele % 2 === 0);

// - Sort the above number in assending order.
let sortedNumbers = [...numbers].sort((a,b) => a-b);

// - Does sort mutate the original array?
//Yes it does.


// - Find the sum of the numbers in the array.
sumOfArray(numbers);

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
let averageOfArray = function (arr) {
  let sum = sumOfArray(arr);
  return sum / arr.length;
}

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
let averageWordLength = function (arr) {
  return averageOfArray(arr.map(ele => ele.length));
}
