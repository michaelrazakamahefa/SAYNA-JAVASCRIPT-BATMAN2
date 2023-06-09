$(document).ready(function(){
    const demarrer = document.getElementById('demarrer');
    const nextbutton = document.getElementById('question-suivante');

    demarrer.addEventListener('click', (e) => {
        e.preventDefault;
        showQuestions();
        $.ajax({
            url: 'https://octopus-app-2u6og.ondigitalocean.app/questions/all',
            datatype: 'json',
            success: function(quizz){
                for(let i = 0; i < quizz.length; i++) {
                    console.log(quizz[i].response);
                }    
            },
            error: function(){
                console.log('impossible de se connecter');
            },
        });
    });
    
});


function showQuestions() {
    const question = document.getElementById('questions');
    question.style.display = 'block';
    const demarrer = document.getElementById('entete');
    demarrer.style.display = 'none';
    $('#question-suivante').show();
} 