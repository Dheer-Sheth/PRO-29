class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic: true


        }
        this.body= Bodies.rectangle(450,390,900,20,options);
        World.add(world, this.body);
    }
    display(){
        strokeWeight(2);
        fill("blue")
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        
    }
}