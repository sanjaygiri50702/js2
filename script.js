var sum = ()=>{
    var number = parseInt(prompt('enter how many number'));
    var array = [];
    for(var i= 0 ; i<number ; i++){
        var value = parseInt(prompt('enter value'));
        array.push(value);
        
    }
    document.getElementById('add').innerHTML = `<h1>sum is ${findsum(array)}</h1>`;
    document.getElementById('btn').style = 'background : blue;';
   
}
var findsum = (array) =>{
    var sum = 0;
    for(var i=0;i<array.length;i++){
        sum += array[i];

    }
    return sum;
}
var changeColor = () =>{
    document.getElementById('form').style ='background:wheat;';
}
var addBorder  =()=>{
    document.getElementById('btn').classList.add('border');
}
var removeBorder  =()=>{
    document.getElementById('btn').classList.remove('border');
}
