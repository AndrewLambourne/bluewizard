function hideResults() {
    document.getElementById("results").style.display = "none"; //This reveals the outcome when the dice are rolled.
} 

function playLucky7withValidation() {
    var startingBet = document.getElementById("myInput").value;  // starts the game
    
	var mCurrentAmt = 0;                                      // defines the variables 
	var totalRolls = 0;	
    var rollAtHighestAmt = 0;
	var highestAmtWon = 0; 	
	
	if(isNaN(startingBet) == true || (startingBet % 1 === 0) == false || startingBet <= 0) {
	var Opps = 'Please use non negative whole number greater than 0.';       // this checks to make sure the input is a numners, checks for remainders amd makes sure the input is larger than zero; plays an alert if the wrong input is given
	alert(Opps);
	document.getElementById("myMessage").innerHTML = Opps;
	return;
	}
	
mCurrentAmt = parseInt (startingBet);	// this is included because sometimes the dice rolls would bug out and be treated like strings rather than integers. 

    while (mCurrentAmt > 0) {
		totalRolls++;
	var dice1 = Math.floor(Math.random() * 6) + 1;
	var dice2 = Math.floor(Math.random() * 6) + 1;                       // the dice roller itself 
		
		console.log("totalRolls " + totalRolls + ", mCurrentAmt " + mCurrentAmt); // make sure these tags appear and are standardized with the html
	
		if((dice1 + dice2) == 7) {                   // LUCKY 7! 
		
           mCurrentAmt += 4;
		   console.log("  LUCKY Hit -- mCurrentAmt " + mCurrentAmt);
		   if(mCurrentAmt > highestAmtWon && mCurrentAmt > startingBet){            //  checks results of concurrent rolls and logs hightest results and wins above the starting amount (if any) 
			   
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
 
    document.getElementById("results").style.display = "inline";             // results called by the html document
    document.getElementById("playButton").innerHTML = "Play Again";
    document.getElementById("resultsBet").innerHTML = "$" + startingBet + ".00";
    document.getElementById("totalRolls").innerHTML = totalRolls;
    document.getElementById("highestAmtWon").innerHTML = "$" + highestAmtWon + ".00";
    document.getElementById("rollAtHighestAmt").innerHTML = rollAtHighestAmt;
   
} 