function sumOfNumber(sum){
   let sumInitial= 0;
   for(let i = 0; i < sum.length; i++){
       let element = sum[i];
        sumInitial = sumInitial + element; 
   }

   return sumInitial;
}



let number = [50,70,54,32,80,65];
let totalNumber = sumOfNumber(number);
console.log('All array Total Number is =' ,totalNumber);