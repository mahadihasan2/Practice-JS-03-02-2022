let firstNumber = 500;
let secondNumber = 400;
let thirdNumber = 300;
if(firstNumber>secondNumber && firstNumber>thirdNumber){
    console.log('This Number is First',firstNumber);
}else if(secondNumber>firstNumber && secondNumber>thirdNumber){
    console.log('This Number is Second',secondNumber);
}else if(thirdNumber>firstNumber && thirdNumber>secondNumber){
    console.log('This Number is Third',thirdNumber);
}else{
    console.log('This Number is Error');
}

// Max Number 
let Number = Math.max(firstNumber,secondNumber,thirdNumber);
console.log('this Number is =',Number);

// Using Function 
 
function smallestNumber(first1,first2,first3){
    if(first1<first2 && first1<first3){
        return first1;
    }else if(first2<first1 && first2<first3){
        return first2;
    }else{
        return first3;
    }
}

let smallestNumberIs = smallestNumber(6550,5443,7780);
console.log('This smallest Number is =',smallestNumberIs);