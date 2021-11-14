
 const startButton = document.getElementById("start_btn");
 const timerE1 = document.querySelector(".timerSec");
 const quizBox = document.querySelector(".quiz_box");
 const questionContainerE1 = document.getElementById("question_container");
 const optionList = document.querySelector(".option_list");
 const submitButton = document.querySelector(".submit_btn")



// active start button for active functions
    start_btn.onclick = function () {
        questionContainerE1.classList.add("activequiz");
        showQuestion(0); //showing question  
        nextBtn.classList.remove("show");   
        startTimer(69); 
    }
let que_count=0;
let finalScore=0;

    // presenting questions and answers
     function showQuestion(index) {
        let que_tag = "<span>"+questions[index].numb+"."+questions[index].question+"</span>";
        let option_tag= '<div class="option">'+questions[index].options[0]+'</div>'
                        +'<div class="option">'+questions[index].options[1]+'</div>'
                        +'<div class="option">'+questions[index].options[2]+'</div>'
                        +'<div class="option">'+questions[index].options[3]+'</div>';
        questionContainerE1.innerHTML =que_tag;
        optionList.innerHTML = option_tag;
     
const option = optionList.querySelectorAll (".option");
    
    // setting onclick attribute  
     for(i=0; i< option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
         }
    }
    
    // for user selected answer
     function optionSelected(answer) {
         
        let userAns  = answer.textContent;
        let correctAns = questions[que_count].answer;
           
            if (userAns === correctAns) {
            finalScore += 1;
            answer.classList.add("correct");    
                console.log("correctAnswer");
                console.log("Your score is"+ finalScore);
            }else{
                answer.classList.add("incorrect"); 
                console.log("wrongAnswer");
                penalty=20;
                
             }
        nextBtn.classList.add("show");   
    }

    // start timer sec
    function startTimer(time){
    counter = setInterval(timer, 1000)
    function timer() {
        var minutes=Math.floor(time/60);
        if(minutes < 1){
            minutes==0;
        }else{
            minutes=Math.floor(time/60);
        }
        var seconds = time-minutes*60;
        timerE1.textContent =minutes+' m ' +seconds+' s';
            time=time-1;
            if(penalty>0){
            time=time-penalty;
            penalty=0;
            }
        if(time <= 9){
            timerE1.textContent = '0 m '+ time+' s';
        }
        if (time <= 0){
            clearInterval(counter);
            timer();
        }        
    }
}

const nextBtn= document. querySelector("footer .next_btn");
let penalty=0;
   
    nextBtn.onclick =()=> {
        if(que_count < questions.length-1){
        que_count++;
        showQuestion(que_count);
        nextBtn.classList.remove("show");
    } else{
        clearInterval(counter);
        resultCard(); //calling to view score function
    }
}
    function resultCard(){
        quizBox.classList.remove("option_list");
             let Name=prompt ("You initial"); //showing score function for
                alert(Name + " Your score is "+finalScore+"/5");
       
    }

//  creating an array and passing the question number.
let questions =[
    {
       numb: 1,
       question: "What is 2 + '3'?",
       answer: "23",
       options:[ 
       "23",
        "32", 
       "5", 
        "6" 
       ]
    },
    {  
        numb: 2,
        question: "Who invented JavaScript?",
        answer: "Brenden Eich",
        options:[ 
         "Douglas Crockford",
         "Sheryl Sandberg", 
         "Brenden Eich", 
         "None of the Above" 
            ]
     },
    {
    numb: 3,
       question: "Which of the following attribute can hold the JavaScript version?",
       answer: "Language",
       options:[ 
        "Language",
        "Script", 
        "Version", 
        "None of the Above" 
       ]
    }, 
 
    {
   numb: 4,
       question: "JavaScript is interpreted by __?",
       answer: "Client",
       options:[ 
        "Client",
        "Server", 
        "Object", 
        "None of the Above" 
       ] 
    },
    {
    numb: 5,
        question: "Inside which HTML do we put the JavaScript?",
        answer: "script",
        options:[ 
          "js",
          "scripting", 
          "script", 
          "javascript" 
            ]
     
         },]
     




        
        
               
            
    




