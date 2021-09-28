$(document).ready(function(){
$("keyboard-upper-container").hide();
});

$(document).keydown(function(s){
if(s.keycode == 16) {
    $("keyboard-lower-container").hide();
    $("keyboard-upper-container").show();   
}
});
$(document).keyup(function(s){
    if(s.keycode == 16) {
        $("keyboard-upper-container").hide();
        $("keyboard-lower-container").show(); 
    }
});


$(document).keypress(function(s){
if(s.keycode == '') {
    $(document.css("background-color", "yellow"));
} 
    });

$("sentence")
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 
                     'Too ato too nOt enot one totA not anot tOO aNot',
                     'oat itain oat tain nate eate tea anne inant nean', 
                     'itant eate anot eat nato inate eat anot tain eat', 
                     'nee ene ate ite tent tiet ent ine ene ete ene ate'];

let lettersIndex = 0;
let sentenceIndex = 0;
let sentence;
let sentEnd;
let letters;
let target;
let checkLetters;

printSentence();
$(document).keypress( function(){
    typeLetters();
    Feedback();
});
function printSentence(){
    sentence = sentences[sentenceIndex];
    letters = sentence.split ('', sentence.length);
    checkLetters = letters;
    lettersIndex = 0;

    do{
        $("#sentence").append ('<span id="letters${lettersIndex}">${letters[lettersIndex]}</span>');
        letters++;
    } while(lettersIndex < sentence.length);
    lettersIndex = 1;
    sentenceIndex++;
    $('#letters${[0]}').css("background-color", "yellow");
    if (lettersIndex > 0) {
        $('#letters${lettersIndex}').prev().css("background-color", "white");
    };

    lettersIndex++;
    sentEnd = lettersIndex - 1;

    if (sentence.length=== lettersIndex -1) {
    $("#sentence").empty();
        printSentence();
    };

    function target () {
        $("#target-letter").empty();
        if (letters[lettersIndex]=== ' ') {
            $("target-letter").append('<span id ="target">[ SPACE ]</span>');
        } else if (lettersIndex < sentence.length){
            $("#target-letter").append('<span id="target">${letters[lettersIndex]}</span>');
        };

        };
    function Feedback (){
        $(document).keypress(function(){
            if (letters[lettersIndex] == $('#letters${lettersIndex}').keypress()){
                $("#Feedback").empty();
                $("#feedback").append ('<span class="glyphicon glyphicon-ok"></span>');
            } else if (letters[lettersIndex] != s.key.charCodeAt()){
                $("#feedback").empty();
                $("#feedback").append('<span class="glyphicon glyphicon-remove"></span>');
            }
        })
    }

    };
