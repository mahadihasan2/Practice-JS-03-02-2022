function bestFriend(bestFriends){
    let length = 1;
    let largest = ''
    for(let i = 0; i < bestFriends.length; i++){
        const element = bestFriends[i];
        // console.log(element);
        if(element.length>length){
        largest = element;

        }

    }
    
    return largest;
    // console.log(length);

 
   

}

let friends = ['Rakib','Shakib','Kalam','Robbin','Azad','Mahadi Hasan'];
let getFriends = bestFriend(friends);
console.log(getFriends);