
const quiz = [
  {
      question: "What is the most used programming language in 2021?",
      ans1text: "Java",
      ans2text: "C",
      ans3text: "Python",
      ans4text: "JavaScript",
      answer: "JavaScript",
  },
  {
      question: "Who is the President of US?",
      ans1text: "Joe Biden",
      ans2text: "Donald Trump",
      ans3text: "Barack Obama",
      ans4text: "George Bush",
      answer: "Joe Biden",
  },{
      question: "What does HTML stand for?",
      ans1text: "Hypertext Markup Language",
      ans2text: "Cascading Style Sheet",
      ans3text: "Jason Object Notation",
      ans4text: "Helicopters Terminals Motorboats Lamborginis",
      answer: "Hypertext Markup Language",
  },
  {
      question: "What year was JavaScript launched?",
      ans1text: "1996",
      ans2text: "1995",
      ans3text: "1994",
      ans4text: "none of the above",
      answer: "1995",

  }
]


const question = document.getElementById("Question");
const radioa = document.getElementById("radioa");


const radiob = document.getElementById("radiob");

const radioc = document.getElementById("radioc");

const radiod = document.getElementById("radiod");


console.log(question)
console.log(question.textContent)

console.log(radioa)
console.log(radiob)
console.log(radioc)
console.log(radiod)


let current = 0;

let score = 0;

console.log(quiz[current].question)

question.textContent = quiz[current].question;

const answer = document.querySelectorAll(".answer");






question.textContent = quiz[currentQuestion].question;
radioa.textContent = quiz[currentQuestion].ans1text;
radiob.textContent = quiz[currentQuestion].ans2text;
radioc.textContent = quiz[currentQuestion].ans3text;
radiod.textContent = quiz[currentQuestion].ans4text;






const submit = document.getElementById("submit");

console.log(answer)

submit.addEventListener('click',()=>{

  const checkedanswer = document.querySelector('input[type="radio"]:checked')

  // console.log(checkedanswer.nextSibling.textContent)


  if(checkedanswer == null){
    alert("plz check")
  }else{
    if(checkedanswer.nextElementSibling.textContent == quiz[current])
    score++;

  }

  checkedanswer.checked = false;
current++;

  if(current < quiz.length){

    question.textContent = quiz[current].question;

    radioa.textContent = quiz[current].ans1text
    radiob.textContent = quiz[current].ans2text
    radioc.textContent = quiz[current].ans3text
    radiod.textContent = quiz[current].ans4text



  }else{
    alert('Your score is ' + score)
    location.reload()
  }





})

  



