class Car {
    name;
    speed;
    brand;
    color;
    constructor(name, speed, brand, color) {
        this.name = name;
        this.speed = speed;
        this.brand = brand;
        this.color = color;
    }

    drive() {
        console.log(`${this.name} is driving at ${this.speed} km/h` );
    }

    paint(newColor) {
        console.log(`${this.color} change to ${newColor}`);
        this.color = newColor;
    }
    getColor() {
        return this.color;
    }
}

const toyota = new Car('toyota','120','japan','black');
toyota.paint('red');
console.log(toyota.getColor());