// console.log("Hello World");
// let namee = "Shravan"
// var age = 18;


// console.log(namee);
// console.log(age);
// console.table( {age, namee});

// let a=2;
// let b="2";

// console.log(a==b)
// console.log(a===b)

// let myname = "Jack Ma"

// console.log(myname[0])
// console.log(myname.slice(0,3))
// console.log(myname.toUpperCase())
// console.log(myname.length)
// console.log(myname.replace("c","s"))
// console.log(myname.indexOf("c"))

// let newarr = [1,2,3,5,8,13,"game"];
// newarr.push(22)
// console.log(newarr)
// console.log(newarr.pop())

// console.log(newarr)

// let c = "David"
// let addnumber = function(a,b){
//     let c = "Jack"
//     return a+b;
// }
// console.log(addnumber(2,987));
// console.log(c)
// multiplynum = (a,b) => {
//     let d =a*b
//     return d;
// }
// console.log(multiplynum(2,5))

let obj =  {
    isname : "David",
    age : 24.5,
    kam : "vegetable-vendor",
    fun : () => {
        console.log("Kem cho")
    }
}

let obj1 = {
    isname : "jack",
    age : 69.5,
    kam : "berozgar"
}
console.log(obj.fun())

let arr = [ obj,obj1]

console.log(arr);

let {isname} = obj;
console.log(isname)

let {age} = obj1
console.log(age)

console.log(obj1);
console.log(obj.kam)
