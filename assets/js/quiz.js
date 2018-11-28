class quizJS {
    constructor(questions, elementID) {
        //Elements
        this.element = $('#'+elementID);
        $(this.element).addClass('d-none');
        this.element_start = $('#'+elementID+"_start");
        this.element_end = $('#'+elementID+"_end");
        $(this.element_end).addClass('d-none');
        $(this.element).html('<div class="question-block"><span class="question-no"></span><span class="question-text"></span></div><div class="index-block"></div><div class="answers-block"></div>');
        this.questionBlock = this.element.children('.question-block');
        this.indexBlock = this.element.children('.index-block');
        this.answerBlock = this.element.children('.answers-block');
        //Vars
        this.questions = questions;
        this.questionIndex = 0;
        this.answerLetters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        this.userAnswers = [];
        this.points = 0;
        this.max_points = this.questions.length;
        //Check for errors
        if(questions[0].constructor !== Array){
            this.badQuestionsLog();
        }
        //Initialize quiz
        this.firstInitialize();
    }
    firstInitialize(){
        //Start quiz from index = 0
        if($(this.element_start).length > 0){
            //Hide quiz and show a fist page
            qJSinitializeButtons(this.element_start, this);
        } else{
            //If there is not starting quiz element just show 1st question
            this.startQuiz();
        }
    }
    startQuiz(){
        $(this.element).removeClass('d-none');
        this.changeQuestion();
    }
    startQuizFromButton(){
        qJSanimateOut(this.element_start);
        this.startQuiz();
    }
    //Randomize questions
    randomizeAnswers(){
        var randomizedIndexes = [];
        var randomizedAnswers = [];
        while(randomizedIndexes.length < this.questions[this.questionIndex].length - 1){
            var randomnumber = Math.ceil(Math.random()*(this.questions[this.questionIndex].length - 1));
            if(randomizedIndexes.indexOf(randomnumber) > -1) continue;
            randomizedIndexes[randomizedIndexes.length] = randomnumber;
        }
        for(var i = 0; i < this.questions[this.questionIndex].length - 1; i++){
            randomizedAnswers[i] = this.questions[this.questionIndex][randomizedIndexes[i]];
        }
        return randomizedAnswers;
    }
    //Make indexes
    initIndexes(){

    }
    //Text only functions
    changeQuestion(){
        qJSanimateIn(this.element);
        //Check if we got more question to ask
        if(this.questionIndex == this.questions.length){
            //End of quiz!
            this.endQuiz();
        } else{
            //Elements
            var questionBlockNumber = $(this.questionBlock).children()[0];
            var questionBlockText = $(this.questionBlock).children()[1];
            var answerList = $(this.answerBlock);
            //Cange number and text of question
            $(questionBlockNumber).html((this.questionIndex+1)+".");
            $(questionBlockText).html(this.questions[this.questionIndex][0]);
            //Add buttons
            var answerHTML = '';
            var randomAnswers = this.randomizeAnswers();
            for(var i = 1; i < this.questions[this.questionIndex].length; i++){
                answerHTML += '<button class="answer"><span class="answer-letter">'+this.answerLetters[i]+'</span><span class="answer-text">'+randomAnswers[i-1]+'</span></button>';
            }
            $(answerList).html(answerHTML);
            qJSinitializeButtons(this.answerBlock, this);
            this.questionIndex++;
        }
    }
    //Answer buttons clicked
    makeChoice(element){
        var answered = $(element).children('.answer-text').html();
        if(answered == this.questions[this.questionIndex-1][1]){
            this.userAnswers[this.questionIndex-1] = true;
            console.log('Good answer');
            this.points++;
        } else{
            this.userAnswers[this.questionIndex-1] = false;
            console.log('Bad answer');
        }
        this.changeQuestion();
    }
    endQuiz(){
        $(this.element).addClass('d-none');
        $(this.element_start).addClass('d-none');
        $(this.element_end).removeClass('d-none');
        qJSanimateIn(this.element_end);
        qJSendQuiz(this.element_end, this.points, this.max_points);
    }
    badQuestionsLog(){
        console.log("Error on 'questions' -> 2D array expected, got -> ["+questions+"]");
    }
}

function qJSendQuiz(element_end, points, max_points){
    $(element_end).find('#points').html(points);
    $(element_end).find('#max_points').html(max_points);
}

function qJSanimateIn(element){
    //Animate.css IN-type animation here:
    $(element).addClass("animated faster zoomIn");
    window.tempQuizJS = element;
    setTimeout("$(window.tempQuizJS).removeClass('animated faster zoomIn'); window.temp1 = ''", 500);
}

function qJSanimateOut(element){
    $(element).addClass("animated faster zoomOut");
    $(element).addClass("h-0");
}

function qJSinitializeButtons(element, quizClass){
    $(element).find('.answer').unbind();
    //Add functions to buttons
    $(element).find('#start').click(function(){
        quizClass.startQuizFromButton();
    });
    $(element).find('.answer').click(function(){
        quizClass.makeChoice(this);
    });
}
