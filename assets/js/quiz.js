$(function(){

    class quizJS {
        constructor(questions, elementID) {
            //Elements
            this.element = $('#'+elementID);
            this.questionBlock = this.element.children('.question-block');
            this.answerBlock = this.element.children('.answers-block');
            this.buttons = this.element.children('.buttons-block');
            //Vars
            this.questions = questions;
            this.questionIndex = 0;
            this.answerLetters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G'];
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
                var randomnumber = Math.ceil(Math.random()*this.questions[this.questionIndex].length - 2) + 1;
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
                console.log('Quiz_over');
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
            console.log(element);
            var answered = $(element).children('.answer-text').html();
            if(answered == this.questions[this.questionIndex-1][1]){
                console.log('good');
            } else{
                console.log('bad');
            }
        }
        //Skip question function
        skipQuestion(){
            this.changeQuestion();
        }
        //Previous question function
        previousQuestion(){
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

    var questions = [
        ['Question1', 'Answerto1q_valid_A', 'Answerto1q_B', 'Answerto1q_C', 'Answerto1q_D', 'Answerto1q_E'],
        ['Question2', 'Answerto2q_valid_A', 'Answerto2q_B', 'Answerto2q_C'],
        ['Question3', 'Answerto3q_valid_A', 'Answerto3q_B', 'Answerto3q_C']
    ];
    var quiz = new quizJS(questions, "quiz");

    function initializeButtons(){
        $('.answer').click(function(){
            quiz.makeChoice(this);
        });
        $('.skip-question').click(function(){
            quiz.skipQuestion();
        });
        $('.previous-question').click(function(){
            quiz.previousQuestion();
        });
    }

});
