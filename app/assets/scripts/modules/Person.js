 function Person(fullName, favColor) {
 	this.name = fullName;
 	this.favoriteColor = favColor;
 	this.greet = function() {
 		console.log("Hello there, " + this.name + ". I like the color " + this.favoriteColor + ".");
 	}
 }

module.exports = Person;

// --------------------------------------------------------------------------------

//function person(name, favColor) {
//	console.log("Hello There, " + name + ". I like the color " + favColor + ".");
//}

//var john = {
//	name: "John Doe",
//	favouriteColor: "blue",
//	greet: function() {
//		console.log("Hello There," + john.name + ". I like the color " + john.favouriteColor + ".");
//	}
//}

//john.greet();

//person(john.name, john.favouriteColor);
//person("Jane Smith", "green");