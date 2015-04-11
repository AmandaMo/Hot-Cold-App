
$(document).ready(function(){
	
	var chosenNumber = Math.floor((Math.random() * 100) + 1);
	
	

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$("input.button").click(function(){
  		var guess= $("#userGuess").val();
  			if (guess>0 && guess%1===0 && guess<100){
  				$("ul.guessBox").append("<li>"+ guess +"</li>");
  				$("#userGuess").val("");
  			}
  			else {
  				window.alert("Please enter a valid integer between 1 and 100.");
  				$("#userGuess").val("");
  			}
  	});

});


