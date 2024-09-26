// This is my first Javascript code.ever. you better get a co op. 9/26/24.
console.log('Hello world');


function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function() {
    console.log(`'Hello, I'm ${this.name}!`);
};

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
};

Player.prototype.getMarker = function() {
    console.log(`My marker is '${this.marker}'`)
}

Object.setPrototypeOf(Player.prototype, Person.prototype);

player1 = new Player('Joe','X')

player1.sayName();