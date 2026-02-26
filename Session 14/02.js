let timer = setInterval(function(){
    console.log("Timer After Every 2 Seconds..");
},2000);

setTimeout(function(){
    clearInterval(timer);
},10000);