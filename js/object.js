// objects:
// can be considerd as collection of key value pair
// has property and methods
// object creation
let rect = {
    length:8,
    breadth:10,
    //behaviour-> function-> METHOD do well defined task
    draw: function(){
        console.log('draw');
    },
    area: function(length,breadth){
        console.log(length*breadth);
    }
};
// rect
// {length: 8, breadth: 10, draw: ƒ, area: ƒ}
// rect.length
// 8
// rect.draw();
// object.js:10 draw

// OBJECT CREATION: -> Factory fn, Constructor fn
// factory fn
function createRectangle(length,breadth)
{
    return rectangle={
        length, //same as length:length,
        breadth,
        draw: function(){
            console.log('drawing rectangle');
        }
    }; 
    // return rectangle;
}
let rect1=createRectangle(5,4);

// constructor fn-> pascal notation-> first letter of every word is caps
function Rectangle(l,b){
    this.length=l;
    this.breadth=b;
    this.draw=function(){
        console.log('drawing rectangle');
    }

}
let rectobj=new Rectangle(8,10); //new gives empty object

// DYNAMIC NATURE OF OBJECTS:
// Addition and removale
rectobj.color='red'; //addition
delete rectobj.color; //deletion

// constructor property
/*rectobj.constructor //console
ƒ Rectangle(l,b){
    this.length=l;
    this.breadth=b;
    this.draw=function(){
        console.log('drawing rectangle');
    }

} */


