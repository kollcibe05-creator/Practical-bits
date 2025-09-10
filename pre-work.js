const { kMaxLength } = require("buffer")
const { count } = require("console")
const { METHODS } = require("http")

console.log("Hello, World!")
let age = 1
console.log(age)
console.log(1+1)
console.log(typeof age)  // checking the data type
// thiis is a comment
/* this
is 
a c
comment
*/
// a comment
console.log(typeof ("I am a string"))
let name = "Collins"
console.log(name)
console.log(`My name is ${name}`)

let person = {
    name: "ZOOG",
    age: 14,
    "skin-color": "melanin"
}
console.log(person)
let womanTalking = '"Wait ," said Jo, "Don\'t go without me"'
console.log(womanTalking)

console.log(Boolean(NaN))

const truthyValue = 'This value is truthy'
const falseyValue = 0
console.log(!truthyValue)
console.log(!falseyValue)
console.log(!!truthyValue)
console.log(!!falseyValue)
console.log(!!!truthyValue)
console.log(!!!falseyValue)

console.log(true && false)

console.log(0 && false)
console.log(0 && true)
console.log(true && NaN)
console.log(true && !1)
console.log(!0 && "This is a string")
console.log(!0 && "")
console.log(!0 && !!"")
console.log(0 || false)
console.log(true || false)
console.log(true || 1)
console.log(!true || !false)



let likelyToRain = true
let clothChoice = likelyToRain ? "Umbrella" : "Shades"
console.log(clothChoice)

let win = false
let winOrLose = win ? "Definitely will win" : "Not a chance"
console.log(winOrLose)

let rainPercentage = 0.2
let willItRain = rainPercentage > 3.6 ? "yeA" : 'No'
console.log(willItRain)

let call = "Collins"
let probabilityOfRain = 0.1
let percentage = probabilityOfRain * 100
let temperature = 12

let WillItRain = probabilityOfRain > 0.3
let hot = temperature > 23

const message = `Hello, ${call}, with raining having a possibility percentage of ${percentage}% and the temperature having a stunning ${temperature}C it is advisable that you ${willItRain ? "Carry an Umbrella" : "Wear light clothing"} and ${hot ? "at least have a cap or shades" : "Wear heavily"}`
console.log(message)

//lets make it better by adding 
let rainAdvice = willItRain ? "Carry an Umbrella" : "Wear light clothing"
let tempAdvice = hot ? "at least have a cap or shades" : "Wear heavily"
let output = `Hello, ${call}, with raining having a possibility percentage of ${percentage}% and the temperature having a stunning ${temperature}C it is advisable that you ${rainAdvice} and ${tempAdvice}`
console.log(output)

//statements 
let loop = 5
if (loop < 15){
    loop = loop + 5
    console.log(loop)
}

let car = 5000
while (car >= 10000){
    car = car + 5000
}
console.log(car)

//if statements
let years = 15
if (years >= 18){
    greeting = "hello adult"
}else if (years >= 13){
    greeting = "hello teenager"
}else if (years < 13){
    greeting = "hello child"
}
console.log(greeting)

//do...while
do{
    console.log(`I will execute once`)
}while (false)   //executes at least once in most cases


/* comparing let x = 5 and x = 5*/
//let x = 5
let x = 5;
x = 10
console.log(x)

// ++ operator//
let a = 5
console.log(a++)
 console.log(++a)
  console.log(a)

let m = 1
console.log(m)
console.log(m++ + ++m)
console.log(m++ + ++m)


  // modulus% //
  y = 17%5;
  console.log(y)
 

  //repetition using while loops
// while (1) {
//    console.log("I love coding, coding coding coding!!") }


let p = 0;
    while (p<5) {
       console.log("I love coding, coding coding coding!!");
       p = p + 1;
    }

// functions
function insult() {
    console.log("Pipe down, bitch")
}
insult()
// parameters and arguments
function greet(name) {
    console.log(`Hello, ${name}!`)
}
greet("Collins")

function shout(exclamation, name) {
    console.log(`${exclamation}, ${name}`)
}
shout("Watch out!", "Martin")
shout("Oops!", "Sorry")

function add(x, y) {
     console.log(x + y)

}
add(10, 20)

function sum(x, y) {
    console.log(10 + 20) 
    return                            //return is considered the dead-end of a function
}
sum(10, 20)
  
function say(greeting, firstName) {
    return `${greeting}, ${firstName}`
    console.log("I am cold.")
    
}
say()
{
function divideNumbers(num1, num2) {
    return num1/num2    

}
console.log(divideNumbers(50, 8))
}




// creating a function that divides two numbers
{
function divideNumbers(num1, num2) {
     console.log(num1/num2)

}
divideNumbers(50, 8)
}
//high order function
function z() {
    let number1 = 10
    console.log(number1)
}
z()



// Arrays
let array = [
    "Lily",
    "Tulip",
    "Rose",
    "Lavender",
    "Daisy",
] 
console.log(array)
array.length // returns the length of the array
console.log(array.length)
console.log(array[0]) // accessing the first element of the array
console.log(array[1]) // accessing the second element of the array
console.log(array[2]) // accessing the third element of the array
console.log(array[3]) // accessing the fourth element of the array
console.log(array[4]) // accessing the fifth element of the array
console.log(array[array.length - 1]) // accessing the last element of the array
console.log(array[4].toUpperCase()) // converting the last element to uppercase

