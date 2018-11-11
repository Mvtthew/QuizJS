# QuizJS v0.12c *(Not fully functional YET!)*
> Made by Mateusz Ożóg

Simple JS library to create smaller and bigger quizes on your website!

## Requirements for QuizJS
- JQuery 3+
- Bootstrap Bundle 4+

## What's working right now?
- Initializing a new quiz
- Adding up to 10 answers for one question
- Randomizing order of answers every question

## How to initialize and use QuizJS!
```
<html>
    <head>
        <!-- Bootstrap -->
        <link rel="stylesheet" href="assets/css/bootstrap.min.css">
        <!-- JQ Library / Bootstrap -->
        <script type="text/javascript" src="assets/js/jquery-3.3.1.min.js"></script>
        <script type="text/javascript" src="assets/js/bootstrap.min.js"></script>
        <!-- QuizJS -->
        <script type="text/javascript" src="assets/js/quiz.js"></script>
    </head>

    <body>
    
        <div class="quiz-box" id="quiz">
        </div>

        <script>

            //We need to made some questions and answers for our Quiz
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
