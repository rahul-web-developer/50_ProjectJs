
const showdata = document.getElementById("showdata");

const copytbn = document.getElementById("copy-btn");


const range = document.getElementById("range");

const uppercase = document.getElementById("Uppercase");

const Lowercase = document.getElementById("Lowercase");


const number = document.getElementById("number");

const symbol = document.getElementById("symbol");



const genrate = document.getElementById("genrate");




const upperstring = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const lowerstr = upperstring.toLocaleLowerCase();

const numstr = '0123456789';

const symbolstr = '!@#$%^&*()_+';









genrate.addEventListener('click',()=>{

  let str = '';


  if(uppercase.checked){

    str += upperstring;

    
  }
  
  if(Lowercase.checked){
    str+= lowerstr;

  }

  if(number.checked){
    str+= numstr
  }

  if(symbol.checked){
    str+=symbolstr
  }



  let pass = '';

  for(let i=0; i<range.value; i++){


    let index = Math.floor(Math.random()*str.length)


    pass+= str[index]


    

  }

  showdata.value = pass
console.log(str)
  
})







// copy button logic

copytbn.addEventListener("click",()=>{

  if(showdata.value === ''){
    alert("Please Genrate password first")
  }else{

    showdata.select();
    document.execCommand('copy');

  }


})