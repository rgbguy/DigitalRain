var al = [];
var col= 100;


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

