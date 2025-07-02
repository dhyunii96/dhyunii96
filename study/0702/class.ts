class Person {
    constructor(public name: string, private age: number) {}

    introduce(): string {
        return `Hi, I'm ${this.name}`;
    }
}

class Person2 {
    name:string;
    age:number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}


class Car implements Vehicle {
    carModel: string;
    owner: string;
    carWeight: number;
    byYear: number;
    isSunk: boolean;
    
    drive() {
        console.log("Go");
    }
    
    alarm() {
        console.log("Beep Beep");
    }
    
    back() {
        console.log("Back");
    }
    
    wipe() {
        console.log("Wipe");
    }
    
    break(): void {
        console.log("Break");
    }
    
    accelerate(): void {
        console.log("Accelerate");
    }
    
    trunk(): void {
        console.log("Trunk Open");
    }
    distance: number;
}

class DumpTruck extends Car {
    storage: number;
    operate() {
        console.log("Operate");
    }

    spread() {
        console.log("Spread");
    }
}

class Bus extends Car {
    passenger: number;    
    busNumber: number;

    constructor(passenger: number, busNumber: number) {
        super();
        this.passenger = passenger;
        this.busNumber = busNumber;
    }

    openDoor() {
        console.log("Open Door");
    }

    closeDoor() {
        console.log("Close Door");
    }

    trunk() {
        console.log("");
    }
}

interface Vehicle {
    break(): void;
    accelerate(): void;
    trunk(): void;
}