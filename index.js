var randomNumber1 = Math.floor(Math.random() * 6) +1;

    randomimages = "dice" + randomNumber1 + ".png";

    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src" , randomimages);


    var randomNumber2 = Math.floor(Math.random() * 6) +1;

    randomimages = "dice" + randomNumber2 + ".png";

    var image2 = document.querySelectorAll("img")[1];

    image2.setAttribute("src" , randomimages);


    if ( randomNumber1 > randomNumber2 ) {
        document.querySelector("h1").innerHTML = "Player 1 wins! " ;
    } else if ( randomNumber1 < randomNumber2 ) {
        document.querySelector("h1").innerHTML = "Player 2 wins!" ; 
    } else if ( randomNumber1 = randomNumber2 ) {
        document.querySelector("h1").innerHTML = "Draw!" ;   
    }    