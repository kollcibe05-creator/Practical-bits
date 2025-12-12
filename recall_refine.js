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

// console.log(dict_["spanish"])
// console.log(dict_["spanish"])
let keys = Object.keys(dict_)
// console.log(Object.values(dict_))
// let float = (parseFloat(15))
// console.log(float)


// for (let key in dict_){
//     console.log(key[i])
// }

// console.log(4**2)
// console.table(dict_)

// console.log(keys.length)

// for (let i = 0; i<=keys.length; i++){
//     console.log(i)
// }

// for (let obj in dict_){
//     console.log(dict_[obj])
// }
let i = 0

// while ( i<=keys.length){
//     console.log(i)
//     ++i
// }

// function totalInventory(array){
//     total = []
//     for (let item of array){
//         total.push(array.indexOf(item) + 1)
//     }
//     return total
// }

// console.log(totalInventory(keys))

// reduce = keys.reduce((reducer,item ) => reducer+= keys.indexOf(item), 11 )
// console.log(reduce)
// findIncludes = keys.includes("french")
// find = keys.instance(item => item == "french")
// console.log(find)
// console.log("find".repeat(4))
// console.log(Math.random())
const today = new Date(2024,6,9,12)
console.log(today.getMinutes())