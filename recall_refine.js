// const { cacheSignal } = require("react")
/*
to run js in the terminal ~     $ node <fileName>.js
*/
console.log("Hello again bitches!!")
console.log("Shiet hadi nilikuwa nimesahau ku run js kwa terminal,,,,,ni mbaya!!😂")

let greeting = () => "Bonga shit na niende na key ya choo."
console.log(greeting())

console.log(typeof("string"))

console.log("85".toString())     //changing to a string 


if (typeof("Whoa") === "string"){
    answer = "Yes"
}else{
    answer = "No"
}
console.log(answer)


list = [1,2,3,4,5,6,7,8,9,10, 21]

let multiplyByFour = list.map(n => n*4)

console.log(multiplyByFour)

console.log('collo'? "Many men" : "Oops")

function evaluate (num1, num2, foo){
    return foo(num1, num2)
}

function toBeCalled(num1, num2){
    return  num1 + num2
}

// console.log(evaluate(6,4,toBeCalled))

// let anonymous = list.forEach(function(number){
//     console.log(`number: ${number}`)
// })
// console.log(anonymous)
console.log(list[list.length-1])

