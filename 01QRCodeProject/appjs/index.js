const inputvalue = document.getElementById("inputvalue");


const qrimg = document.getElementById("qrimg");

const Qrbutton = document.getElementById("Qrbutton");


//  Qrbutton.onclick = function(){

inputvalue.onkeyup = function(){
  console.log(inputvalue)

  if(!inputvalue.value){
    alert("Plz enter valid url")
  }else{

    qrimg.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue.value}`


  }

 
}
