                                            // if function
{
function isCollins(name) {
    if (name === "Collins")  {
        return 'Hi Collins!'
    }
    else (name != "Collins") 
        return `Hi ${name}!`
    
}
console.log(isCollins("Collins"))   //else function
console.log(isCollins("Kevin"))
}
                                             //else if function
 {
 function isCollins(name) {
    if (name === "Collins")  {
        return  'Hi Collins!'
    }
    else if (typeof name === 'string') {
       return  `Hi ${name}!`
        
    }
    else  {
        return  "Not a human"
    }
 }
}    
console.log(isCollins("Collins"))
console.log(isCollins(9))

                                            //ternary function
{
 function isCollins(name) {
    name === "Collins" ? 'Hi Collins!' : `Hi ${name}!`
    return name;
    
 }
 console.log(isCollins('Margaret'))
}
 //to return either of the ternary function;
 {
  function isCollins(name) {
    return name === "Collins" ? 'Hi Collins!' : `Hi ${name}!`
 }
}
 console.log(isCollins('Margaret'))

                                                //Switch
function canDrink(age) {
    switch(age) {
        case age>18 : return "Enjoy your beer" ;
        case age==18 : return "Lucky you" ;
        default  : return "Nice try kiddo!" ;

    }
}
 // calling an inner and outer function  ~ the inner function must be called using return in the outer function 
console.log(canDrink(16))

 function wrapAdjective(symbol) {
   function result(note) {
        return `You are ${symbol}${note}${symbol}!`       
    }
    return result
 }
 console.log(wrapAdjective("*")('a handsome boy'))

 // Function expression
 const greet = function greet() {
    return 'Hello world'
 }
console.log(greet())

//Arrow function  ~ simplified function expression ~ lacks the function key-word
const wave =  () => {return "Hellow"}
console.log(wave())

const clothes = drip => drip    //no need for parenthesis if it is a single parameter.
console.log(clothes("inner"))  //no need for {} if it is on a single line
                              //no need for return as it is implicitly run only if it is only a single line or returning btwn two values.
                             //parentheses can be used instead of curly braces
//Limitation      ~ executing multiple parameters needs work ~ use of an array
const sickness = (nuke1, nuke2) => [nuke1, nuke2]
console.log(sickness('Typhoid', 'malaria'))

                                  //callback function
function fn (whack, cb) {
   return  function cb () {
     let whack = "Hi"
    console.log(`Hello',${whack}`)
   }
    
}
console.log(fn())

//loops
///////////////////////////////////////for loop ///////////////////////////////////////////////////////
const names = ['Collins', 'Mutunga', 'Emmanuel', 'Rakim' , 'Asap', 'Rocky', 'Minah', 'Ahmed', 'Salim']
const keyValue = {
    Title: "Seven Shades Of Dusk",
    Author: "Abel Mutua",
    Nationality: "Kenyan",
    Language: "English",
}
function loops() {
    for(let m = 0; m<6; m++) {
        console.log(m)        
    }
}
// console.log(loops())


function loopThroughNames (names) {
 for (let i= 0; i <names.length; i++) {              // 1.initialization    2.condition    3.final execution
    console.log(i)    //number of names/people
    console.log(names)                             //statement(s)
    console.log(names[i])
 }
}
// console.log(loopThroughNames(names))


                                        //  for of loop   //    ~works for anything iterable
function forOf(names) {
    for( let name of names) {         //variable declared.
        console.log(name)
    }
}
// console.log(forOf(names))

                                        //for in //     ~works for objects
function loopThroughObject(obj) {
    for (let key in obj){
        
        console.log (key)
    }
}
console.log(loopThroughObject(keyValue))

