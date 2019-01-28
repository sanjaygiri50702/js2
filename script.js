var sum = ()=>{
    var number = parseInt(prompt('enter how many number'));
    var array = [];
    for(var i= 0 ; i<number ; i++){
        var value = parseInt(prompt('enter value'));
        array.push(value);
        
    }
    document.getElementById('add').innerHTML = `<h1>sum is ${findsum(array)}</h1>`;
   
}
var findsum = (array) =>{
    var sum = 0;
    for(var i=0;i<array.length;i++){
        sum += array[i];

    }
    return sum;
}

