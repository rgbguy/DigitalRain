var al = [];
var col= 100;
var message = "RAIN",
  font,
  bounds, // holds x, y, w, h of the text's bounding box
  fontsize = 60,
  x, y; // x and y coordinates of the text

function setup()
{
createCanvas(windowWidth, windowHeight);



	for (var i = 0; i < 1000; i++) 
	{
		al[i] = new alien();
	}
}

function draw()
{



 noStroke();
  var random_boolean = Math.random() >= 0.98;
  if (random_boolean) 
  {
  	background (255);
  }
  else
  {
  	  background (0);
  }


	for (var i = 0; i < 1000; i++) 
	{
		al[i].show();
		al[i].update();
		al[i].restore();

	}
}

