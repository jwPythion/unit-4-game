


//will need variables needed for: wins, losses, counter images, and targetNumber:

var random_result;
var wins = 0;
var losses = 0;
var counter = 0;
var previous = 0;


var startAndRefresh = function () {

    $(".crystals").empty();
    ///found an alternatvie way to include images into the page via the divs that were automatically created upon refresh or restart. 
    var images = [
    'https://vignette.wikia.nocookie.net/mgefanon/images/6/69/Kinetic_Crystal.jpg/revision/latest?cb=20150409231719',
    'https://static1.squarespace.com/static/53d5b207e4b0125510c263aa/542a4e1ee4b0ecd2044e4c9f/5aee3423758d46898c3d9b6f/1525560514723/amethyst1.jpg?format=500w',
    'https://3.bp.blogspot.com/-5HFRoBDSClE/VhlMLyVUcvI/AAAAAAAAGlg/CfkNUDYCPmM/s400/Light%2Bof%2Bthe%2BDesert%2Bthe%2Bworld%2527s%2Blargest%2Bfaceted%2BCerussite%2Bgem.jpg',
    'https://df2sm3urulav.cloudfront.net/tenants/gr/uploads/images/490000-494999/492248/55330ef514f9a.JPG']


    random_result = Math.floor(Math.random() * 69) + 30;

    $("#results").html("Target Number: " + random_result);

    //create four spaces/crystals that will all have recurring values of random numbers 

    for (var i = 0; i < 4; i++) {

        var randomNumber = Math.floor(Math.random() * 11) + 1;


        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": randomNumber

        });

        crystal.css({
                "background-image":"url('" + images[i] + "')", 
                "background-size":"cover"


        });

        $(".crystals").append(crystal);
    }

    $("#previous").html("Total Score: " + previous);
}


startAndRefresh();


//had to look up even delegation via google!! 
$(document).on('click','.crystal', function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total Score: " + previous);

    console.log(previous);


    //conditional statements to lose or win the game.
    if (previous > random_result) {
        losses++;
        alert("You lost!");


        //jquery functions to add wins and looses to html 
        $("#losses").html("Losses: " + losses);

        previous = 0;

    

        startAndRefresh();
    }
    else if (previous === random_result) {
        wins++;
        alert("You Win!!!");

        $("#wins").html("Wins: " + wins);
        previous = 0;


        startAndRefresh();


    }

});









