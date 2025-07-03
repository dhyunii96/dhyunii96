var User2 = /** @class */ (function () {
    function User2() {
    }
    return User2;
}());
var Product2 = /** @class */ (function () {
    function Product2() {
    }
    return Product2;
}());
var Order = /** @class */ (function () {
    function Order() {
    }
    Order.prototype.summary = function () {
        console.log("\uC8FC\uBB38\uC790: ".concat(this.user.userName, "\uAC00 \n                    ").concat(this.product.productName, "\uC744 \uC8FC\uBB38\uD588\uC2B5\uB2C8\uB2E4."));
    };
    return Order;
}());
var user2 = new User2();
user2.userName = "홍길동";
var product2 = new Product2();
product2.productName = "책";
var order = new Order();
order.user = user2;
order.product = product2;
order.summary();
