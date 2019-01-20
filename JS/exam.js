
var question = document.querySelector(".question_block_p1");
var skippedQuestionBlock = document.querySelector(".rowform .skipped_question");
var skipedquestion = document.getElementsByClassName("ulmenu__li-inline link indexx");
var answers = document.querySelector(".question_block_answers");
var radio1 = document.querySelector(".question_block_answers_leftside_r1");
var radio2 = document.querySelector(".question_block_answers_leftside_r2");
var radio3 = document.querySelector(".question_block_answers_leftside_r3");
var radio4 = document.querySelector(".question_block_answers_leftside_r4");
var choice1 = document.querySelector(".question_block_answers_choice1");
var choice2 = document.querySelector(".question_block_answers_choice2");
var choice3 = document.querySelector(".question_block_answers_choice3");
var choice4 = document.querySelector(".question_block_answers_choice4");
var btn_pre = document.querySelector(".btn--secondary1");
var btn_skip = document.querySelector(".btn--secondary2");
var btn_next = document.querySelector(".btn--secondary3");
var res = document.querySelector(".result");

/* arrays for skipped question*/
var arrskipped = new Array();
var skip1 = new Array();
var skip2 = new Array();
var skip3 = new Array();
var skip4 = new Array();
var skip5 = new Array();
var countofSkip = 0

/* arrays for question and answers */
var arrOfQustion = new Array();
var arrOfChoice1 = new Array();
var arrOfChoice2 = new Array();
var arrOfChoice3 = new Array();
var arrOfChoice4 = new Array();
var current = 0;
var count = 0;
/*arrays for previous button */
var tempforback = new Array();
var tempforc1 = new Array();
var tempforc2 = new Array();
var tempforc3 = new Array();
var tempforc4 = new Array();
var countPre = 0;
var counter = 0;

/* for result */

var resultAll = 0;
/*for random number */
var ran = 0;

/*flags for result*/
var falge1 = false;
var falge2 = false;
var falge3 = false;
var falge4 = false;
var falge5 = false;
var falge6 = false;
var falge7 = false;
var falge8 = false;
var falge9 = false;
var falge10 = false;
/* debugger; */
window.addEventListener("load", function () {
        LoadQuestion();
        //  btn_pre.style.visibility = 'hidden';

});
function LoadQuestion() {
        AddQuestionBlock('I ..... tennis every Sunday morning.', 'playing', 'play', 'am playing', 'am play');
        AddQuestionBlock('Donot make so much noise. Noriko ..... to study for her ESL test!', 'try', 'tries', 'tried', 'is trying');
        AddQuestionBlock('Jun-Sik ..... his teeth before breakfast every morning.', 'will cleaned', 'is cleaning', 'cleans', 'clean');
        AddQuestionBlock('Sorry, she canot come to the phone. She ..... a bath!', 'is having', 'having', 'have', 'has');
        AddQuestionBlock('..... many times every winter in Frankfurt.', 'It snows', 'It snowed', 'It is snowing', 'It is snow');
        AddQuestionBlock('How many students in your class ..... from Korea?', 'comes', 'come', 'came', 'are coming');
        AddQuestionBlock('Babies ..... when they are hungry.', 'cry', 'cries', 'cried', 'are crying');
        AddQuestionBlock('Sorry, you cannot borrow my pencil. I ..... it myself.', 'was using', 'using', 'use', 'am using');
        AddQuestionBlock('I ..... for my pen. Have you seen it?', 'will look', 'looking', 'look', 'am looking');
        AddQuestionBlock('The phone ...... Can you answer it, please?', 'rings', 'ring', 'rang', 'is ringing');
        SetQuestion();

}
function AddQuestionBlock(q, c1, c2, c3, c4) {
        arrOfQustion[count] = q;
        arrOfChoice1[count] = c1;
        arrOfChoice2[count] = c2;
        arrOfChoice3[count] = c3;
        arrOfChoice4[count] = c4;
        count++;
}
/* debugger; */
function SetQuestion() {

        ran = Math.floor(Math.random() * (9) + 1);
        if (!isNaN(ran) && current != ran && !isNaN(current)) {
                current = ran;
                question.textContent = arrOfQustion[current];
                choice1.textContent = arrOfChoice1[current];
                choice2.textContent = arrOfChoice2[current];
                choice3.textContent = arrOfChoice3[current];
                choice4.textContent = arrOfChoice4[current];
        }

        else {
                SetQuestion();
        }


}

