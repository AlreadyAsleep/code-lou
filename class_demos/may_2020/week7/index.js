
var firstLink = document.querySelectorAll('a:nth-child(3)');



var secondButton = document.querySelectorAll('button:nth-child(2)');
console.log(secondButton[0]);
secondButton[0].onclick = function(){
  alert('hello');
}