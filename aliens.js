function alien(){
	this.x = random(-400,width);
	this.y = random(0,-600);


	this.update = function(){
		this.y = this.y + 10;
		this.x = this.x + 3;
	}

	this.show = function(){
		fill(255);
		rect(this.x,this.y,0.2,15);
	}

	this.restore = function(){
		if(this.y>600){
			this.y=random(0,-600);
			this.x=random(-400,width);
		}

	}
}

function alien1(){
	this.x = random(-400,width);
	this.y = random(0,-600);


	this.update = function(){
		this.y = this.y + 5;
		this.x = this.x + 3;
	}

	this.show = function(){
		fill(255);
		rect(this.x,this.y,0.2,8);
	}

	this.restore = function(){
		if(this.y>600){
			this.y=random(0,-600);
			this.x=random(-400,width);
		}

	}
}