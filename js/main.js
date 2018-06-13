//js file
(function (){
	console.log("js file loaded");
	//var
	var num1=document.querySelector("#input1");
	var num2=document.querySelector("#input2");
	var equals= document.querySelector("#trigger");
	var outcome=document.querySelector("#value");
	console.log(num1);
	console.log(num2);
	console.log(equals);
	console.log(outcome);


	//function
	function addStuff (argument) {
		// body...
		console.log("from addStuff");
	}
	//listners
	equals.addEventListener("click",addStuff,false);
})();