var elements = ['book' , 'pen', 'pencil', 'notebook','english'];
var numbers = [45, 34,67,89,24,46,47];

// for break 
for(i = 0; i <numbers.length ; i++){
    var number = numbers[i];
    // console.log(number)
    if(number > 70){
        break;
    }
   
}
//  loop for continue 
for(i = 0; i <elements.length ; i++){
    var element = elements[i];
    console.log(element)
    if(element == 'pen'){
        break;
    }
   
}

