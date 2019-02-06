//write function called randomCircle - takes 2 inputs, color and, size
//write a for loop that draws circles in random location
//repeatedly looping through an array of 10 shades of grey

var myArray = [20, 50, 70, 100, 120, 150, 200, 220, 230, 250]; //replace... with a comma speraated list


function setup() {	
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	for (var i = myArray.length - 1; i >= 0; i--) {
	randomCircle(myArray[i], 100);
	}
		//draw each random circle with and iterating shade

}

function randomCircle(shade, size){
	var xloc = random(width);
	var yloc = random(height);
	fill(shade);
	ellipse(xloc, yloc, size, size);
//stuff to draw circle	
}