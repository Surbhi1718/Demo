// Constructor function: used to create objects
// Name: pascal notation - each and every first letter should be in capital letter. e.g, OneTwoThreeFour

function circle(radius)
{
    this.radius = radius;   //this means it is pointing to the current object
    this.draw = function(){
        console.log('draw', radius);
    }
}

//how to call constructor function: use new keyword

const a = new circle(17);
console.log(a);
console.log(a.radius);
a.draw();