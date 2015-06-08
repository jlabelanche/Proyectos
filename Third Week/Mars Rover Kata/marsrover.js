

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  }

}




function commands(arrayofcom){
	var myRover = {
  	position: [0,0], 
  	direction: 'N'
	}
	
	for (i=0; i<arrayofcom.length; i++){
	if ((myRover.position[0] == -4) && (myRover.position[1] == 0)){
		console.log('Obstáculo en el camino. Posición'+ myRover.position)}
	else {
		if (arrayofcom[i]=='f') {
			if (myRover.position[0] == 5){
				myRover.position[0] = -5
			}
			myRover.direction='N'
			goForward(myRover);
		}
		else if (arrayofcom[i]=='b'){
			if (myRover.position[0] == -5){
				myRover.position[0] = 5
			}
			myRover.direction='S'
			goForward(myRover);
		}
		else if (arrayofcom[i]=='r'){
			if (myRover.position[1] == 5){
				myRover.position[1] = -5
			}
			myRover.direction='E'
			goForward(myRover);
		}
		else if (arrayofcom[i]="l"){
			if (myRover.position[1] == -5){
				myRover.position[1] = 5
			}
			myRover.direction='W'
			goForward(myRover);
		}
		else{
			console.log("Error en lista de comados")
		}

	}
	
}
console.log(myRover.position)
}

commands('fffrfflfff');

