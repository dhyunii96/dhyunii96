class Product {
    name: string;
    price: number;
}

let product = new Product();
product.name = "MacBook";
product.price = 1500000;

display();

function display() {
    console.log(`제품명: ${product.name}, 가격: ${product.price}원`);
}