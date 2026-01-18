arr = [1,2,3,4,5,6,7]

// console.log(arr.fill(2))
// console.log(arr)
// arr.fill(2, 4)
// console.log(arr)

// console.log(arr.at(4))

console.log(arr.toString(""))

// console.log("hello".split())


let sent = "many men are crazy"

let list = sent.split(" ")

// let capitalizedWord = list.map(word => word.toUpperCase())
// console.log(capitalized)

function capitalizeWord(word) {
   return  word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase()
}


console.log(capitalizeWord("malik"))

// console.log("Word".slice(0,1))


let capitalizedWords = list.map(word => capitalizeWord(word))
console.log(capitalizedWords)

let CapitalizedSentence =  capitalizedWords.join(" ")

console.log(CapitalizedSentence)