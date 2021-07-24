class Stone{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options={
		'density':30,
      'friction': 3.0,
      'restitution':0.8,
	}
		
		
		this.body=Bodies.circle(x, y, r, options)
        this.r=r
        
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			//draw the ellipse here to display the rubber ball
            ellipse(0,0,this.r,this.r);
			pop()
	}

}