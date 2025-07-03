class User2 {
    userName: string;
}

class Product2 {
    productName: string;
}

class Order {
    user: User2;
    product: Product2;
    
    summary() {
        console.log(`주문자: ${this.user.userName}이 
                    ${this.product.productName}을 주문했습니다.`);
    }
}

let user2 = new User2();
user2.userName = "홍길동";

let product2 = new Product2();
product2.productName = "책";

let order = new Order();
order.user = user2;
order.product = product2;

order.summary();