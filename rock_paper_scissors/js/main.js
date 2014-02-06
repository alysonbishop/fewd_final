var humanScore=0;
var	computerScore=0;

document.getElementById("rock").onclick=chooseRock;
function chooseRock ()
{
	var randomWeapon=botWeapon();
	if (randomWeapon=="rock"){
		document.getElementById("status").textContent="you played rock The bot played rock. You tied. :|";
	}
	else if(randomWeapon=="paper"){
		computerScore+=1;
		document.getElementById("status").textContent="you played rock the bot played paper.Bot wins";
		document.getElementById("computerScore").textContent=computerScore;
	}
	else if(randomWeapon=="scissors"){
		humanScore+=1;
		document.getElementById("humanScore").textContent=humanScore;
		document.getElementById("status").textContent="you played rock the bot played scissors. You win";
	}

}	
document.getElementById("scissors").onclick=chooseScissors;
function chooseScissors ()
{	
	var randomWeapon=botWeapon();
	if (randomWeapon=="scissors"){
		document.getElementById("status").textContent="You played scissors The bot played scissors. You tied. :|";
	}
	else if(randomWeapon=="rock"){
		computerScore+=1;
		document.getElementById("status").textContent="You played scissors the bot played rock. Bot Wins";
		document.getElementById("computerscore").textContent=computerScore;
	}
	else if(randomWeapon=="paper"){
		humanScore+=1;
		document.getElementById("humanScore").textContent=humanScore;
		document.getElementById("status").textContent="You played scissors the bot played paper. You Win ";
	}

}
document.getElementById("paper").onclick=choosePaper;
function choosePaper ()	
{	
	var randomWeapon=botWeapon();
	if (randomWeapon=="paper"){
		document.getElementById("status").textContent="You played paper.The bot played paper. You tied. :|";
	}
	else if(randomWeapon=="rock"){
		humanScore+=1;
		document.getElementById("status").textContent="You played paper the bot played rock. You Win";
		document.getElementById("humanScore").textContent=humanScore;
	}
	else if(randomWeapon=="scissors"){
		computerScore+=1;
		document.getElementById("computerScore").textContent=computerScore;
		document.getElementById("status").textContent="You played paper the bot played scissors. Bot wins";
	}

}		


function botWeapon(){
	var randomWeaponNumber=Math.random();
	var randomWeapon="";
	if(randomWeaponNumber<.33){
		randomWeapon="scissors";
	}
	else if(randomWeaponNumber<.67){
		randomWeapon="paper";
	}
	else{
		randomWeapon="rock";
	}
	return randomWeapon;
}