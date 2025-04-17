
function Vehicle(type, wheels, speed) {
   this.type = type;
   this.wheels = wheels;
   this.speed = speed;
}




Vehicle.prototype.describe = function() {
   console.log(`This is a ${this.type} with ${this.wheels} wheels, and it can go up to ${this.speed} km/h.`);
};


let car = new Vehicle("Car", 4, 200);
car.describe(); 

let bike = new Vehicle("Bike", 2, 100);
bike.describe(); 


