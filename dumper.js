// const { cacheSignal } = require("react")
/*
to run js in the terminal ~     $ node <fileName>.js
*/
dict_ = { 
 english: "Welcome",
 czech: "Vitejte",
 danish: "Velkomst",
 dutch: "Welkom",
 estonian: "Tere tulemast",
 finnish: "Tervetuloa",
 flemish: "Welgekomen",
 french: "Bienvenue",
 german: "Willkommen",
 irish: "Failte",
 italian: "Benvenuto",
 latvian: "Gaidits",
 lithuanian: "Laukiamas",
 polish: "Witamy",
 spanish: "Bienvenido",
 swedish: "Valkommen",
 welsh: "Croeso",
}
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

list_ = [0, 1,2,3,4,5,6,7,8,9,10, 21]
arrTwo = [11,23,57]

let joint = list_.concat(arrTwo) 

// list_.pop()
// let obj  = Object.assign({}, joint)
// console.log(list_)
// console.log(joint)
// console.log(obj)

// console.log(list_.slice(0, 3))
// console.log(list_)
console.log(list_.indexOf(21))``

