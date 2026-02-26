function checkAge(age){
    if(age<18){
        throw "You must be 18+"
    }else{
        return "Access Granted"
    }
}
try{
    console.log(checkAge(19));
}catch(error){
    console.log(error)
}