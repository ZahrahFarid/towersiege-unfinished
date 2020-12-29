class stand {
constructor  (x,y,width,height){

    var options = {

isStatic : true

    }

this.body = Bodies.rectangle(x,y,width,height)
this.width = width
this.height = height
World.add(world,this.body)
}

display(){
var pos = this.body.position;
rectMode(CENTER);
rect(this.x,this.y,this.width,this.height);









}






}