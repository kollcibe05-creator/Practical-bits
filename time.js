function time() {
   setTimeout(()=> console.log("Hello"), 8000) 
   while (!time){
    console.log("Loading...")
   }
}

// console.log(time())

let list = "12:40".split(':')
console.log(list)


let coupon = list.map(n => Number(n) * 60)
console.log(coupon)





