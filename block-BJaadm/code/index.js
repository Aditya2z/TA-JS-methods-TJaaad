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

// Create an array peopleName and store value of name key from persons array
let peopelName = persons.map(ele => ele.name);

// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map(ele => ele.grade);

// Create an array peopleSex and store the value of sex key from persons array
let peopelSex = persons.map(ele => ele.sex);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'
console.log(peopelName.filter(ele => (ele.startsWith('J') || ele.startsWith('P')) ));

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
console.log(peopelName.filter(ele => (ele.startsWith('A') || ele.startsWith('C')) ));

// Log all the filtered male ('M') in persons array
console.log(persons.filter(ele => ele.sex.includes('M')));

// Log all the filtered female ('F') in persons array
console.log(persons.filter(ele => ele.sex.includes('F')));

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
console.log(persons.filter(ele => (ele.sex.includes('F')) && (ele.name.startsWith('J') || ele.name.startsWith('C')) ));

// Log all the even numbers from peopleGrade array
console.log(peopleGrade.filter(ele => ele % 2 === 0));

// Find the first name that starts with 'J' in persons array and log the object
console.log(persons.find(ele => ele.name.startsWith('J')));

// Find the first name that starts with 'P' in persons array and log the object
console.log(persons.find(ele => ele.name.startsWith('P')));

// Find the first name that starts with 'J', grade is greater than 10 and is a female
console.log(persons.find(ele => ele.name.startsWith('J') && ele.grade > 10 && ele.sex.includes('F')));

// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter(ele => ele.sex.includes('F'));

// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter(ele => ele.sex.includes('M'));

// Find the sum of all grades and store in gradeTotal
let gradeTotal = peopleGrade.reduce((acc, cv) => {
  acc += cv;
  return acc;
}, 0);

// Find the average grade
let averageGrade = gradeTotal / persons.length;

// Find the average grade of male
let averageGradeMale = gradeTotal / malePersons.length;

// Find the average grade of female
let averageGradeFemale = gradeTotal / femalePersons.length;

// Find the highest grade
let sortedGrades = [...peopleGrade].sort((a, b) => a-b);
console.log(`Highest Grade:`, persons.filter(ele => ele.grade === sortedGrades[sortedGrades.length - 1]) );

// Find the highest grade in male
let malePersonsGrade = malePersons.map(ele => ele.grade);
let sortedGradesMale = [...malePersonsGrade].sort((a, b) => a-b);
console.log(`Highest Grade in Male:`, persons.filter(ele => ele.grade === sortedGradesMale[sortedGradesMale.length - 1]) );

// Find the highest grade in female
let femalePersonsGrade = femalePersons.map(ele => ele.grade);
let sortedGradesFemale = [...femalePersonsGrade].sort((a, b) => a-b);
console.log(`Highest Grade in Female:`, persons.filter(ele => ele.grade === sortedGradesFemale[sortedGradesFemale.length - 1]) );

// Find the highest grade for people whose name starts with 'J' or 'P'
let personsJP = persons.filter(ele => (ele.name.startsWith('J') || ele.name.startsWith('P')));
let jpPersonsGrade = personsJP.map(ele => ele.grade);
let sortedGradesJP = [...jpPersonsGrade].sort((a, b) => a-b);
console.log(`Highest Grade in J or P:`, persons.filter(ele => ele.grade === sortedGradesJP[sortedGradesJP.length - 1]) );

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
peopleGrade.sort((a, b) => a-b);

// Sort the peopleGrade in descending order
peopleGrade.sort((a, b) => b -a);

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
let peopleGradeDescending = [...peopleGrade].sort((a, b) => b-a);

// Sort the array peopelName in ascending `ABCD..Za....z`
peopelName.sort();

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
let peopelNameAscending = peopelName.sort();