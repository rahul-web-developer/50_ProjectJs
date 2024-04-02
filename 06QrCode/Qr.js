

const qrinput  = document.getElementById("qr-input");

const qrbtn = document.getElementById("qr-btn")

const qrimg = document.getElementById("qrcodeimg")


console.log(qrinput)
console.log(qrbtn)
console.log(qrimg)


qrbtn.addEventListener("click",()=>{


  if(qrinput.value.trim() === ''){
    alert("plz enter value")
  }else{

    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrinput.value}`

    qrinput.value =""


  }


 
  


})