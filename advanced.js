


// // const username = {
// //     name: "Collins",
// //     title: "God's favorite.",
// //     say: "God is my all. I am striving hard to meet his expectations for man.",
// //     movie: "Peaky"
// // }


// // // console.log(username.name?.movie =="Peaky" ? "Yes": "No")

// // function iterate() {
// // for (let i = 0; i<Object.keys(username).length; i++){
// //     console.log(Object.keys(username)[i])
// // }
// // }

// // console.log(iterate())
// // // console.log(Object.keys(username).length)




// // function isPalindrome(word){
// //     for (let i = 0; i<(word.length)/2; i++){
// //         let j = word.length-1-i
// //         if(word[j] === word[i]){
// //             return true
// //         }else{
// //             return false
// //         }
// //     }

// // }
// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isPalindrome = function(s) {
//     for (let i = 0; i<(s.length)/2; i++){
//         let j = s.length-1-i
//         if (s[i] == s[j]){
//             return true
//         }else{
//             return false
//         }
//     }
// };

// console.log(isPalindrome("race"))


// // function fibonacci () {
// //     list = [2,3]
// //     while (list.length<25){

// //         list.push(list[list.length-1] + list[list.length-2])
// //     }
// //     return list
// // }
// // console.log(fibonacci())

// // // numbers = [1,2, 3, 4]

// // // console.log(numbers[numbers.length-1])

// function twoSum (list, target) {

//     for (let i = 0; i<list.length; i++){
//         complement = target - list[i]
//         if (list.includes(complement)){
//             return [i, list.indexOf(complement)]
//         }
//     }
// }
// console.log(twoSum([1,4,6,9], 7))

// console.log([1, 3, 5].includes(1))
const allowedRoles = ["admin", "user", "guest"]
const userRoles = ["admin", 'guest']

function authenticated(allowedRoles, userRoles) {
    const hasPermission = Array.isArray(allowedRoles)? allowedRoles.includes(userRoles): allowedRoles === allowedRoles
    return hasPermission 
}

console.log(authenticated(allowedRoles, userRoles))