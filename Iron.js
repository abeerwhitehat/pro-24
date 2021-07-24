class Iron{
	constructor(x,y)
	{
	// assign options to the rubber ball
	var options={
		'density':30,
      'friction': 3.0,
      'restitution':0.8,
	}
		
		
		this.body=Bodies.rectangle(x, y, 50,50, options)
        this.width=50
        this.height=50
        
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
			fill("silver");
			//draw the ellipse here to display the rubber ball
            rect(0,0,this.height,this.width);
			pop()
	}

}