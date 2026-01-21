


// const username = {
//     name: "Collins",
//     title: "God's favorite.",
//     say: "God is my all. I am striving hard to meet his expectations for man.",
//     movie: "Peaky"
// }

// // console.log(username.name?.movie =="Peaky" ? "Yes": "No")

// function iterate() {
// for (let i = 0; i<Object.keys(username).length; i++){
//     console.log(Object.keys(username)[i])
// }
// }

// console.log(iterate())
// // console.log(Object.keys(username).length)




// function isPalindrome(word){
//     for (let i = 0; i<(word.length)/2; i++){
//         let j = word.length-1-i
//         if(word[j] === word[i]){
//             return true
//         }else{
//             return false
//         }
//     }

// }

// console.log(isPalindrome("racecar"))


function fibonacci () {
    list = [2,3]
    while (list.length<25){

        list.push(list[list.length-1] + list[list.length-2])
    }
    return list
}
console.log(fibonacci())

// numbers = [1,2, 3, 4]

// console.log(numbers[numbers.length-1])