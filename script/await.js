async function Isevennumber(number){
    if(typeof number !=='number'){
        throw ('error:it is odd number')
    }
    else if(number%2===0){
        return true;
    }
    else{
        return false;
    }
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