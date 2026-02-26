//Asynchronous

console.log("A");
console.log("B");
console.log("C");
setTimeout(()=>{
    console.log("D");
    console.log("E");
    console.log("F");
},100);
    console.log("G");
    console.log("H");
    console.log("I");


// synchronous
console.log("A");
console.log("B");
console.log("C");
console.log("D");
console.log("E");
console.log("F");
console.log("G");
console.log("H");
console.log("I");
