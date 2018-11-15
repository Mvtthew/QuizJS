class quizJS {
    constructor(questions, elementID) {
        //Elements
        this.element = $('#'+elementID);
        this.element_end = $('#'+elementID+"_end");
        $(this.element_end).addClass('d-none');
        $(this.element).html('<div class="question-block"><span class="question-no"></span><span class="question-text"></span></div><div class="answers-block"></div>');
        this.questionBlock = this.element.children('.question-block');
        this.answerBlock = this.element.children('.answers-block');
        //Vars
        this.questions = questions;
        this.questionIndex = 0;
        this.answerLetters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G'];
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
        //Add animate.css important classes
        $(this.element).addClass('animated faster');
        //Start quiz from index = 0
        this.changeQuestion();
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
    //Text only functions
    changeQuestion(){
        //Check if we got more question to ask
        if(this.questionIndex == this.questions.length){
            //End of quiz!
            qJSendQuiz(this.element, this.element_end, this.points, this.max_points);
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
            qJSinitializeButtons(this.answerBlock);
            this.questionIndex++;
        }
    }
    //Answer buttons clicked
    makeChoice(element){
        qJSanimateChangeQuestion(this.element);
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
    hideQuiz(){
        $(this.element).addClass('hide');
    }
    showQuiz(){
        $(this.element).removeClass('hide');
    }
    //Skip question function
    // skipQuestion(){
    //     console.log(this.questionIndex);
    //     this.changeQuestion();
    // }
    //Previous question function
    // previousQuestion(){
    //     console.log(this.questionIndex);
    //     if(this.questionIndex > 1){
    //         this.questionIndex -= 2;
    //         this.changeQuestion();
    //     } else{
    //         console.log('First question');
    //     }
    // }
    badQuestionsLog(){
        console.log("Error on 'questions' -> 2D array expected, got -> ["+questions+"]");
    }
}

function qJSendQuiz(element, element_end, points, max_points){
    $(element).addClass('d-none');
    $(element_end).removeClass('d-none');
    $(element_end).find('#points').html(points);
    $(element_end).find('#max_points').html(max_points);
}

function qJSanimateChangeQuestion(element){
    $(element).addClass('zoomIn');
    window.tempQuizJS = element;
    setTimeout("$(window.tempQuizJS).removeClass('zoomIn'); window.temp1 = ''", 500);
}

function qJSinitializeButtons(element){
    //Reset function
    window.a = element;
    $(element).children('.answer').unbind();
    //Add functions to buttons
    $(element).children('.answer').click(function(){
        quiz.makeChoice(this);
    });
}
