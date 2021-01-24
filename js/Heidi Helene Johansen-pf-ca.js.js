//Question 1?

    var name = "outOfStock";
    var outOfStock = "0";
    var outOfStock = true; 
    var inStock = false;


    if (outOfStock < 1) {
        console.log ("outOfStock");
    } else {
        console.log("inStock");
    }

   //Question 2?
   // Console log the value of the counter variable inside the loop only if it's equal to 17 or 20.

 for (var i = 15; i <= 25; i++){
     console.log (i);
 }

//Question 3

var raiting = [
    {tittel: "Grand Theft Auto", raiting: 4.48,}, 
    {title: "Portal 2", rating: 3.5,},
    {title: "Team Fortress", rating: null,},
    {title: "The Witcher", rating: 3.0,},
    {title: "The Elder Scrolls", rating: 2.9,},
];
console.log(raiting);

//Question 4

function whatIDontLike(winter) {
    console.log(winter);
}
console.log(typeof "winter");
//string

whatIDontLike("i dont like winter");

//Question 5?

function theNumber (fistnumber, secondnumber) {
   return fistnumber - secondnumber; 
}
var result = theNumber(7, 2);

console.log(result);

subtraction.innerHTML = "5";

//Question 6


var buttonpage = document.querySelector (".page");
var title = document.querySelector("title");
var body = document.querySelector("body");
var container = document.querySelector("h1");

function changetitle() {
    title.innerHTML = "Updated title";
}

buttonpage.onclick = changetitle;

function changestyle() {
    body.style.backgroundColor = "yellow";
    container.style.color = "green";
    container.style.fontFamily = "impact";
    title.innerHTML = "Updated title";
    container   
}

buttonpage.onclick = changestyle;


//Question 7

var buttonprice = document.querySelector (".price");
var toys = [
	{name: "Lego", price: 15.6,},
	{name: "Master of the Universe",price: "28.3",},
	{name: "Barbie",price: null,},
	{name: "Mr Potato Head",price: 89.99,},
];
console.log(toys);