function SetQuestionForBack2() {
        question.textContent = tempforback[countPre];
        choice1.textContent = tempforc1[countPre];
        choice2.textContent = tempforc2[countPre];
        choice3.textContent = tempforc3[countPre];
        choice4.textContent = tempforc4[countPre];
}

function SumOfResult() {
        var result = 0;
        if (tempforback[counter] == arrOfQustion[0] && radio2.checked == true && falge1 == false) {
                falge1 = true;
                result += 1;

        }
        else if (tempforback[counter] == arrOfQustion[1] && radio4.checked == true && falge2 == false) {
                flage2 = true;
                result += 1;
        }
        else if (tempforback[counter] == arrOfQustion[2] && radio3.checked == true && falge3 == false) {
                falge3 = true;
                result += 1;
        }
        else if (tempforback[counter] == arrOfQustion[3] && radio1.checked == true && falge4 == false) {
                falge4 = true;
                result += 1;
        }
        else if (tempforback[counter] == arrOfQustion[4] && radio1.checked == true && falge5 == false) {
                falge5 = true;
                result += 1;
        }
        else if (tempforback[counter] == arrOfQustion[5] && radio2.checked == true && falge6 == false) {
                falge6 = true;
                result += 1;
        }
        else if (tempforback[counter] == arrOfQustion[6] && radio1.checked == true && falge7 == false) {
                falge7 = true;
                result += 1;
        }
        else if (tempforback[counter] == arrOfQustion[7] && radio4.checked == true && falge8 == false) {
                falge8 = true;
                result += 1;
        }
        else if (tempforback[counter] == arrOfQustion[8] && radio4.checked == true && falge9 == false) {
                falge9 = true;
                result += 1;
        }
        else if (tempforback[counter] == arrOfQustion[9] && radio4.checked == true && falge10 == false) {
                falge10 = true;
                result += 1;
        }
        else {
                    
                        result = 0;
                }
        
        return result;
}
function SumOfResultSkipped(){
       
                var result = 0;
                if (arrskipped[countofSkip] == arrOfQustion[0] && radio2.checked == true && falge1 == false) {
                        result += 1;
                }
                else if (arrskipped[countofSkip]== arrOfQustion[1] && radio4.checked == true && falge2 == false) {
                        result += 1;
                }
                else if (arrskipped[countofSkip] == arrOfQustion[2] && radio3.checked == true && falge3 == false) {
                        result += 1;
                }
                else if (arrskipped[countofSkip]== arrOfQustion[3] && radio1.checked == true && falge4 == false) {
                        result += 1;
                }
                else if (arrskipped[countofSkip] == arrOfQustion[4] && radio1.checked == true && falge5 == false) {
                        result += 1;
                }
                else if (arrskipped[countofSkip]== arrOfQustion[5] && radio2.checked == true && falge6 == false) {
                        result += 1;
                }
                else if (arrskipped[countofSkip]== arrOfQustion[6] && radio1.checked == true && falge7 == false) {
        
                        result += 1;
                }
                else if (arrskipped[countofSkip] == arrOfQustion[7] && radio4.checked == true && falge8 == false) {
                        result += 1;
                }
                else if (arrskipped[countofSkip]== arrOfQustion[8] && radio4.checked == true && falge9 == false) {
                        result += 1;
                }
                else if (arrskipped[countofSkip]== arrOfQustion[9] && radio4.checked == true && falge10 == false) {
                        result += 1;
                }
                else {
        
                             result = 0;
                }
                return result;
}

