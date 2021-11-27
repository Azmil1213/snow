class Snow{
    constructor(x){

        this.body=Matter.Bodies.circle(x,0,25)
        this.image=loadImage("snow5.webp")
        this.x=x
        this.y=0
        this.r=25
        Matter.World.add(world,this.body) 
    }

    display(){
        imageMode(CENTER)
        image (this.image,this.body.position.x,this.body.position.y,50,50)
        console.log(this.body.position)
    }
}