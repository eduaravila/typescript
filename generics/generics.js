"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// ? generic function
function someobjs(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
var some1 = {
    name: "String",
    age: 1
};
var some2 = {
    name: "String",
    age: "1"
};
function contrainsFunction(obj1, exp_string) {
    return __assign({}, obj1);
}
// contrainsFunction({}, 1);
contrainsFunction({}, "some text with the lenght property");
function get_element_with_index(obj1, index) {
    return obj1[index];
}
var new_some = someobjs(some1, some2);
var dog_object = {
    name: "Gochila",
    age: 12
};
function partial_function(name, age) {
    var new_dog = {};
    new_dog.name = "Poky";
    new_dog.age = 30;
    return new_dog;
}
get_element_with_index(dog_object, "age");
console.log(new_some.age);
var Some = /** @class */ (function () {
    function Some(name) {
        this.name = name;
        this.habilities = [];
    }
    Some.prototype.getHability = function (index) {
        return this.habilities[index];
    };
    return Some;
}());