function SumForResultBack() {
        var result = 0;
        if (tempforback[countPre] == arrOfQustion[0] && radio2.checked == true && falge1 == false) {
                result += 1;
        }
        else if (tempforback[countPre] == arrOfQustion[1] && radio4.checked == true && falge2 == false) {
                result += 1;
        }
        else if (tempforback[countPre] == arrOfQustion[2] && radio3.checked == true && falge3 == false) {
                result += 1;
        }
        else if (tempforback[countPre] == arrOfQustion[3] && radio1.checked == true && falge4 == false) {
                result += 1;
        }
        else if (tempforback[countPre] == arrOfQustion[4] && radio1.checked == true && falge5 == false) {
                result += 1;
        }
        else if (tempforback[countPre] == arrOfQustion[5] && radio2.checked == true && falge6 == false) {
                result += 1;
        }
        else if (tempforback[countPre] == arrOfQustion[6] && radio1.checked == true && falge7 == false) {

                result += 1;
        }
        else if (tempforback[countPre] == arrOfQustion[7] && radio4.checked == true && falge8 == false) {
                result += 1;
        }
        else if (tempforback[countPre] == arrOfQustion[8] && radio4.checked == true && falge9 == false) {
                result += 1;
        }
        else if (tempforback[countPre] == arrOfQustion[9] && radio4.checked == true && falge10 == false) {
                result += 1;
        }
        else {

                if ((falge1 == true) && tempforback[countPre] == arrOfQustion[0] && radio2.checked == true) {
                        result = result;
                }
                else if ((falge2 == true) && tempforback[countPre] == arrOfQustion[1] && radio4.checked == true) {
                        result = result;
                }
                else if ((falge3 == true) && tempforback[countPre] == arrOfQustion[2] && radio3.checked == true) {
                        result = result;

                }
                else if ((falge4 == true) && tempforback[countPre] == arrOfQustion[3] && radio1.checked == true) {
                        result = result;
                }
                else if (falge5 == true && tempforback[countPre] == arrOfQustion[4] && radio1.checked == true) {
                        result = result;
                }
                else if (falge6 == true && tempforback[countPre] == arrOfQustion[5] && radio2.checked == true) {
                        result = result;
                }
                else if (falge7 == true && tempforback[countPre] == arrOfQustion[6] && radio1.checked == true) {

                        result = result;
                }
                else if (falge8 == true && tempforback[counter] == arrOfQustion[7] && radio4.checked == true) {
                        result = result;
                }
                else if (falge9 == true && tempforback[counter] == arrOfQustion[8] && radio4.checked == true) {

                        result = result;
                }
                else if (falge10 == true && tempforback[countPre] == arrOfQustion[9] && radio4.checked == true) {
                        result = result;

                }
                else {
                        result -= 1;
                }



        }
        return result;
}
/*  debugger;  */ 
btn_next.addEventListener("click", function () {

        btn_pre.style.visibility = 'visible';
      if(radio1.checked == false && radio2.checked == false && radio3.checked == false && radio4.checked == false && btn_next.textContent != 'Finish')
      {
              var boolIsOk=confirm("are you sure you don't want to answer this question?")
              if(boolIsOk==true)
              {
        if (counter < 4 && btn_next.textContent != 'Finish') {
                tempforback[countPre] = arrOfQustion[current];
                tempforc1[countPre] = arrOfChoice1[current];
                tempforc2[countPre] = arrOfChoice2[current];
                tempforc3[countPre] = arrOfChoice3[current];
                tempforc4[countPre] = arrOfChoice4[current];
                resultAll += SumOfResult();
                resultAll+=SumOfResultSkipped();
            /*     if((resultAll += SumForResultBack())>-1)
                resultAll += SumForResultBack(); */
                counter++;
                countPre++;
                SetQuestion();
                radio1.checked = false;
                radio2.checked = false;
                radio3.checked = false;
                radio4.checked = false;
        }
        else if (counter == 4 && btn_next.textContent != 'Finish') {
                tempforback[countPre] = arrOfQustion[current];
                tempforc1[countPre] = arrOfChoice1[current];
                tempforc2[countPre] = arrOfChoice2[current];
                tempforc3[countPre] = arrOfChoice3[current];
                tempforc4[countPre] = arrOfChoice4[current];
                btn_skip.style.visibility = 'hidden';
                question.style.visibility = 'hidden';
                answers.style.visibility = 'hidden';
                btn_next.innerText = 'Finish';
                resultAll += SumOfResult();
                resultAll+=SumOfResultSkipped();
               /*  if((resultAll += SumForResultBack())>-1)
                resultAll += SumForResultBack(); */
                radio1.checked = false;
                radio2.checked = false;
                radio3.checked = false;
                radio4.checked = false;
        }
        else {
                if (btn_next.textContent == 'Finish' && (skipedquestion[0].textContent!=""||skipedquestion[1].textContent!=""||skipedquestion[2].textContent!=""||skipedquestion[3].textContent!=""||skipedquestion[4].textContent!="")) {
                        var resSki = confirm('Are you want to finish your exam!!');
                        if (resSki == true) {
                                resultAll += SumOfResult();
                                resultAll+=SumOfResultSkipped();
                               /*  if((resultAll += SumForResultBack())>-1)
                                resultAll += SumForResultBack(); */
                                question.style.visibility = 'hidden';
                                answers.style.visibility = 'hidden';
                                btn_pre.style.visibility = 'hidden';
                                btn_skip.style.visibility = 'hidden';
                                btn_next.style.visibility = 'hidden';
                                skippedQuestionBlock.style.visibility = 'hidden';
                                res.textContent = "Your Result Is " + resultAll + " From 5";

                        }
                }
                else {
                        resultAll += SumOfResult();
                        resultAll+=SumOfResultSkipped();
                        /* if((resultAll += SumForResultBack())>-1)
                        resultAll += SumForResultBack(); */
                        question.style.visibility = 'hidden';
                        answers.style.visibility = 'hidden';
                        btn_pre.style.visibility = 'hidden';
                        btn_skip.style.visibility = 'hidden';
                        btn_next.style.visibility = 'hidden';
                        skippedQuestionBlock.style.visibility = 'hidden';
                        res.textContent = "Your Result Is " + resultAll + " From 5";
                        radio1.checked = false;
                        radio2.checked = false;
                        radio3.checked = false;
                        radio4.checked = false;
                }
        }
}
}
else{
        if (counter < 4 && btn_next.textContent != 'Finish') {
                tempforback[countPre] = arrOfQustion[current];
                tempforc1[countPre] = arrOfChoice1[current];
                tempforc2[countPre] = arrOfChoice2[current];
                tempforc3[countPre] = arrOfChoice3[current];
                tempforc4[countPre] = arrOfChoice4[current];
                resultAll += SumOfResult();
                resultAll+=SumOfResultSkipped();
            /*     if((resultAll += SumForResultBack())>-1)
                resultAll += SumForResultBack(); */
                counter++;
                countPre++;
                SetQuestion();
                radio1.checked = false;
                radio2.checked = false;
                radio3.checked = false;
                radio4.checked = false;
        }
        else if (counter == 4 && btn_next.textContent != 'Finish') {
                tempforback[countPre] = arrOfQustion[current];
                tempforc1[countPre] = arrOfChoice1[current];
                tempforc2[countPre] = arrOfChoice2[current];
                tempforc3[countPre] = arrOfChoice3[current];
                tempforc4[countPre] = arrOfChoice4[current];
                btn_skip.style.visibility = 'hidden';
                question.style.visibility = 'hidden';
                answers.style.visibility = 'hidden';
                btn_next.innerText = 'Finish';
                resultAll += SumOfResult();
                resultAll+=SumOfResultSkipped();
               /*  if((resultAll += SumForResultBack())>-1)
                resultAll += SumForResultBack(); */
                radio1.checked = false;
                radio2.checked = false;
                radio3.checked = false;
                radio4.checked = false;
        }
        else {
                if (btn_next.textContent == 'Finish' && (skipedquestion[0].textContent!=""||skipedquestion[1].textContent!=""||skipedquestion[2].textContent!=""||skipedquestion[3].textContent!=""||skipedquestion[4].textContent!="")) {
                        var resSki = confirm('Are you want to finish your exam!!');
                        if (resSki == true) {
                                resultAll += SumOfResult();
                                resultAll+=SumOfResultSkipped();
                               /*  if((resultAll += SumForResultBack())>-1)
                                resultAll += SumForResultBack(); */
                                question.style.visibility = 'hidden';
                                answers.style.visibility = 'hidden';
                                btn_pre.style.visibility = 'hidden';
                                btn_skip.style.visibility = 'hidden';
                                btn_next.style.visibility = 'hidden';
                                skippedQuestionBlock.style.visibility = 'hidden';
                                res.textContent = "Your Result Is " + resultAll + " From 5";

                        }
                }
                else {
                        resultAll += SumOfResult();
                        resultAll+=SumOfResultSkipped();
                        /* if((resultAll += SumForResultBack())>-1)
                        resultAll += SumForResultBack(); */
                        question.style.visibility = 'hidden';
                        answers.style.visibility = 'hidden';
                        btn_pre.style.visibility = 'hidden';
                        btn_skip.style.visibility = 'hidden';
                        btn_next.style.visibility = 'hidden';
                        skippedQuestionBlock.style.visibility = 'hidden';
                        res.textContent = "Your Result Is " + resultAll + " From 5";
                        radio1.checked = false;
                        radio2.checked = false;
                        radio3.checked = false;
                        radio4.checked = false;
                }
        }
}

        /*  e.preventDefault(); */

});

