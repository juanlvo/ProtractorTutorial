/***
 * Section 17 Lecture 103
 * Java script object demo
 * 
 * Section 17 Lecture 104
 * Accesing javascript object
 * 
 * @author juanlvo
 */
function car() {
    this.color = "red",
    this.engine = "turbo";
    this.brand = "BMW";
    this.search="by.css('input')";
    this.getModel= function() {
        console.log("this is a 2020 model");
    }
}

module.exports = new car();
/*a.getModel(); 
console.log(a.engine);*/