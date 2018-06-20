//js file
(function (){
	console.log("js file loaded");
	//var
	var num1=document.querySelector("#input1");
	var num2=document.querySelector("#input2");
	var equals= document.querySelector("#trigger");
	var outcome=document.querySelector("#value");
	var setPlus= document.querySelector("#plus");
	var setMinus= document.querySelector("#minus");
	console.log(num1);
	console.log(num2);
	console.log(equals);
	console.log(outcome);
	console.log(setPlus);
	console.log(setMinus);


	//function
	function addStuff (argument) {
		// body...
		//console.log("from addStuff");
		console.log(num1.value);
		console.log(num2.value);
		var total=parseInt(num1.value) + parseInt(num2.value);
		//console.log(total);
		outcome.innerHTML=total;
	}
	function selCal(evt){
		//console.log("From selCal");
		/*if (selPlus.innerHTML == "+") {
			console.log("User clicked +");
		}
		else{
			console.log("User clicked -");
		}*/
		//console.log(evt.currentTarget.id);
		if (evt.currentTarget.id == "plus") {
			console.log("add");
		}else{
			console.log("sub");
		}
	}
	//listners
	equals.addEventListener("click",addStuff,false);
	setPlus.addEventListener("click",selCal,false);
	setMinus.addEventListener("click",selCal,false);
})();