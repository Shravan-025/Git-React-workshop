for(let i=0;i<10;i++){
    console.log("Hello World");
}

let arr = [10,20,30,40,50];
for (let num of arr){
    console.log(num);
}
let i=0;
while(i<10){
    console.log("KEm cho");
    i++;
}
let b=0;
do{
    console.log(b);
    b++;
}while(b<10);

let newarr = arr.map(neww=> neww-10)
console.log(newarr)

function change(i){
    return i*20;
}

let new2arr = arr.map(change)
console.log(new2arr)

let filterarr = arr.filter(num=> num>20)
console.log(filterarr)

let redarr = arr.reduce((sum,cur) => sum+=cur)
console.log(redarr)
