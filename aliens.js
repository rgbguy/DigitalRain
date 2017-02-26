function alien(){
	this.x = random()*width;
	this.y = random(0,-600);


	this.update = function(){
		this.y = this.y + 10;
	}

	this.show = function(){
		fill(255);
		rect(this.x,this.y,1,15);
	}

	this.restore = function(){
		if(this.y>600){
			this.y=random(0,-600);
			this.x=random()*width;
		}

	}
}