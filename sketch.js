var al = [];
var al1 = [];

function setup(){

createCanvas(1200,600);

	for (var i = 0; i < 500; i++) {
		al[i] = new alien();
	}
	

	for (var i = 0; i < 500; i++) {
		al1[i] = new alien1();
	}
}

function draw(){

background(135,206,250);

for (var i = 0; i < 500; i++) {
		al[i].show();
		al[i].update();
		al[i].restore();
	}

for (var i = 0; i < 500; i++) {
		al1[i].show();
		al1[i].update();
		al1[i].restore();
	}

	

}

