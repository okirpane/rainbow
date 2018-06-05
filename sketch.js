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
	capture.size(640, 800);
	capture.hide();
	fill(0);
}
function draw(){
	background(255);
	capture.loadPixels();
	//image(capture, width/2-capture.width/2, height/2-capture.height/2, 640, 480);
	var size = round(constrain(8, 6, 32));
	for (var x = 0; x < height; x+= size){
		for (var y = 0; y < width; y += size){
			var i = y * width + x;
			var darkness = (255 - capture.pixels[i*4])/255;
			var radius = size * darkness;
			fill(h, 200, 100);
			ellipse(x + (width/2-capture.width/2), y + 150 + (height/2-capture.height/2), radius, radius);
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