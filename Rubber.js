class Rubber{
	constructor(x,y,radius){
	// assign options to the rubber ball
	var options={
		restitution:0.8,
		friction:5,
		density:1
	}
		
		this.body=Bodies.circle(725,370, 40, options);
		this.radius=40;
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;	
			var angle= this.body.angle;	
			push(); 
			translate(rubberpos.x, rubberpos.y);
			rotate(angle);

			ellipseMode(RADIUS)
			strokeWeight(3);
			stroke("khaki");
			fill("maroon");
			//draw the ellipse here to display the rubber ball
            ellipse(0,0,40);
			pop()
	}

}