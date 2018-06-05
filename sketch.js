var letter;
var capture;
var c = 0;
var h = 0;

function setup(){
	createCanvas(windowWidth, windowHeight);
	frameRate(60);
	noStroke();
	colorMode(HSB, 100);
	capture = createCapture(VIDEO);
	capture.size(width, height);
	capture.hide();
	fill(0);
}
function draw(){
	background(255);
	
	//image(capture, 0, 0, width, height);
	capture.loadPixels();
	var size = round(constrain(8, 6, 32));
	for (var x = 0; x < width; x+= size){
		for (var y = 0; y < height; y += size){
			var i = y * width + x;
			var darkness = (255 - capture.pixels[i*4])/255;
			var radius = size * darkness;
			fill(h, 200, 100);
			ellipse(x , y, radius, radius);
		}
	}
	fill(h, 150, 100);
    textFont('Helvetica');
    textSize(36);
    text('RAINBOW!', width/2-100, 40);
	h+=3; //make rainbow colors change
    if (h>=100) {
      h=0;
    }
}
