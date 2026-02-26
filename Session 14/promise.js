
let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve("Data Loaded");
   },2000);
    setTimeout(()=>{
        reject("Data Failed");
    },2000);
});

promise.then(res=>{
        console.log(res);
}).catch((res)=>{
    console.log(res);
}).finally(()=>{
    console.log("Work Finished");
})

