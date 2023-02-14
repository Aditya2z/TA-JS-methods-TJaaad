let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// NOTE: Use reduce method whereever you can to solve this exercise:

// Find the average grade
let averageGrade= (array) => 
{
    let sum = array.reduce((acc, cv) => {
      acc = acc + cv.grade;
      return acc;
    }, 0);
    return sum / array.length;
};
averageGrade(persons);

// Find the average grade of male
let malePersons = persons.filter(ele => ele.sex.includes('M'));
averageGrade(malePersons);

// Find the average grade of female
let femalePersons = persons.filter(ele => ele.sex.includes('F'));
averageGrade(femalePersons);

// Find the highest grade
let highestGrade = (array) => 
{
  let highestGradeOnly = array.reduce((acc, cv) => {
    if(cv.grade > acc) acc = cv.grade;
    return acc;
  }, 0)
  return persons.filter(ele => ele.grade === highestGradeOnly);
};
highestGrade(persons);

// Find the highest grade in male
highestGrade(malePersons);

// Find the highest grade in female
highestGrade(femalePersons);

// Find the highest grade for people whose name starts with 'J' or 'P'
let personsJP = persons.filter(ele => ele.name.startsWith(`J`) || ele.name.startsWith(`P`));
highestGrade(personsJP);

const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/

/*
//Function to remove duplicates from an array
let removeDuplicates = (array) => {
  for(let j = array.length -1; j >= 0; j--) {
    for(let i = j-1; i >=0; i--) {
      if(array[j] === array[i]) array.splice(j,1);
    }
  }
  return array;
};//can also be done by sorting and comparing only starting two elements

//Function to convert an array to object
let arrayToObject = (array) => {
  let obj = {};
  array = array.map(ele => ele.split(`:`));
  for(let i = 0; i < array.length; i++) {
    obj[array[i][0]] = +(array[i][1]);
  };
  return obj;
};
 

function fruitCounter(array) {
  let similarFruitArray = [];
  for(let i = 0; i < array.length; i++) {
    similarFruitArray.push(
      array.filter(ele => ele === array[i])
    );
  };
  let finalCount = similarFruitArray.map(ele => ele[0] + `:` + ele.length);
  removeDuplicates(finalCount);
  return arrayToObject(finalCount);
};
*/

let fruitCounter = (arr) => {
  return arr.reduce((acc, cv) => {
      if(acc[cv]) {
          acc[cv]++;
      } else {
          acc[cv] = 1;
      }
      return acc;
  }, {})
};

let fruitsObj = fruitCounter(fruitBasket);
/* 

Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// Using reduce flat data array
function flatArray(arr) {
  return arr.reduce((acc, cv) => {

    for(let i = 0; i < cv.length ; i++) {

      if(Array.isArray(cv[i])) {

        for(let j = 0; j < cv[i].length ; j++) {
          acc.push(cv[i][j]);
        }

      } else {
      acc.push(cv[i]);
      }

    }

    return acc;
  }, []);
};
flatArray(data);

const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

// Using reduce flat dataTwo array
flatArray(dataTwo);

/*

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/
let output;
let pipeline = [
  increment = (num) => num +1,
  double = (num) => num * 2,
  decrement = (num) => num - 1,
  decrement,
  double,
  triple =  (num) => num * 3,
  half =  (num) => Math.round(num / 2),
  increment,
];

function runPipeline(initialValue) {
  let result = initialValue;
  for (let i = 0; i < pipeline.length; i++) {
    result = pipeline[i](result);
    console.log(result);
  }
  return result;
}

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/

let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];

function runPipeline2(initialValue) {
  let result = initialValue;
  for (let i = 0; i < pipeline2.length; i++) {
    result = pipeline2[i](result);
    console.log(result);
  }
  return result;
}
// Find the output using pipeline2 the initial value if 8
