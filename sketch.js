var al = [];
var col= 100;
var c= 80;
var d= 100;

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

  col = mouseX/3;
  c,d = mouseY/3;
  var random_boolean = Math.random() >= 0.98;
  if (random_boolean) 
  {
  	background (255);
  }
  else
  {
  	  background (100,100,100);
  }


	for (var i = 0; i < 1000; i++) 
	{
		al[i].show();
		al[i].update();
		al[i].restore();

	}
}

