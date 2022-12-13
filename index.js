

const LABEL = document.getElementById("QUESTION");
var SHOWANSER = false;
const ANSWERSLIST = [QuestionOne.Answer,QuestionTwo.Answer,QuestionThree.Answer,QuestionFour.Answer,QuestionFive.Answer,QuestionSix.Answer,QuestionSeven.Answer,QuestionEight.Answer,QuestionNine.Answer,QuestionTen.Answer];
var QUESTIONNUMBER = 1;
var ANSWERS = ["","","","","","","","","",""];
SETQUESTION();




function SETPICTURE(){
    var END = "";
    if(QUESTIONNUMBER == 1){
        END = ".webp"
    }else if(QUESTIONNUMBER == 4){
        END = ".jpeg"
    }else if(QUESTIONNUMBER == 8 || QUESTIONNUMBER == 9){
       END = ".jpg"
    }else{
        END = ".png"
    }
    document.getElementById("PICTRUE").src="./media/PIC"+QUESTIONNUMBER+END
}

function ANSWERQUESTION(OPTION){
    if(QUESTIONNUMBER == 10){
    ANSWERS[QUESTIONNUMBER-1] = OPTION.innerHTML;
    CREATEFINDSCREEN();
    }else{
        ANSWERS[QUESTIONNUMBER-1] = OPTION.innerHTML;
        QUESTIONNUMBER++;
        SETQUESTION();
    }
}
function SELECTEDANSWER(){
    for(let O = 1;O<5;O++){
        document.getElementById("Q"+O).classList.remove("SLECTED");
        document.getElementById("Q"+O).classList.remove("RIGHT");
        document.getElementById("Q"+O).classList.remove("WRONG");
        document.getElementById("Q"+O).classList.add("NOTSLECTED");
        document.getElementById("Q"+O).classList.add("Q"+O);
    }
        for(var j = 1;j<5;j++){
            if(document.getElementById("Q"+j).innerHTML == ANSWERS[QUESTIONNUMBER-1]){
                document.getElementById("Q"+j).classList.remove("NOTSLECTED");
                document.getElementById("Q"+j).classList.add("SLECTED");
            }
        }  
    if(SHOWANSER == true){
        for(var h = 1;h<5;h++){
            document.getElementById("Q"+h).classList.remove("Q"+h);
            if(document.getElementById("Q"+h).innerHTML == ANSWERSLIST[QUESTIONNUMBER-1]){
                document.getElementById("Q"+h).classList.add("RIGHT");
            }else{
                document.getElementById("Q"+h).classList.add("WRONG");
            }
        }
    }
}
document.getElementById("NEXT").addEventListener("click",()=>{
  if(QUESTIONNUMBER+1 == 11){
    QUESTIONNUMBER++;
    CREATEFINDSCREEN();
  }
  if(QUESTIONNUMBER < 10){
    QUESTIONNUMBER++;
    SETQUESTION();
  }
});
document.getElementById("BACK").addEventListener("click",()=>{
 if(QUESTIONNUMBER != 1){
        document.getElementById("SUBMIT").style.display = "none";
        QUESTIONNUMBER--;
        SETQUESTION();
    }
    
  });
  document.getElementById("RESET").addEventListener("click",()=>{
    document.getElementById("SUBMIT").style.display = "none"
    QUESTIONNUMBER = 1;
    ANSWERS = [];
    SHOWANSER = false;
    SETQUESTION();
  });
function SETQUESTION(){
    SETPICTURE()
    if(QUESTIONNUMBER == 1){
        LABEL.innerHTML = QuestionOne.Question;
        RANDOMORDER([QuestionOne.A1,QuestionOne.A2,QuestionOne.A3,QuestionOne.A4])
    }else if(QUESTIONNUMBER == 2){
        LABEL.innerHTML = QuestionTwo.Question;
        RANDOMORDER([QuestionTwo.A1,QuestionTwo.A2,QuestionTwo.A3,QuestionTwo.A4])
    }else if(QUESTIONNUMBER == 3){
        LABEL.innerHTML = QuestionThree.Question;
        RANDOMORDER([QuestionThree.A1,QuestionThree.A2,QuestionThree.A3,QuestionThree.A4])
    }
    else if(QUESTIONNUMBER == 4){
        LABEL.innerHTML = QuestionFour.Question;
        RANDOMORDER([QuestionFour.A1,QuestionFour.A2,QuestionFour.A3,QuestionFour.A4])
    }
    else if(QUESTIONNUMBER == 5){
        LABEL.innerHTML = QuestionFive.Question;
        RANDOMORDER([QuestionFive.A1,QuestionFive.A2,QuestionFive.A3,QuestionFive.A4])
    }
    else if(QUESTIONNUMBER == 6){
        LABEL.innerHTML = QuestionSix.Question;
        RANDOMORDER([QuestionSix.A1,QuestionSix.A2,QuestionSix.A3,QuestionSix.A4])
    }
    else if(QUESTIONNUMBER == 7){
        LABEL.innerHTML = QuestionSeven.Question;
        RANDOMORDER([QuestionSeven.A1,QuestionSeven.A2,QuestionSeven.A3,QuestionSeven.A4])
    }
    else if(QUESTIONNUMBER == 8){
        LABEL.innerHTML = QuestionEight.Question;
        RANDOMORDER([QuestionEight.A1,QuestionEight.A2,QuestionEight.A3,QuestionEight.A4])
    }
    else if(QUESTIONNUMBER == 9){
        LABEL.innerHTML = QuestionNine.Question;
        RANDOMORDER([QuestionNine.A1,QuestionNine.A2,QuestionNine.A3,QuestionNine.A4])
    }
    else if(QUESTIONNUMBER == 10){
        LABEL.innerHTML = QuestionTen.Question;
        RANDOMORDER([QuestionTen.A1,QuestionTen.A2,QuestionTen.A3,QuestionTen.A4])
    }
    SELECTEDANSWER();
}
function RANDOMORDER(ORDER){
var NEWORDER = [];
while(NEWORDER.length != 4){
    var A = ORDER[Math.round(Math.random()*3)];
        if(NEWORDER.includes(A) != true){
            NEWORDER.push(A);
        }
}
for(let i = 1;i<5;i++){
    document.getElementById("Q"+i).innerHTML = NEWORDER[i-1];
}
}
function CREATEFINDSCREEN(){
    document.getElementById("SUBMIT").style.display = "flex";
    document.getElementById("QA").innerHTML = "Question Answered: "+ FQA() +" out of 10";
    if(SHOWANSER == true){
        document.getElementById("SA").style.display="";
        document.getElementById("SB").style.display="none";
    }else{
         document.getElementById("SB").style.display="";
        document.getElementById("SA").style.display="none";
        document.getElementById("SCORE").innerHTML = "-/10";
    }
}
function SUBMIT(){
var SCORE = 0;
for(let i = 0;i<ANSWERSLIST.length;i++){
    SCORE+= CHECKIFCORRECT(ANSWERS[i],ANSWERSLIST[i]);
}
document.getElementById("SA").style.display="";
document.getElementById("SB").style.display="none";
document.getElementById("SCORE").innerHTML = SCORE+"/10"
}
function CHECKIFCORRECT(TA,CA){
      if(TA == CA){
        return 1;
      }
    return 0;
}
document.getElementById("SA").addEventListener("click",()=>{
SHOWANSER = true;
QUESTIONNUMBER = 1;
SETQUESTION();
document.getElementById("SUBMIT").style.display = "none";
});
function FQA(){
    var R = 0;
for(let i = 0;i<ANSWERS.length;i++){
if(ANSWERS[i] != ""){
    R++
}
}
return R;
}