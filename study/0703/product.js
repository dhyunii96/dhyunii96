var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
var product = new Product();
product.name = "MacBook";
product.price = 1500000;
display();
function display() {
    console.log("\uC81C\uD488\uBA85: ".concat(product.name, ", \uAC00\uACA9: ").concat(product.price, "\uC6D0"));
}
