// ================= CAREER DATABASE =================
const careerDB = {
  medical: {
    overview: "Medical field includes Doctor, Surgeon, MBBS, BDS and Nursing.",
    exams: "NEET is the main entrance exam.",
    skills: "Biology knowledge, patience, communication skills.",
    salary: "₹5 LPA - ₹25 LPA depending on specialization."
  },
  engineering: {
    overview: "Engineering includes CSE, Mechanical, Civil, Electrical.",
    exams: "JEE Main & Advanced.",
    skills: "Maths, Physics, problem solving.",
    salary: "₹4 LPA - ₹20 LPA."
  },
  government: {
    overview: "IAS, IPS, SSC, Banking, Railway.",
    exams: "UPSC, SSC, IBPS.",
    skills: "GK, reasoning, discipline.",
    salary: "₹3 LPA - ₹15 LPA."
  },
  it: {
    overview: "Developer, AI Engineer, Data Scientist.",
    exams: "Skills based field.",
    skills: "Coding, logic building.",
    salary: "₹5 LPA - ₹30 LPA."
  }
};

// Typing Effect
const text="Discover Your Dream Career 🚀";
let i=0;
function typing(){
 if(i<text.length){
   document.querySelector(".typing").innerHTML+=text.charAt(i);
   i++;
   setTimeout(typing,50);
 }
}
if(document.querySelector(".typing")) typing();

// Chat Toggle
function toggleChat(){
 let box=document.getElementById("chatbox");
 box.style.display=box.style.display==="block"?"none":"block";
}

// Smart Chat
function sendMessage(){
 let input=document.getElementById("chat-input");
 let msg=input.value.toLowerCase();
 let chat=document.getElementById("chat-messages");

 chat.innerHTML += "<p><b>You:</b> "+msg+"</p>";

 let found=false;

 for(let career in careerDB){
   if(msg.includes(career)){
     let d=careerDB[career];
     chat.innerHTML += `
       <p><b>Overview:</b> ${d.overview}</p>
       <p><b>Exams:</b> ${d.exams}</p>
       <p><b>Skills:</b> ${d.skills}</p>
       <p><b>Salary:</b> ${d.salary}</p>
     `;
     found=true;
     break;
   }
 }

 if(!found){
   chat.innerHTML += "<p>Please ask about Medical, Engineering, Government or IT.</p>";
 }

 input.value="";
}

// Quiz
function checkQuiz(){
 let score=0;
 let q1=document.querySelector('input[name="q1"]:checked');
 let q2=document.querySelector('input[name="q2"]:checked');

 if(q1 && q1.value==="bio") score++;
 if(q2 && q2.value==="math") score++;

 let result=document.getElementById("result");

 if(score==2){
   result.innerHTML="You are suitable for Medical or Engineering!";
 }
 else{
   result.innerHTML="You can explore IT or Government Jobs!";
 }
}

// Particles
if(document.getElementById("particles-js")){
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    move: { speed: 2 },
    line_linked: { enable: true }
  }
});
}
