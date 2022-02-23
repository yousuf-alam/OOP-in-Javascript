function createCircle(radius){

return{

    radius,

    draw: function(){

        console.log("HI! this is a Factory function");
    }


}

}

let circle=createCircle(5)
circle.draw();