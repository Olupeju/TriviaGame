$('#start').on('click', function () {
    // subwrapper will remove start button and replace with questions
    // $('#subwrapper').remove();
    game.start();
})

var questions = [{
    question:"Which island's languages include the following: Arabic, English, Farsi and Urdu?",
    answers: ["Barker Island","Benin","Barbados","Bahrain"],
    correctAnswer:"Bahrain"

}, {
    question: "By weight, what culinary fruit is eaten more than any other in North America?",
    answers:["Blueberry","Banana","Boysenberry","Breadfruit"],
    correctAnswer:"Banana"
}, {
    question: " What was the former name of Belize?",
    answers:["British Honduras","British Guinea","British Virgin Islands","Belmopan"],
    correctAnswer:"British Honduras"

}, { question: "Which actress played Camille Javal?",
    answers:["Billy Bragg","Bonnie Bedelia","Brigitte Bardot","Billie Burke"],
    correctAnswer:"Brigitte Bardot"

},{
    question: "In the early 1700s in England, what animals were named in an 'Act' that declared them dangerous?",
    answers:[" Black Cats","Blue Whales","Beavers","Black Leopards",],
    correctAnswer: " Black Cats"
}, {
    question: "In what town was the Lego Company founded?",
    answers:["Ballerup"," Billund","Borup","Brabrand",],
    correctAnswer:"Billund"
}, {
    question: "Minoan women on the Greek island of Crete invented the what?",
    answers:["Boa","Bath","Bikini","Bra",],
    correctAnswer:"Bra"
}];


var game = {
    correct: 0,
    incorrect: 0,
    // seconds
    counter: 40,
    countdown: function () {
        // create counter function that will 'start' below
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("Time is up");
            //  run when game is done
            game.done();
        }
    },
    start: function () {
        
        timer = setInterval(game.countdown,1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">40</span> Seconds</h2>');
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            // append to subwrapper
            $('#subwrapper').append('<h2>' + questions[i].question + '</h2');
            // subloop
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#subwrapper").append("<input type='radio' name='question-" +i+ "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
            }
        }
    },
    done: function(){
        $.each($("input[name='question-0']:checked"),function() {
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"),function() {
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"),function() {
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"),function() {
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"),function() {
            if($(this).val()==questions[4].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        
        $.each($("input[name='question-5']:checked"),function() {
            if($(this).val()==questions[5].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        
        
        this.result();
    },
    result: function(){
        clearInterval(timer);
        $('#subwrapper h2').remove();
        $('#subwrapper').html("<h3>All done!</h3>");
        // print all correct and incorrect answers
        $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
        $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
        // print questions not answered
        $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
    }
}


