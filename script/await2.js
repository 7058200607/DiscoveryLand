 function Isevennumber(number){
    return new Promise((resolve, reject) => {
        if(typeof number !=='number'){
            reject ('error:it is odd number')
        }
        else if(number%2===0){
            resolve('even')
        }
        else{
            resolve('odd')
        }    
    })
}
(async()=>{
try{
    const result1=await Isevennumber(4);
    console.log(result1);
    
}
catch(error){
    console.log(error);
}

})();