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
            this.answerLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
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
                for(var i = 1; i < this.questions[this.questionIndex].length; i++){
                    answerHTML += '<button class="answer"><span class="answer-letter">'+this.answerLetters[i-1]+'</span><span class="answer-text">'+this.questions[this.questionIndex][i]+'</span></button>';
                }
                $(answerList).html(answerHTML);
                this.questionIndex++;
            }
        }
        //Skip question function
        skipQuestion(){
            this.changeQuestion();
        }
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
        ['Question1', 'Answerto1q_valid_A', 'Answerto1q_B', 'Answerto1q_C'],
        ['Question2', 'Answerto2q_valid_A', 'Answerto2q_B', 'Answerto2q_C'],
        ['Question3', 'Answerto3q_valid_A', 'Answerto3q_B', 'Answerto3q_C']
    ];
    var quiz = new quizJS(questions, "quiz");

    $('.skip-question').click(function(){
        quiz.skipQuestion();
    });

    $('.previous-question').click(function(){
        quiz.previousQuestion();
    });

});
