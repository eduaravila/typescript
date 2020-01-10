"use strict";
// ? an interface is a custom type of value
var private_var = {
    private_info: "LMAO",
};
// private_var.private_info = "LOL"; // ! you get an error because you want to change a real only variable
var poky_type = {
    color: "Brown",
    height: "21"
};
var PersonClass = /** @class */ (function () {
    function PersonClass(name, age) {
        var _this = this;
        this.age = age;
        this.getName = function () {
            if (_this.name)
                return _this.name;
            else
                return "I have no name sorry";
        };
        this.name = name;
        this.age = age;
    }
    return PersonClass;
}());
console.log(poky_type.color);
