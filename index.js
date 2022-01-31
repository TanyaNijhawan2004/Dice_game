var randomNumber1=Math.floor(Math.random() * 6) + 1;
// creating a random number between 0 to 0.9999 and then 
// multiplying with 6 to get number between 0 to 5.9999
// and then using floor to change to whole number and adding 1 
// so that it is between 1 and 6
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
// using concatination to get the path from dice to dice 6
var randomImageSource1="images/"+ randomDiceImage1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice"+randomnumber2+".png";
var randomImageSource2="images/"+randomDiceImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if(randomNumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 wins 🎊";
}
else if(randomnumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins🎊";
}
else{
    document.querySelector("h1").innerHTML="Draw Battle";
}

