function evennumber(number,callback){
    if(typeof number !=='number'){
        callback('error:it is odd number')
    }
    else if(number%2 ===0){
        callback(null,'even');
    }
    else{
        callback(null,'odd');
    }
}

evennumber(6,(error,result)=>{
    if(error){
        console.log(error);
    }
    console.log(result);
});