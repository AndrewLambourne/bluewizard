function hideResults() {
    document.getElementById("results").style.display = "none";
} 

function playLucky7withValidation() {
    var startingBet = document.getElementById("myInput").value;
    
	var mCurrentAmt = startingBet;
	var totalRolls = 0;	
    var rollAtHighestAmt = 0;
	var highestAmtWon = 0; 	
	

	

	if(isNaN(startingBet) == true || (startingBet % 1 === 0) == false || startingBet <= 0) {
	var Opps = 'Please use non negative whole number greater than 0.';
	alert(Opps);
	document.getElementById("myMessage").innerHTML = Opps;
	}
	
	

    while (mCurrentAmt > 0) {
		totalRolls++;
	var dice1 = Math.floor(Math.random() * 6) + 1;
	var dice2 = Math.floor(Math.random() * 6) + 1; 
		
		console.log("totalRolls " + totalRolls + ", mCurrentAmt " + mCurrentAmt); // make sure these tags appear and are standardized with the html
	
		if((dice1 + dice2) == 7) {  
		
           mCurrentAmt += 4;
		   console.log("  LUCKY Hit -- mCurrentAmt " + mCurrentAmt);
		   if(mCurrentAmt >= highestAmtWon){
			   
			   highestAmtWon = mCurrentAmt;
			   rollAtHighestAmt = totalRolls;
			   
			   console.log("    HighestAmtWon " + highestAmtWon + ", rollAtHighestAmt " + rollAtHighestAmt );
				}
			   } 
			   else { 
            mCurrentAmt--;
			console.log("  mCurrentAmt " + mCurrentAmt);
			}
        }
        console.log('starting bet: ' + startingBet + ', highest amount won--' + highestAmtWon  + ', totalRolls: ' + totalRolls);
  console.log('rollAtHighestAmt ' + rollAtHighestAmt); 

 

    function showResults() { 
    document.getElementById("results").style.display = "inline";
    document.getElementById("playButton").innerHTML = "Play Again";
    document.getElementById("resultsBet").innerHTML = "$" + startingBet + ".00";
    document.getElementById("totalRolls").innerHTML = totalRolls;
    document.getElementById("highestAmtWon").innerHTML = "$" + highestAmtWon + ".00";
    document.getElementById("rollAtHighestAmt").innerHTML = rollAtHighestAmt;
   

   } 
    showResults();
} 