# QuizJS v0.2 *(Not fully functional YET!)*
> Made by Mateusz Ożóg

Simple JS library to create smaller and bigger quizes on your website!

## Requirements for QuizJS
- JQuery 3+
- Bootstrap Bundle 4+
- Animate.css

## What's working right now?
- Initializing a new quiz
- Adding up to 10 answers for one question
- Randomizing order of answers every question
- Ending of quiz with points counter!

## How to initialize and use QuizJS!
```
<html>
    <head>
        <!-- Bootstrap / Animate.css / Custom styles -->
        <link rel="stylesheet" href="assets/css/bootstrap.min.css">
        <link rel="stylesheet" href="assets/css/animate.css">
        <!-- JQ Library / Bootstrap -->
        <script type="text/javascript" src="assets/js/jquery-3.3.1.min.js"></script>
        <script type="text/javascript" src="assets/js/bootstrap.min.js"></script>
        <!-- QuizJS -->
        <script type="text/javascript" src="assets/js/quiz.js"></script>
        <link rel="stylesheet" href="assets/css/quizjs.css">
    </head>

    <body>

        //Must have class 'quiz-box'
        <div class="quiz-box" id="quiz">
        </div>

        //Ending pane must have id of your quiz + '_end'
        <div class="w-100 quiz-box text-center" id="quiz_end">
            <h1>Congratulations</h1>
            <p>You ended a quiz!</p>
            <p>Good answers <span id="points"></span>/<span id="max_points"></span></p>
        </div>

        <script>

            //First we need to made some questions and answers for our Quiz
            var questions = [
                ['Question1', 'Good answer', 'Bad answer', 'Bad answer'],
                ['Question2', 'Good answer', 'Bad answer', 'Bad answer'],
                ['Question3', 'Good answer', 'Bad answer', 'Bad answer']
            ];

            // If we got questions just create new quiz in JS
            // var quiz = new quizJS(2D array, ID of element in html)
            var quiz = new quizJS(questions, "quiz");

        </script>

    </body>
</html>
```
