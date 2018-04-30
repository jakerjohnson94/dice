const arr = Array.apply(null, Array(11)).map(()=> i, i=0);

function rollDice(){
    const min = Math.ceil(1);
    const max = Math.floor(7);
    return r = Math.floor(Math.random() * (max-min))+min;

  
}

function getDiceValues(number){
    for(let i=1; i<=number; i++){
        
        const roll = rollDice()+rollDice();
        arr[roll-2]++;
    }
    return arr;
}
    function printValues(){
        for (i=0; i< arr.length; i++){
       const div = document.createElement('div')
       div.textContent = `${i+2}: ${arr[i]}`;
       document.body.appendChild(div);
           
      

    }
 
}


getDiceValues(1000);
console.log(arr);