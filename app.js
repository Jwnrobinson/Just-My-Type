let $playButton = $("#play-button");
let $content = $("#target");
let $highlight = $("#yellow-block");
let $highlightPosition = 0;
let $keyUpper = $("#keyboard-upper-container");
let $keyLower = $("#keyboard-lower-container");
let $sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let $sentenceNumber = 0;
let $sentence = $sentences[$sentenceNumber];
let $charNumber = 0;
let $letter = $sentence.substring($charNumber, $charNumber + 1);
let $mistakes = 0;
let $isTimeCounting = false;
let $startDate;
let $startTime;

    
document.addEventListener("DOMContentLoaded", function(){
    $($keyUpper).hide();
   

        $(document).keyup(function (s2){
            if (s2.which === 16) {
                $($keyUpper).show();
                $($keyLower).hide();

            }
        })
        $(document).keyup(function (s2){
            if (s2.which === 16) {
                $($keyUpper).hide();
                $($keyLower).show();
    }
})
;
$('#sentence').text($sentenceNumber);
$('#target-letter').text($charNumber);


$(document).keydown(function (s) {
    s.preventDefault();
    $('#' + s.which).addClass('highlughted');
    

    });

    $("#sentence").text($sentence);
    $("#target-letter").text($letter);
    $(document).keydown(function(s) {
        if ($isTimeCounting === false) {
            $startDate = new Date();
            $startTime =$startDate.getTime();
            $isTimeCounting = true;
        }

        if (s.which == $sentences[$sentenceNumber].charCodeAt($charNumber)) {
            let $right = $("<span>√</span>");
            $($right).addClass ('green');
            $($right).appendTo("#feedback");

           if ($highlightPosition += 21);
           $($highlight).css ("margin-left", $highlightPositon + "px");
            $charNumber++;
            $letter = $sentence.substring($charNumber, $charNumber + 1);
            $("#target-letter").text($letter);

            if ($charNumber === $sentence.length) {
                $sentenceNumber++;
                if ($sentenceNumber === $sentences.length){
                    let $endDate = new Date();
                    let $endTime = $endDate.getTime();
                    let$minutes = ($endTime-$startTime)/60000;
                    $wpm = Math.round(54/$minutes - 2 * $mistakes);

                    var j = confirm ("You type" + $wpm + "words per minute.  Would you like to try again?");

                    if (j == true) {
                        location.reload();
                    } else {
                        $sentence = $sentences[$sentenceNumber];
                        $("#sentence").text($sentence);

                        $charNumber = 0;
                        $letter = $sentence.substring($charNumber, $charNumber + 1);
                        $("#target-letter").text($letter);

                        $highlightPosition = 0;
                        $($highlight).css ("margin-left", $highlightPosition + "px");
                        $("#feedback").text("");
                    }
            }
        } else {
            let $wrong = $("<span>x</span>");
            $($wrong).addClass('red');
            $($wrong).appendTo("#feedback");
            $mistakes++;
        }
    }})})