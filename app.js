function Car(name,color,airBag){
    this.name = name;
    this.color = color;
    this.airBag = airBag;
    this.isBuy = false;
    this.speed = function(){
        console.log(`${this.name} has 100 km/h`);
    }
}
const mers = new Car('merc','black',true);
const bmw = new Car('bmw','black',false);
mers.speed();
bmw.speed();

Car.prototype.town = function(){
    console.log('New York');
}
mers.town();
bmw.town();

console.log(mers);
console.log(bmw);

