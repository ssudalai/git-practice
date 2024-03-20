
//class movie first parctice 

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");


console.log("Title:", casinoRoyale.title); 
console.log("Studio:", casinoRoyale.studio); 
console.log("Rating:", casinoRoyale.rating);






//Uber price programm 
class UberPricing {
    constructor(baseFare, costPerMile, costPerMinute, surgeMultiplier = 1) {
        this.baseFare = baseFare;
        this.costPerMile = costPerMile;
        this.costPerMinute = costPerMinute;
        this.surgeMultiplier = surgeMultiplier;
    }

    calculateFare(distance, duration) {
        const fareBeforeSurge = (this.baseFare + (distance * this.costPerMile) + (duration * this.costPerMinute));
        const finalFare = fareBeforeSurge * this.surgeMultiplier;
        return finalFare;
    }
}

const baseFare = 2.5; 
const costPerMile = 1.5;
const costPerMinute = 0.3; 
const surgeMultiplier = 2; 

const uberPricing = new UberPricing(baseFare, costPerMile, costPerMinute, surgeMultiplier);

const distance = 10;
const duration = 20; 

const fare = uberPricing.calculateFare(distance, duration);
console.log("Total fare: $" + fare.toFixed(2));





// details of a person in class 
class Person {
    constructor(firstName, lastName, age, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }

    getAge() {
        return this.age;
    }

    getGender() {
        return this.gender;
    }

    updateAge(newAge) {
        this.age = newAge;
    }

    updateGender(newGender) {
        this.gender = newGender;
    }
}

const person1 = new Person("John", "Doe", 30, "Male");
console.log(person1.getFullName());
console.log(person1.getAge()); 
console.log(person1.getGender()); 

person1.updateAge(35); 
person1.updateGender("Other"); 

console.log(person1.getAge()); 
console.log(person1.getGender()); 



// UML diagram to java script class
class Circle {
    constructor(radius = 1.0, color = "red") {
        this._radius = radius;
        this._color = color;
    }

    get radius() {
        return this._radius;
    }

    set radius(newRadius) {
        this._radius = newRadius;
    }

    get color() {
        return this._color;
    }

    set color(newColor) {
        this._color = newColor;
    }

    toString() {
        return `Circle: radius=${this._radius}, color=${this._color}`;
    }

    get area() {
        return Math.PI * this._radius * this._radius;
    }

    get circumference() {
        return 2 * Math.PI * this._radius;
    }
}

const circle1 = new Circle();
console.log(circle1.toString());
console.log("Area:", circle1.area); 
console.log("Circumference:", circle1.circumference); 

const circle2 = new Circle(3.5, "blue");
console.log(circle2.toString()); 
console.log("Area:", circle2.area); 
console.log("Circumference:", circle2.circumference);
