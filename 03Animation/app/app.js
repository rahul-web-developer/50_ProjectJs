
const container = document.querySelectorAll("span");

console.log(container)

container.forEach((data)=>{

data.onclick = function(){

  data.classList.toggle("active")


}

})