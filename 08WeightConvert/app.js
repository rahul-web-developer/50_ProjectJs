
const input = document.querySelector("#input");

const outputshow = document.querySelector("#outputshow");
console.log(input)

input.addEventListener('keydown',(event)=>{


  if(event.key === 'Enter'){

    console.log(input.value)

    let out = Number(input.value*2.2);

    input.value = "";

    outputshow.innerHTML = out.toFixed(2);


  }


})