// iterating through strings ~ wonders of for loop
 for(const letter of "Cashcow") {
    console.log(letter)
 }
  
 //  array.prototype.indexOf() locating elements in an array ~ element and an optional start posititon 
 console.log(names.indexOf("Collins"))

 // array.prototype.find() ~ takes function as an argument and is used for complex searches
 function isOdd(element) {//(can include; index, array) {
    return (element%2 === 1)
 }
 console.log([1,4,,16,22,38].find(isOdd))



 /*const name = "Alice";
let greeting;

if (name === "Alice") {
  greeting = "Hello, Alice!";
} else if (name === "The White Rabbit") {
  greeting = "Don't be late, White Rabbit";
} else if (name === "The Mad Hatter") {
  greeting = "Welcome to the tea party, Mad Hatter";
} else if (name === "The Queen of Hearts") {
  greeting = "Please don't chop off my head!";
} else {
  greeting = "Whoooo are you?";
}

console.log(greeting);
*/
/*
let name = "Alice";
switch (name) {
  case "Alice":
    greeting = "Hello, Alice!";
    break;
  case "The White Rabbit":
    greeting = "Don't be late, White Rabbit";
    break;
  case "The Mad Hatter":
    greeting = "Welcome to the tea party, Mad Hatter";
    break;
  case "The Queen of Hearts":
    greeting = "Please don't chop off my head!";
    break;
  default:
    greeting = "Whoooo are you?";
}
console.log(greeting);
*/
/*
let line = " I \n am \n 1000 \n years \n Old";
console.log(line);
let number = 0;
do {
  console.log("I love coding \nHey look, I am coding!!");
  number++;
} while (number < 5);
*/

const { log } = require("console");
const { link } = require("fs");
const { totalmem } = require("os");
const { arrayBuffer } = require("stream/consumers");

let myArray = ["Collins", "Gregory", "Boniface"];
/*function makeUpperCase(array) {
  for (element of array) {
    console.log(element.toUpperCase());
  }
}
console.log(myArray[0].toUpperCase());
console.log(makeUpperCase(myArray));*/
/*
const oldArray = ["Zoog"];
let newArray = oldArray.concat(myArray);
console.log(newArray);
let strOne = "Hello";
let strTwo = "World";
let str = strOne + strTwo;
console.log(str);
*/
/*
let object = {
  name: "Collins",
};
object.age = 20;
object["height"] = "5.8\'";
console.log(object);
function Append(obj, key, value) {
  obj[key] = value;
}
Append(object, "Nationality", "Kenyan");
let newObject = { ...object };
Append(newObject, "Hobby", "coding");
console.log(newObject);
let newArray = [...myArray];
console.log(newArray);

console.log(Object.assign([], object, myArray));
// delete object.weight;
*/
/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
}
*/
//wrapGifts(gifts);

