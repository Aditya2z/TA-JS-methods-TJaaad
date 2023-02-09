let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// Add a new element ('Papaya') into fruits array at end
fruits.push('Papaya');
console.log(fruits);

// Remove the last element from fruits array
fruits.pop();
console.log(`last element popped:`, fruits);

// Log the current length of fruits array
console.log(fruits.length);

// Remove the first element from fruits and log the value of fruits (use delete arr[0])
delete fruits[0];
console.log(`first element deleted:`, fruits);

// Log the element on index 0 and 1
console.log(`0th element:`, fruits[0], `1st Element:`, fruits[1]);

// If the element at 0 index is undefined and index 1 is 'Banana' shift all the values to one lower index (use shift method)
fruits.shift();
console.log(`All Elements shifted to left`, fruits);

// Add a new element to the start ('Guava') and shift the index of all other to one higher value
fruits.unshift(`Guava`);
console.log(`All Elements shifted to right`, fruits);

// Add a new element to the start ('Dragon Fruit') and shift the index of all other to one higher value
fruits.unshift(`Dragon Fruit`);
console.log(`All Elements shifted to right`, fruits);

// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'Guava' or not
console.log(`Dragon Fruit Exist At Index 0:`, fruits[0] === `Dragon Fruit`);
console.log(`Guava Exist At Index 0:`, fruits[1] === `Guava`);

// Update the value of index 1 to `Pears`
fruits.splice(1, 1, `Pears`);
console.log(`Value of Index 1 Updated to 'Pears':`, fruits);

// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to add element)
fruits.splice(1, 0, 'Kiwi');
fruits.splice(2, 0,`Lemon`);
console.log(`Added 'Kiwi' and 'Lemon' to the index 1 and 2':`, fruits);


// Remove (slice) all the element from index 5
console.log(`Sliced Elements:`, fruits.slice(5, 7));

// Create another array named moreFruits with values ['Berries', 'Melons']
let moreFruits = ['Berries', 'Melons'];

// Concat moreFruits into fruits array (re-assign so the value gets updated)
fruits = fruits.concat(moreFruits);

// Log the name of all fruit in console
console.log(fruits);

// Convert each fruit name to lowercase and log it
fruits.forEach(function(fruit) {
    console.log(fruit.toLowerCase());
  });

// Convert all fruits name into lowercase and store in new array named lowercaseFruits
let lowercaseFruits = fruits.map(function(fruit) {
    return (fruit.toLowerCase());
  });
console.log(`Converted all fruits name into lowercase:`, lowercaseFruits);
// Convert all fruits name into uppercase and store in new array named uppercaseFruits
let uppercaseFruits = fruits.map(function(fruit) {
    return (fruit.toUpperCase());
  });
console.log(`Converted all fruits name into Uppercase:`, uppercaseFruits);

let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them
numbers = numbers.flat(1);
console.log(numbers);

// Convert the numbersTwo array to one level element. Remove all sub-arrays to individual elements and log them.
// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)
numbersTwo = numbersTwo.flat(Infinity);
console.log(numbersTwo);

// Convert the numbersThree array to one level element.
// Remove all sub-arrays to individual elements, log them and update the value of numbersThree to the new flat array.
numbersThree = numbersThree.flat(Infinity);
console.log(`Converted the numbersThree 
array to one level element:`, numbersThree);

// Use forEach to log all the elements of numberThree array
numbersThree.forEach((number) => console.log(number));

// Create a new variable named doubleNumbers that store the numberThree array (each element should be multiplied by 2). Use map
let doubleNumbers = numbersThree.map((number) => number * 2);
console.log(`doubleNumbers that store the
numberThree multiplied by 2:`, doubleNumbers);


// Create a new variable named tripleNumbers that store the numberThree array (each element should be multiplied by 3). Use map
let tripleNumbers = numbersThree.map((number) => number * 3);
console.log(`tripleNumbers that store the
numberThree multiplied by 3:`, tripleNumbers);

// Create a new variable named halfNumbers that store the numberThree array (each element should be divided by 2). Use map
let halfNumbers = numbersThree.map((number) => number / 2);
console.log(`halfNumbers that store the
numberThree divided by 2:`, halfNumbers);

// Create a new variable named oddNumbers that store all the odd numbers in numbersThree array
let oddNumbers = numbersThree.filter((number) => number % 2 !== 0);
console.log(`oddNumbers that store all the
odd numbers in numbersThree array:`, oddNumbers);

// Create a new variable named evenNumbers that store all the even numbers in numbersThree array
let evenNumbers = numbersThree.filter((number) => number % 2 === 0);
console.log(`evenNumbers that store all the
even numbers in numbersThree array:`, evenNumbers);

// Find the index of 10 in numbersThree array
console.log(`the index of '10' in numbersThree array:`, numbersThree.indexOf(10));

// Reverse the values of numbersThree array
numbersThree.reverse();
console.log(`Reversed the values of numbersThree array:`, numbersThree);

// Reverse the values of numbersTwo array
numbersTwo.reverse();
console.log(`Reversed the values of numbersTwo array:`, numbersTwo);

// Join all fruits with '-', convert to uppercase and log it
console.log(uppercaseFruits.join(`-`));

// Join all fruits with '&', convert to lowercase and log it
console.log(lowercaseFruits.join(`&`));
