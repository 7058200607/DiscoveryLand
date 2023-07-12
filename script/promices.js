function Evennumber(number1){
    return new Promise((resolve, reject) => {
        if(typeof number1 !=='number'){
            reject('error:it is odd number');
        }
        else if(number1 %2===0){
            resolve('even')
        }
        else{
            resolve('odd');
        }
    });
}
Evennumber(5)
.then((result)=>
    console.log(result))
.catch((error)=>
    console.log(error));