/*
let myList = ["Collins", "Gregory", "Boniface"];
function thankYouNotes(array, purpose) {
  for (let i = 0; i < array.length; i++)
    console.log(`Thank you ${array[i]} for the ${purpose} gift`);
  return array;
}
console.log(thankYouNotes(myList, "Graduation"));
*/
/*
const userInfo = {
  firstName: "Avi",
  lastName: "Flombaum",
  company: {
    name: "Flatbook Labs",
    jobTitle: "Developer Apprentice",
  },
  friends: [
    {
      firstName: "Nancy",
      lastName: "Burgess",
      company: {
        name: "Flatbook Labs",
        jobTitle: "Developer Apprentice",
      },
    },
    {
      firstName: "Corinna",
      lastName: "Jackson",
      company: {
        name: "Flatbook Labs",
        jobTitle: "Lead Developer",
      },
    },
  ],
  projects: [
    {
      title: "Flatbook",
      description:
        "The premier Flatiron School-based social network in the world.",
    },
    {
      title: "Scuber",
      description:
        "A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.",
    },
  ],
};
function getElements(object) {
  if (typeof object === "object") {
    for (let element in object) {
      getElements(object[element]);
    }
  } else {
    console.log(object);
  }
}
console.log(getElements(userInfo));
*/
// console.log(Math.PI);
// console.log(Math.E);
/*const fn = (a, b) => {
  return a + b;
};
console.log(fn(1, 2));
*/
//immediately invoked function expression
//IIFE
/*
console.log(
  (function (baseNumber) {
    return baseNumber + 3;
  })(6),
);
*/
/*
const family = {
  mother: {
    firstName: "Susan",
    lastName: "Doyle",
    age: 32,
  },
  father: {
    firstName: "John",
    lastName: "Doyle",
    age: 33,
  },
  daughter: {
    firstName: "Lily",
    lastName: "Doyle",
    age: 5,
  },
  son: {
    firstName: "Mike",
    lastName: "Doyle",
    age: 8,
  },
};
console.table(family);
*/
/*
const record = [
  { year: "2018", result: "N/A" },
  { year: "2017", result: "N/A" },
  { year: "2016", result: "N/A" },
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  { year: "2012", result: "N/A" },
  { year: "2011", result: "N/A" },
  { year: "2010", result: "N/A" },
  { year: "2009", result: "N/A" },
  { year: "2008", result: "N/A" },
  { year: "2007", result: "N/A" },
  { year: "2006", result: "N/A" },
  { year: "2005", result: "N/A" },
  { year: "2004", result: "N/A" },
  { year: "2003", result: "N/A" },
  { year: "2002", result: "N/A" },
  { year: "2001", result: "N/A" },
  { year: "2000", result: "N/A" },
  { year: "1999", result: "N/A" },
  { year: "1998", result: "W" },
  { year: "1997", result: "W" },
  { year: "1996", result: "N/A" },
  { year: "1995", result: "N/A" },
  { year: "1994", result: "N/A" },
  { year: "1993", result: "N/A" },
  { year: "1992", result: "N/A" },
  { year: "1991", result: "N/A" },
  { year: "1990", result: "N/A" },
  { year: "1989", result: "L" },
  { year: "1988", result: "N/A" },
  { year: "1987", result: "L" },
  { year: "1986", result: "L" },
  { year: "1985", result: "N/A" },
  { year: "1984", result: "N/A" },
  { year: "1983", result: "N/A" },
  { year: "1982", result: "N/A" },
  { year: "1981", result: "N/A" },
  { year: "1980", result: "N/A" },
  { year: "1979", result: "N/A" },
  { year: "1978", result: "N/A" },
  { year: "1977", result: "N/A" },
  { year: "1976", result: "L" },
  { year: "1975", result: "N/A" },
  { year: "1974", result: "N/A" },
  { year: "1973", result: "N/A" },
  { year: "1972", result: "N/A" },
  { year: "1971", result: "N/A" },
  { year: "1970", result: "N/A" },
  { year: "1969", result: "N/A" },
  { year: "1968", result: "N/A" },
  { year: "1967", result: "N/A" },
  { year: "1966", result: "N/A" },
  { year: "1965", result: "N/A" },
  { year: "1964", result: "N/A" },
  { year: "1963", result: "N/A" },
  { year: "1962", result: "N/A" },
  { year: "1961", result: "N/A" },
  { year: "1960", result: "N/A" },
];

function superBowlWin(array) {
  let result = array.find((element) => element.result === "W");
  return result ? result.year : undefined;
}
console.log(superBowlWin(record));
*/
/*
const users = [
  {
    firstName: "Niky",
    lastName: "Morgan",
    favoriteColor: "Blue",
    favoriteAnimal: "Jaguar",
  },
  {
    firstName: "Tracy",
    lastName: "Lum",
    favoriteColor: "Yellow",
    favoriteAnimal: "Penguin",
  },
  {
    firstName: "Josh",
    lastName: "Rowley",
    favoriteColor: "Blue",
    favoriteAnimal: "Penguin",
  },
  {
    firstName: "Kate",
    lastName: "Travers",
    favoriteColor: "Red",
    favoriteAnimal: "Jaguar",
  },
  {
    firstName: "Avidor",
    lastName: "Turkewitz",
    favoriteColor: "Blue",
    favoriteAnimal: "Penguin",
  },
  {
    firstName: "Drew",
    lastName: "Price",
    favoriteColor: "Yellow",
    favoriteAnimal: "Elephant",
  },
];
let filters = users.filter((user) => user.favoriteColor === "Blue");
console.log(filters);
*/
/*
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array.map((x) => x ** 2));
const oldAccounts = [
  { userID: 15, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 63, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 97, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 12, title: "Developer Apprentice", accessLevel: "user" },
  { userID: 44, title: "Developer Apprentice", accessLevel: "user" },
];
function map(accounts) {
  let newArray = [];
  for (accountant of accounts) {
    accountant.accessLevel = "ADMINISTRATOR";
    newArray.push(accountant);
  }
  return newArray;
}
console.log(map(oldAccounts));
let equipped = oldAccounts.map(function (user) {
  return Object.assign({}, user, { equipmet: "ipad" });
});
console.log(equipped);
*/
/*
const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];
function titleCase(string) {
  for (const sentence of string) {
    splitSentence = sentence.split();
    firstWordInSentence = splitSentence[0].charAt(0).toUpperCase();
    joinedSentence = splitSentence.join("");
    console.log(joinedSentence);
  }
}
console.log(titleCase(tutorials));
*/
/*
exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
exampleArray.pop();
console.log(exampleArray.__proto__);
console.log(exampleArray.__proto__.__proto__);
new Array(1, 16, 32);
console.log(newArray.__proto__);
*/
/*
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function listAll(a, b, ...array) {
  console.log(a, "", b);
}
listAll(array);
console.log(e);
*/
/*
function sum(number) {
  return ++number;
}
console.log(sum(5));
*/
/*
function outer(x) {
  function inner(y) {
    return x + y;
  }
  return inner;
}
const result = outer(5);
console.log(result(16));
*/
/*
function callAnother(foo) {
  console.log("I need foo");
  foo();
}
console.log(callAnother(foo));
function foo() {
  console.log("I heard my name somewhere");
}
*/
//IIFE
/*
(function (name) {
  console.log(`Hello ${name}`);
})("Collins");
*/
/*   //Recursion
function foo() {
  console.log("I am foo");
  foo();
}

function callHim(count) {
  for (let i = 0; i < count; i++) {     //a callback without a base condition is useless
    console.log("Yo zoog!");
  }
}
*/
/*
function fetchWater(count) {
  if (count === 0) {
    console.log("No more water");
    return;
  }
  console.log("I am fetching water");
  fetchWater(count - 1);
}

console.log(fetchWater(8));
*/
/*
let foo = function () {
  console.log("Execute");
};
console.log(foo());
*/
/*
let prices = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
let discountedPrices = prices.map((price) => price * 0.5);
console.log(discountedPrices);
*/
/*
let prices = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
console.log(prices.map((price) => price * 0.5));
*/
/*
pricesList = [100, 2000, 300, 400];
console.log(pricesList.reduce((total, currentP) => total + currentP, 100));
*/
// DATE OBJECT //
/*
const date = new Date();
console.log(date);
const year = date.getFullYear();
console.log(year);
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getDay());
console.log(date.getMonth());
*/
/*
const word = "Collins";

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
console.log(capitalize(word));
*/

