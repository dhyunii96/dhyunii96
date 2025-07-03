class Car {
    drive(driver: Driver) {
        console.log(`${driver.name}이(가) 운전을 시작합니다.`);
    }
}

class Driver {
    name: string;
}

let car = new Car();
let driver = new Driver();
driver.name = "홍길동";
car.drive(driver);
// car.drive(new Driver());  //위에 2줄+4줄 합친거랑 같은 뜻