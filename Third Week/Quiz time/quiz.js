var user={}
var responses=[]

function ask_name() {
	var name=prompt('What is your name?')
	 console.log (name);
	 user.name=name

}

ask_name();

function yesorno_question(){
	var yesorno=prompt('¿La tierra gira alrededor del sol (Yes/No?')
	if  (yesorno.toLowerCase() ==='yes'){
		yesorno=true;
		console.log(yesorno)
	}
	else if (yesorno.toLowerCase() ==='no'){
		yesorno=false;
		console.log(yesorno)
	}
	else {
	 	alert("Please, yes or not answer!")
	 	return yesorno_question();
	}	
	
 responses.push(yesorno)

}

yesorno_question();


function multiplechoice(){
	var multiple=prompt('How do you say dog in Spanish?(Perro/Gato/Caballo');

 switch (multiple.toLowerCase()) {
  case 'perro':
    multiple=true;
  break;

  case 'gato':
    multiple=false;
  break;

  case 'caballo':
    multiple=false;
  break;

  default:
    alert('Not a good answer');
    return multiplechoice()
  break;
}	
responses.push(multiple)	
}

multiplechoice();

console.log(responses.length)

ntrue=0;
nfalse=0;
for (i=0; i<responses.length; i++){

	if (responses[i]===true){
		var ntrue=ntrue+1;
	}
	else {
		var nfalse=nfalse+1;
	}

}

console.log("Número de respuestas correctas="+ ntrue)
console.log("Número de respuestas incorrectas="+ nfalse)

