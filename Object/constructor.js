function Circle(radius){

    this.radius=radius;

    this.draw= function(){

        console.log("HI this is a constructor function");
    }



}

const another = new Circle(1);
another.draw();