
const lengthhp = document.querySelector('.length');
const upper = document.querySelector('.upperrcase');
const lower = document.querySelector('.lowercase');
const number = document.querySelector('.number');
const symbol = document.querySelector('.symbol');
const passinput = document.querySelector('.pass-input');
const copy = document.querySelector('.copy');
const genrate = document.querySelector('.genratebtn');


console.log(lengthhp)
console.log(upper.checked)
console.log(lower)
console.log(number)
console.log(symbol)
console.log(passinput)
console.log(copy)
console.log(genrate)





genrate.addEventListener("click",()=>{


  const Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let lowercase = Upper.toLocaleLowerCase()

const numberrr = '0123456789';

const symbolstr = '!@#$%^&*()_+';


let str = '';
let pass = '';


  if(upper.checked){
   str += Upper

    
  }
  if(lower.checked){
   
    str +=lowercase

  }
  if(number.checked){

    str += numberrr

  }
  if(symbol.checked){
   str += symbolstr
  }
 

console.log(str)


for( i =0; i<lengthhp.value; i++){

let index = Math.floor(Math.random()* str.length)
pass += str[index];


}

console.log(pass)

passinput.value = pass;

})




copy.addEventListener("click",()=>{


console.log(first)

})