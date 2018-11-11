$(function(){

    class quizJS {
        constructor(questions, elementID) {
            //Elements
            this.element = $('#'+elementID);
            $(this.element).html('<div class="question-block"><span class="question-no"></span><span class="question-text"></span></div><div class="answers-block"></div>');
            this.questionBlock = this.element.children('.question-block');
            this.answerBlock = this.element.children('.answers-block');
            //Vars
            this.questions = questions;
            this.questionIndex = 0;
            this.answerLetters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G'];
            this.userAnswers = [];
            //Check for errors
            if(questions[0].constructor !== Array){
                this.badQuestionsLog();
            }
            //Initialize quiz
            this.firstInitialize();
        }
        firstInitialize(){
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
                // TODO
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
                initializeButtons();
                this.questionIndex++;
            }
        }
        //Answer buttons clicked
        makeChoice(element){
            var answered = $(element).children('.answer-text').html();
            if(answered == this.questions[this.questionIndex-1][1]){
                this.userAnswers[this.questionIndex-1] = true;
                console.log('good');
            } else{
                this.userAnswers[this.questionIndex-1] = false;
                console.log('bad');
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
        previousQuestion(){
            console.log(this.questionIndex);
            if(this.questionIndex > 1){
                this.questionIndex -= 2;
                this.changeQuestion();
            } else{
                console.log('First question');
            }
        }
        badQuestionsLog(){
            console.log("Error on 'questions' -> 2D array expected, got -> ["+questions+"]");
        }
    }
    function initializeButtons(){
        //Reset function
        $('.answer').unbind();
        //Add functions to buttons
        $('.answer').click(function(){
            quiz.makeChoice(this);
        });
    }
});
