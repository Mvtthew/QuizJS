# QuizJS v0.12a
> Made by Mateusz Ożóg

## Not fully functional YET!

Simple JS library to create smaller and bigger quizes on your website!

### Requirements for QuizJS
- JQuery 3+
- Bootstrap Bundle 4+

## How to initialize and use QuizJS!
```
<!-- In HTML file -->

<div class="quiz-box" id="quiz">
</div>

<script>
    //We need to made some questions and answers for our Quiz
    var questions = [
        ['Question1', 'Answerto1q_valid_A', 'Answerto1q_B', 'Answerto1q_C'],
        ['Question2', 'Answerto2q_valid_A', 'Answerto2q_B', 'Answerto2q_C'],
        ['Question3', 'Answerto3q_valid_A', 'Answerto3q_B', 'Answerto3q_C']
    ];

    // If we got questions just create new quiz in JS
    // var quiz = new quizJS(2D array, ID of element in html)
    var quiz = new quizJS(questions, "quiz");
</script>
```
