/* ex1*/
function showText(){
	document.getElementById('s_text').innerHTML="Hello SSB";
}
/* ex2*/
function showDate(){
	document.getElementById('s_date').innerHTML=Date();
}
/* ex3*/
function showState(){
	document.getElementById('s_state').innerHTML="Hello Javascript!";
}
/* ex4*/
function bulbOn(){
	document.getElementById('img').src="image/on.gif";
}
function bulbOff(){
	document.getElementById('img').src="image/off.gif";
}
/* ex5*/
function styleChange(){
	document.getElementById('css').style.color="red";
}
/* ex6*/
function showContent(){
	document.getElementById('con').style.display="block";
}
function hideContent(){
	document.getElementById('con').style.display="none";
}
/* ex7*/
let number1, number2;

number1 = 5;
number2 = 7;

number1 += number2;
function dataManipulate(){
	document.getElementById('res').innerHTML=number1;
}
/* ex8*/
var data = "Welcome to SS"
function dataRepeat(){
	document.getElementById('rep').innerHTML=data.repeat(3);
}
/* ex9*/
let number3, number4, value;

number3 = 10;
number4 = 10;

value = number3 == number4;
function dataValue(){
	document.getElementById('result').innerHTML=value;
}
