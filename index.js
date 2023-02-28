
// dice 1
var randomNumber1 =Math.floor(Math.random()*6)+1;
var image_stat= "images/dice" + randomNumber1+ ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", image_stat);



// LESSON- UNABLE TIO LINK JS FILE TO HTML 
// SOLUTION - MAKE SURE U PLACE  THE SCRIPT TAG BEFORE YOU ENDING BODY TAG(</BODY>)
// dice 2
var randomNumber2 =Math.floor(Math.random()*6)+1;
var image_stat2= "images/dice" + randomNumber2+ ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", image_stat2);

//  winner statement 
if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins  🚩"
}

else { if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="ITS A DRAW."
}

else{
    document.querySelector("h1").innerHTML="Player 2 wins  🚩"

}


}