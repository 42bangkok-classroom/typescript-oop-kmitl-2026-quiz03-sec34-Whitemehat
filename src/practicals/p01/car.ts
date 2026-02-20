export class Car {
    public brand: string = ""
    public model: string = ""

    start(){
        console.log(`${this.brand} ${this.model} is starting...`);
    }
    accelerate(){
        console.log(`${this.brand} ${this.model} is accelerating...`);
    }
    brake(){
        console.log(`${this.brand} ${this.model} is braking...`);
    }
    stop(){
        console.log(`${this.brand} ${this.model} is stopping...`);
    }
}
