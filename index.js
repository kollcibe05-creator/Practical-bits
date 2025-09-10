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


function divideNumbers(num1, num2) {
     console.log(num1/num2)

}
divideNumbers(50, 8)
