/*   let p1 = 8;
    let p2 = 8;

function add(p1,p2){ // this essentially does whatever operation to the values
    return p1+p2;
}
console.log(add(p1,p2)) */

//object

const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  /* fullName : function() {
    return this.firstName + " " + this.lastName;
  },
  everyThing : function(){
     return this.firstName + " " + this.lastName +" " +this.id
  } */
};
/* console.log(person.fullName());
console.log(person.everyThing()); */


//I like this a lot more, easier to understand, above is too over complicated
let fullName = person.firstName + person.lastName + person.id;

console.log(fullName)