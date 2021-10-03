class Link{
    constuctor(bodyA, bodyB){
        var lastLink=bodyA.body.bodies.length-1;
        this.link = Constraint.create({
            bodyA: bodyA.body.bodies[lastLink],
            bodyB: bodyB,
            length: -10,
            stiffness: 0.01
        })
        World.add(world, this.link)
    }

    
}