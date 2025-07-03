class Animal {
  sound(): void {
    console.log("Some generic animal sound");
  }
}

class Dog2 extends Animal {
  sound(): void {
    console.log("멍멍!");
  }
}

class Cat extends Animal {
  sound(): void {
    console.log("야옹!");
  }
}

const dog2 = new Dog2();
dog2.sound();

const cat = new Cat();
cat.sound();