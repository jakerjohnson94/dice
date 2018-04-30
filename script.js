const arr = Array.apply(null, Array(11)).map(() => i, (i = 0));

function rollDice() {
  const min = Math.ceil(1);
  const max = Math.floor(7);
  return (r = Math.floor(Math.random() * (max - min)) + min);
}

function getDiceValues(number) {
  for (let i = 1; i <= number; i++) {
    const roll = rollDice() + rollDice();
    arr[roll - 2]++;
  }
  return arr;
}
function printValues() {
  for (i = 0; i < arr.length; i++) {
    const div = document.createElement("div");
   const wrap =  document.getElementById("wrap")
    div.textContent = `${i + 2}: ${arr[i]}`;
    wrap.appendChild(div);
  }
}
function drawGraph(){
    for(let i=0; i<arr.length; i++){
        const div = document.createElement("div");
        const wrap2 = document.getElementById("wrap2");
       div.setAttribute('style', `height: ${arr[i]}px`);
        div.classList.add('bar');
         wrap2.appendChild(div);
     
    }
}

getDiceValues(1000);

console.log(arr);