//editing or correcting an element in the array
array[4] = "Daisies"

//changing to upper and lower cases
array[0] = array[0].toUpperCase() // changing the first element to uppercase
// adding an element to the end of the array
array.push("Sunflower")
console.log(array)

// removing an element from the end of the array
array.pop()
console.log(array)
 //adding an element to the beginning of the array
 array.unshift('Violet')
 console.log(array) 

 //spread operator ~ it creates a copy of an array which is edited without affecting the original array
 let copyOfArray = [...array]
 console.log(copyOfArray)
//It is essential especially when you intend to add multiple elements in a list eg.
console.log([ "Orchid",...copyOfArray])
console.log(['Orchid', ...array])
console.log(copyOfArray)

//adding an element to the beginning
copyOfArray.unshift('Orchid')
console.log(copyOfArray)
 
//adding an element to the last element
copyOfArray.push('Iris')
console.log(copyOfArray)

//capitalising the letters
copyOfArray[0].toUpperCase
console.log(copyOfArray)

//shift method
copyOfArray.pop()
console.log(copyOfArray)

//pop method
copyOfArray.shift()
console.log(copyOfArray)
copyOfArray.slice()
console.log(copyOfArray)

//slice ~ removes elements nondestructively
    // the first index from where it starts and where it ends should be provided.
console.log(copyOfArray.slice(2,4))
console.log(copyOfArray)
console.log(copyOfArray.slice(0, copyOfArray.length - 1))  //or
console.log(copyOfArray.slice(1, -1))  //as slice recognizes such syntax

//Objects
// obj = {key : value};
object = {
    names: {
        firstName: "Collins",
        secondName: "Kibet",
    },
    Age: "19 yrs",
    Height: 5.8,
}
console.log(object)
/* Don't leave out the commas as you'll get errors
Keys should be unique as using multiple keys will result in the last value being retained and the others overwritten*/
//Accessing a value
                   //Dot notation
                   //Bracket notation
//                             Dot notation                          //
console.log(object.names)
console.log(object.names.firstName)

//                              Bracket notation                        //
console.log(object["names"])
console.log(object["names"]["firstName"])

//Accessing properties dynamically
console.log(object['names']['second' + 'Name'])

let identifier = 'names'
console.log(object[identifier])

//brackets can be used to change properties when making a new list

let pop = "Hozier"
let rnb =  'Beyonce'
let rap = 'Lil Yatchy'

let topArtists = {
    [pop]: 'The Weeknd',
    [rnb]: 'Chris Brown',
    [rap]: 'Kendrick Lamar'
}
console.log(topArtists)

//Object methods
                           //        1/ object.key()               //
let country = {
    countryName: "Kenya",
    Continent: "Africa",
    countryCapital: {
        called: "Nairobi",
        region: 'Nairobi',
        span: "46.5 km",
        
    },
    population: 5000000,

}
console.log(Object.keys(country))
console.log(Object.keys(country.countryCapital))

                           //    2/ Object.values()             //
console.log(Object.values(country))
console.log(Object.values(country.countryCapital))

                         //      3/ Adding object using dot or bracket notatio
country.langauge = "Sheng"
country["Ethnicity"] = "mixed"
country.countryCapital.culture = "mixed"

console.log(country)

const numbers = [1,2,4, 5, 7, 9]
console.log(numbers.filter(number => number % 2 === 0))


const objectArray =[{
   name: 'Fred',
   gender: 'Male',
   age: 23
},
{
   name: 'Emmanuel',
   gender: 'Male',
   age: 20 
},
{
   name: 'Valentine',
   gender: 'Female',
   age: 16
}]
 
//let objectArraySort = objectArray.sort((a, b, c) => {
    // const valueA = a[name];
    // const valueB = b[gender];
    // const valueC = c[age];

    // console.log(objectArraySort)


let firstName = "Collins"
console.log(firstName)
let mini =  `${firstName.toUpperCase()}, come here!`
console.log(mini)
   
//string shortening
                  //using backet notation//
let string = "K.dot"
console.log("k.dot"[1])
console.log(string[1])


                  //using .charAt() method
console.log(string.charAt(0))
console.log('K.dot'.charAt(0))


//.slice()
console.log(string.slice(0,1))
console.log('K.dot'.slice(0,1))

//if function
if (20>10) {
    return(console.log('Yeah bwuay!'))
}
{
let limit = 30

if (limit >=18 ) {

    isAdult = true 
    return;
}
console.log(isAdult)
}

//ternary expressions
{
    let age = 15
    let isAdult ;
    age >=18 ? (isAdult = true) : (isAdult = false)
    console.log(isAdult)
}
{
    const age = 26;
const isAdult = age >= 18 ? true : false;

console.log(isAdult);
}
{
    const age = 6;
const isAdult = age >= 18;

console.log(isAdult)
}


   function greet(marks){ 
    if (marks>79 ){
        return console.log("Grade:A" )     
    }
    else if (marks>=60) {
        return console.log("Grade:B")
    }
    else if (marks>=49) {
        return console.log("Grade:C")
    }
    else if (marks>=40) {
        return console.log( "Grade:D")
    }
    else if (marks<40) {
        return console.log( "Grade:E")
    }
}

    (grade(60))







