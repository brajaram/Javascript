// Lecture: variables
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 27;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

// Lecture: variables 2
/*
var name = 'John';
var age = 27;

// console.log(name + age);
// console.log(age + age);

var job, isMarried;

// console.log(job);

job = 'researcher';
isMarried = true;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is her married? ' + isMarried + '.');

age = 'twenty seven';
job = 'data scientist';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is her married? ' + isMarried + '.');

// var lastName = prompt('What is the last name?');
// console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + '. Is her married? ' + isMarried + '.');
*/

// Lecture: operators
/*
var now = 2017;
var birthYear = now - 27;

birthYear = now - 27 * 2;

console.log(birthYear);
*/

// Lecture: if/else statements
/*
var name = 'John';
var age = 26;
var isMarried = 'no';

if ( isMarried === 'yes'){
    console.log(name + ' is married.');
} else {
    console.log(name + ' will hopefully marry soon.');
}

isMarried = false;

if (isMarried){
    console.log('YES!');
} else {
    console.log('NO!');
}

if (23 == "23"){
    console.log("Number 23 against String 23 - type coercion happened");
}


if (23 !== "23"){
    console.log("Number 23 against String 23 - type coercion does not happen");
}
*/

// Lecture: boolean logic and switch
/*
var age = 25;

if (age < 20){
    console.log('John is a teenager');
} else if (age >= 20 && age < 30){
    console.log('John is a young man');
} else {
    console.log('John is a man');
}

var job = 'owner';

switch(job){
    case 'teacher':
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log('John drives a cab');
        break;
    case 'cop':
        console.log('John helps fight crime');
        break;
    default:
        console.log('John is a entrepreneur');
}
*/

// Lecture: Functions
/*
function calculateAge(yearOfBirth){
    var age = 2017 - yearOfBirth;
    return age;
}

console.log(calculateAge(1986));

function yearsUntilRetirement(name, yearOfBirth){
    var age = calculateAge(yearOfBirth);
    var retirement = 65 -  age;
    if (retirement >= 0){
        console.log(name + ' retires in ' + retirement + ' years.');
    } else{
        console.log(name + ' has already retired.');
    }
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Nans', 1985);
yearsUntilRetirement('Mike', 1948);
*/


// Lecture: Arrays
/*
 var names = ['John', 'Jane', 'Ann'];
 var years = new Array(1990, 1969, 1948);

 console.log(names);
 console.log(names[0] + ' was born on ' + years[0]);

 names[0] = 'Ben';
 console.log(names);

 var Ben = ['Ben', 'Smith', 1990, 'teacher', false];

 //adds an element at the end of the array
 Ben.push('Blue');
 console.log(Ben);

 //adds an elements at the begining of the array
 Ben.unshift('Mister');
 console.log(Ben);

 //removes last element from the array
 Ben.pop();
 console.log(Ben);

 //removes an elements at the begining of the array
 Ben.shift();
 console.log(Ben);

 //returns index of element passed
 console.log(Ben.indexOf('Smith'));

 if (Ben.indexOf('designer') === -1 ){
    console.log('Ben is NOT a designer.');
 }
*/

// Lecture: Objects

/*
var Ben = {
    name: 'Ben',
    lastName: 'Smith',
    yearOfBirth: 1990,
    isMarried: false,
    job: 'teacher',
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function(){
        return 2017 - this.yearOfBirth;
    }
 }

 console.log(Ben);
 console.log(Ben.family);
 console.log(Ben.calculateAge());

 Ben.lastName = 'Miller';
 Ben['job'] = 'programmer';
//  console.log(Ben);

 var Ann = new Object();
 Ann.name = 'Ann';
 Ann.lastName = 'Williams';
 Ann.job = 'dancer';
 Ann['isMarried'] = false;
 Ann['yearOfBirth'] = 2015;

//  console.log(Ann);
 */

 /*
var Ben = {
    name: 'Ben',
    lastName: 'Smith',
    yearOfBirth: 1990,
    isMarried: false,
    job: 'teacher',
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function(){
        this.age = 2017 - this.yearOfBirth;
    }
 }

 console.log(Ben);
 Ben.calculateAge();
 console.log(Ben);

*/

// Lecture: Loops

// for(var i = 0; i < 10; i++){
//     console.log(i);
// }

/*
var names = ['Nans', 'Ann', 'John', 'Mark', 'Mary', 'Bob'];

// for (var i = 0; i < names.length; i++){
//     console.log(names[i]);
// }

// while loops
var i = 0;
while(i < names.length){
    console.log(names[i]);
    i++;
}

*/

// coding challenge 
/*
var yearsOfBirth = [1957, 1947, 1990, 2000, 1996, 1984];


var printFullAge = function (yearsOfBirth){
    ages = [];
    for(var i = 0; i < yearsOfBirth.length; i++){
        age = 2017 - yearsOfBirth[i];
        if(age >= 18){
            ages[i] = true;
        } else {
            ages[i] = false;
        }
    }
    return ages;
}

console.log(printFullAge(yearsOfBirth));
*/