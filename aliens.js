function alien()
{

	this.speedx = 5;
	this.speedy = 10*random(0,0.5);
	
	this.x = random(-400,width);
	this.y = random(0,-600);


	this.update = function()
	{
		this.y = this.y + this.speedy + 5;
		this.x = this.x + 2;
	}

	this.show = function()
	{
		fill(255);
		rect(this.x,this.y,0.5,5*this.speedy);
	}

	this.restore = function()
	{
		if(this.y>windowHeight)
		{
			this.y=random(0,-600);
			this.x=random(-1000,width);
		}

	}
}

