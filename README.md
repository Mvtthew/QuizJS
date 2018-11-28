# QuizJS v0.4
> Made by Mateusz Ożóg

Simple JS library to create smaller and bigger quizes on your website!

![Preview Main](https://raw.githubusercontent.com/Azurixa/QuizJS/master/preview2.png)
![Preview Question](https://raw.githubusercontent.com/Azurixa/QuizJS/master/preview.png)

## Requirements for QuizJS
- JQuery 3+
- Bootstrap Bundle 4+
- Animate.css

## What's working right now?
- Initializing a new quiz
- Adding up to 10 answers for one question
- Randomizing order of answers every question
- Quiz starting page witch "Start quiz" button
- Ending of quiz with points counter
- Creating multiple quizes on one page

## How to initialize and use QuizJS

I tried to made it as simple as possible...

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

        //Selector must have class 'quiz-box'
        <div class="quiz-box" id="quiz">
        </div>

        //[NOT-REQUIRED] (if not set up, quiz will start right away) Welcome pane must have id of your quiz + '_start' and must have selector with id = "start"
        <div class="w-100 quiz-box text-center" id="quiz_start">
            <h1>Quiz start</h1>
            <button id="start" class="btn btn-lg btn-primary mt-4">Start quiz</button>
        </div>

        //[REQUIRED] Ending pane must have id of your quiz + '_end'
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
            // var quiz = new quizJS(2D array, ID of selector)
            var quiz = new quizJS(questions, "quiz");

        </script>

    </body>
</html>
```

*Covered by MIT license (c) Mateusz Ożóg*
