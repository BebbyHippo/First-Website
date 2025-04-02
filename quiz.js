// fininish function
function finishFunction(){
    alert ("Thank you for completing the quiz.")
}

// answer check function
function checkAnswers(){
// assign starting score to "0"
    var score = 0;
// assign the quiz elements to the quiz variable
    quiz = document.forms.Quiz.elements;
// assign the correct answer to the corresponding question
    answer1 = quiz.Classes.value;
// check answer for the first question
    if (answer1 == "12"){
// add 1 to the score if the user score is the correct answer
        score = score + 1;
    }

    answer2 = quiz.Space.value;
    if (answer2 == "5x5ft"){
        score = score + 1;
    }

    answer3 = quiz.Rogues.value;
    if (answer3 == "Intelligence"){
        score = score + 1;
    }

    answer4 = quiz.Alignment.value;
    if (answer4 == "9"){
        score = score + 1;
    }

    answer5 = quiz.Clerics.value;
    if (answer5 == "Wisdom and Charisma"){
        score = score + 1;
    }

    answer6 = quiz.Platinum.value;
    if (answer6 == "10"){
        score = score + 1;
    }

    answer7 = quiz.Spell.value;
    if (answer7 == "9"){
        score = score + 1;
    }

    answer8 = quiz.Dragon.value;
    if (answer8 == "Iron"){
        score = score + 1;
    }

    answer9 = quiz.Wizard.value;
    if (answer9 == "Elminster Aumar"){
        score = score + 1;
    }

    answer10 = quiz.Level.value;
    if (answer10 == "20"){
        score = score + 1;
    }

    alert ("Well done, your score was..." + score);
}