/*const titleCased = () => {
  return tutorials
}*/
/*
const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function capitalizeAWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
function titleCased(tutorials) {
  return tutorials.map((sentence) => {
    const splitSentence = sentence.split(" ");
    let capitalizedSentenceWords = splitSentence.map((word) =>
      capitalizeAWord(word),
    );
    return capitalizedSentenceWords.join(" ");
  });
}

console.log(titleCased(tutorials));
*/
/*
const object = {
  name: "Collins",
  age: 20,
  height: "5.8\'",
  eat: function () {
    console.log("I am eating");
    console.log(
      `${this.name} is ${this.age} years old and ${this.height} tall `,
    );
  },
};
console.log(object.eat());

const person1 = {
  name: "Collins",
};
const person2 = {
  name: "Gregory",
};
const speak = function () {
  return `Being ${this.name} is not easy`;
};
person1.speak = speak;
person2.speak = speak;
console.log(person1.speak === person2.speak);

console.log(person1.speak());

function returnStuff() {
  return this;
}
console.log(returnStuff());
*/
/*
class Person {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }
}
const Collins = new Person("Collins", 20, "5.8\'");

console.log(Collins.name);
*/
/*
const people = [
  { name1: "Martin", name2: "Luther" },
  { name1: "Barrack", name2: "Obama" },
];
function intro(person, line) {
  return `${person.name1} ${person.name2}, ${line}`;
}
const phrase = "Yeah!";
//console.log(intro(people[0], phrase));

function context(line) {
  return `${this.name1} ${this.name2}, ${line}`;
}

console.log(context.call(people[0], phrase));

const collinsOnly = context.bind(people[0]);
console.log(collinsOnly(phrase));
console.log(collinsOnly("Yela!"));
console.log("racecar".slice(-2));
console.log("Collins".split("").reverse().join(""));
*/
/*
function reverse(word) {
  return word.split("").reverse().join("");
}
function correctSyntax(word) {
  const reversedWord = reverse(word);
  return reverse(word) === reversedWord;
}
console.log(correctSyntax("Class"));

function enhancedSyntax(word) {
  for (let i = 0; i < word.length / 2; i++) {
    let j = word.length - 1 - i;
    return word[i] === word[j];
  }
}
console.log(enhancedSyntax("racecat"));
*/
/*
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function average(array) {
  let total = 0;
  for (const number of array) total += number;
  return total / array.length;
}
console.log(average(array));
const arrayAccumulator =
  array.reduce((total, num) => total + num) / array.length;

console.log(arrayAccumulator);
*/
/*
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(array1.concat(array2));
let object1 = {
  name: "ZOOG",
  age: 20,
};
let object2 = {
  height: "5.8",
  weight: "60kg",
};
console.log(Object.assign({}, object2, object1));

let yy = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let reverse = yy.reverse();
console.log(reverse.join(""));
console.log(yy);
console.log(reverse.splice(2, 4));
let obj = { name: "Collins", age: 20 };
const newObj = { ...obj };
console.log(newObj);
newObj["Language"] = "JS";
console.log(newObj);
delete newObj.age;
*/
/*
console.log(
  (function (number) {
    return number + 2;
  })(6),
);
console.log(prompt("name?"));
*/
/*
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array.reduce((total, current) => total + current, 0));
*/
/*
function Iterator(number) {
  let result = Math.floor(number / 5);
  const str = "🍒";
  return str.repeat(result);
}

console.log(Iterator(15));
*/
/*
const array = ["Keep", "Remove", "Keep", "Remove", "Keep"];
copyOfArray = [...array];
console.log(removeEveryOther(array));
function removeEveryOther(arr) {
  //your code here

  return copyOfArray.splice(1, 1, array);
}
*/
/*
function filter(id) {
  const array = [
    {
      id: 1,
      name: "Displays 1",
    },
    {
      id: 1,
      name: "Displays 2",
    },
    {
      id: 1,
      name: "Displays 3",
    },
    {
      id: 4,
      name: "Displays 4",
    },
    {
      id: 5,
      name: "Displays 5",
    },
    {
      id: 6,
      name: "Displays 6",
    },
  ];
  return array.filter((item) => id !== item.id);
}

console.log(filter(1));
*/



/*
function isPalindrome(word) {
  for (let i = 0; i < word.length / 2; i++) {
    let j = word.length - 1 - i;

    return word[i] === word[j];
  }
}

console.log(isPalindrome("word"));
*/


