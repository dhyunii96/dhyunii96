class User {
    name: string;

    constructor(public name: string) {
        this.name = name;
    }

    greet() {
        console.log(`안녕하세요, 제 이름은 ${this.name}입니다!`);
    }
}

let user = new User("홍길동");
user.greet();