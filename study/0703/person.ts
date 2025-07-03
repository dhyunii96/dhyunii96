class Person {
    name: string;
    age: number;
}

let person = new Person();
person.name = "Alice";
person.age = 20;

introduce();

function introduce() {
    console.log(`안녕하세요, 저는 ${person.age}살의${person.name}입니다.`);
}

