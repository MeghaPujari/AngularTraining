var Item = /** @class */ (function () {
    function Item(id, name, price, category) {
        var _this = this;
        this.display = function () {
            console.log("Id=" + _this.id + " Name=" + _this.name + " price=" + _this.price + " category=" + _this.category);
        };
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
    return Item;
}());
var item = new Item(1, 'notebook', 50, 'stationery');
item.display();