/* debugger; */
btn_skip.addEventListener("click", function () {
        skippedQuestionBlock.style.visibility = 'visible';
        btn_pre.style.visibility = 'visible';
        if (counter < 4 && radio1.checked == false && radio2.checked == false && radio3.checked == false && radio4.checked == false) {

                tempforback[countPre] = arrOfQustion[current];
                tempforc1[countPre] = arrOfChoice1[current];
                tempforc2[countPre] = arrOfChoice2[current];
                tempforc3[countPre] = arrOfChoice3[current];
                tempforc4[countPre] = arrOfChoice4[current];
                if (skipedquestion[0].textContent == '') {
                        arrskipped[countofSkip] = arrOfQustion[current];
                        skipedquestion[countofSkip].textContent = arrskipped[countofSkip];
                        skip1[0] = arrOfQustion[current];
                        skip2[0] = arrOfChoice1[current];
                        skip3[0] = arrOfChoice2[current];
                        skip4[0] = arrOfChoice3[current];
                        skip5[0] = arrOfChoice4[current];
                }
                else if (skipedquestion[1].textContent == '') {
                        arrskipped[countofSkip] = arrOfQustion[current];
                        skipedquestion[countofSkip].textContent = arrskipped[countofSkip];
                        skip1[1] = arrOfQustion[current];
                        skip2[1] = arrOfChoice1[current];
                        skip3[1] = arrOfChoice2[current];
                        skip4[1] = arrOfChoice3[current];
                        skip5[1] = arrOfChoice4[current];
                }
                else if (skipedquestion[2].textContent == '') {
                        arrskipped[countofSkip] = arrOfQustion[current];
                        skipedquestion[countofSkip].textContent = arrskipped[countofSkip];
                        skip1[2] = arrOfQustion[current];
                        skip2[2] = arrOfChoice1[current];
                        skip3[2] = arrOfChoice2[current];
                        skip4[2] = arrOfChoice3[current];
                        skip5[2] = arrOfChoice4[current];
                }
                else if (skipedquestion[3].textContent == '') {
                        arrskipped[countofSkip] = arrOfQustion[current];
                        skipedquestion[countofSkip].textContent = arrskipped[countofSkip];
                        skip1[3] = arrOfQustion[current];
                        skip2[3] = arrOfChoice1[current];
                        skip3[3] = arrOfChoice2[current];
                        skip4[3] = arrOfChoice3[current];
                        skip5[3] = arrOfChoice4[current];
                }
                else if (skipedquestion[4].textContent == '') {
                        arrskipped[countofSkip] = arrOfQustion[current];
                        skipedquestion[countofSkip].textContent = arrskipped[countofSkip];
                        skip1[4] = arrOfQustion[current];
                        skip2[4] = arrOfChoice1[current];
                        skip3[4] = arrOfChoice2[current];
                        skip4[4] = arrOfChoice3[current];
                        skip5[4] = arrOfChoice4[current];
                }

                countofSkip++;
                counter++;
                countPre++;
                SetQuestion();
                radio1.checked = false;
                radio2.checked = false;
                radio3.checked = false;
                radio4.checked = false;
        }
        else if (counter == 4 && skipedquestion.length <= 5 && radio1.checked == false && radio2.checked == false && radio3.checked == false && radio4.checked == false) {
                btn_next.textContent = "Finish";
                tempforback[countPre] = arrOfQustion[current];
                tempforc1[countPre] = arrOfChoice1[current];
                tempforc2[countPre] = arrOfChoice2[current];
                tempforc3[countPre] = arrOfChoice3[current];
                tempforc4[countPre] = arrOfChoice4[current];
                if (skipedquestion[0].textContent == '') {
                        arrskipped[countofSkip] = arrOfQustion[current];
                        skipedquestion[countofSkip].textContent = arrskipped[countofSkip];
                        skip1[0] = arrOfQustion[current];
                        skip2[0] = arrOfChoice1[current];
                        skip3[0] = arrOfChoice2[current];
                        skip4[0] = arrOfChoice3[current];
                        skip5[0] = arrOfChoice4[current];
                }
                else if (skipedquestion[1].textContent == '') {
                        arrskipped[countofSkip] = arrOfQustion[current];
                        skipedquestion[countofSkip].textContent = arrskipped[countofSkip];
                        skip1[1] = arrOfQustion[current];
                        skip2[1] = arrOfChoice1[current];
                        skip3[1] = arrOfChoice2[current];
                        skip4[1] = arrOfChoice3[current];
                        skip5[1] = arrOfChoice4[current];
                }
                else if (skipedquestion[2].textContent == '') {
                        arrskipped[countofSkip] = arrOfQustion[current];
                        skipedquestion[countofSkip].textContent = arrskipped[countofSkip];
                        skip1[2] = arrOfQustion[current];
                        skip2[2] = arrOfChoice1[current];
                        skip3[2] = arrOfChoice2[current];
                        skip4[2] = arrOfChoice3[current];
                        skip5[2] = arrOfChoice4[current];
                }
                else if (skipedquestion[3].textContent == '') {
                        arrskipped[countofSkip] = arrOfQustion[current];
                        skipedquestion[countofSkip].textContent = arrskipped[countofSkip];
                        skip1[3] = arrOfQustion[current];
                        skip2[3] = arrOfChoice1[current];
                        skip3[3] = arrOfChoice2[current];
                        skip4[3] = arrOfChoice3[current];
                        skip5[3] = arrOfChoice4[current];
                }
                else if (skipedquestion[4].textContent == '') {
                        arrskipped[countofSkip] = arrOfQustion[current];
                        skipedquestion[countofSkip].textContent = arrskipped[countofSkip];
                        skip1[4] = arrOfQustion[current];
                        skip2[4] = arrOfChoice1[current];
                        skip3[4] = arrOfChoice2[current];
                        skip4[4] = arrOfChoice3[current];
                        skip5[4] = arrOfChoice4[current];
                }
                question.style.visibility = 'hidden';
                answers.style.visibility = 'hidden';
                btn_skip.style.visibility = 'hidden';

        }
        else {
                alert("you can't skip this question");
                radio1.checked = false;
                radio2.checked = false;
                radio3.checked = false;
                radio4.checked = false;

        }
});
/* debugger; */
skipedquestion[0].addEventListener("click", function () {
        question.style.visibility = 'visible';
        answers.style.visibility = 'visible';
        resultAll+=SumOfResultSkipped();
        question.textContent = skip1[0];
        choice1.textContent = skip2[0];
        choice2.textContent = skip3[0];
        choice3.textContent = skip4[0];
        choice4.textContent = skip5[0];
        skipedquestion[0].textContent = '';
        radio1.checked = false;
        radio2.checked = false;
        radio3.checked = false;
        radio4.checked = false;
        countofSkip = 0;

});
skipedquestion[1].addEventListener("click", function () {
        question.style.visibility = 'visible';
        answers.style.visibility = 'visible';
        resultAll+=SumOfResultSkipped();
        question.textContent = skip1[1];
        choice1.textContent = skip2[1];
        choice2.textContent = skip3[1];
        choice3.textContent = skip4[1];
        choice4.textContent = skip5[1];
        skipedquestion[1].textContent = '';
        radio1.checked = false;
        radio2.checked = false;
        radio3.checked = false;
        radio4.checked = false;
        countofSkip = 1;

});
skipedquestion[2].addEventListener("click", function () {
        question.style.visibility = 'visible';
        answers.style.visibility = 'visible';
        resultAll+=SumOfResultSkipped();
        question.textContent = skip1[2];
        choice1.textContent = skip2[2];
        choice2.textContent = skip3[2];
        choice3.textContent = skip4[2];
        choice4.textContent = skip5[2]
        skipedquestion[2].textContent = '';
        radio1.checked = false;
        radio2.checked = false;
        radio3.checked = false;
        radio4.checked = false;
        countofSkip = 2;
});
skipedquestion[3].addEventListener("click", function () {
        question.style.visibility = 'visible';
        answers.style.visibility = 'visible';
        resultAll+=SumOfResultSkipped();
        question.textContent = skip1[3];
        choice1.textContent = skip2[3];
        choice2.textContent = skip3[3];
        choice3.textContent = skip4[3];
        choice4.textContent = skip5[3];
        skipedquestion[3].textContent = '';
        radio1.checked = false;
        radio2.checked = false;
        radio3.checked = false;
        radio4.checked = false;
        countofSkip = 3;
});
skipedquestion[4].addEventListener("click", function () {
        question.style.visibility = 'visible';
        answers.style.visibility = 'visible';
        resultAll+=SumOfResultSkipped();
        question.textContent = skip1[4];
        choice1.textContent = skip2[4];
        choice2.textContent = skip3[4];
        choice3.textContent = skip4[4];
        choice4.textContent = skip5[4];
        skipedquestion[4].textContent = '';
        radio1.checked = false;
        radio2.checked = false;
        radio3.checked = false;
        radio4.checked = false;
        countofSkip = 4;
        countofSkip--;
});
/* debugger; */
btn_pre.addEventListener("click", function () {

        if (countPre <= 0) {
                btn_pre.style.visibility = 'hidden';
        }
        else {
                countPre--;
                SetQuestionForBack2();
        }
        question.style.visibility = 'visible';
        answers.style.visibility = 'visible';
        btn_skip.style.visibility = 'visible';
        radio1.checked = false;
        radio2.checked = false;
        radio3.checked = false;
        radio4.checked = false;
        /*  e.preventDefault(); */
});