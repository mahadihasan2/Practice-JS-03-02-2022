let positive = [43,53,32,-89,97,32,-75,-54];
let positiveNumber = [];
for (let i = 0;i < positive.length;i++){
    let element = positive[i];
    // console.log(element);
    if(element > 0){
        positiveNumber.push(element);
        // console.log(positiveNumber);
    }else{
        // break;
        continue;
    }
    
}
console.log(positiveNumber);
