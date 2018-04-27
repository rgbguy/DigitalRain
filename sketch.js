var al = [];


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
background(135,206,250);

	for (var i = 0; i < 1000; i++) 
	{
		al[i].show();
		al[i].update();
		al[i].restore();
	}
}

