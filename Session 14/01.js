let timer = setTimeout(function(){
    console.log("Hello After 2 Seconds");
},2000);

console.log(timer);
clearTimeout(timer);