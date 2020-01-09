"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Animal = /** @class */ (function () {
    function Animal(name) {
        var _this = this;
        this.hobbies = []; // ? all the children classes can still modify this property. unlike with the private one that only can be modified in it class
        this.getName = function () {
            console.log(_this.name);
        };
        this.getHobbies = function () {
            console.log(_this.hobbies);
        };
        this.addHobbie = function (hobbie) {
            _this.hobbies = __spreadArrays(_this.hobbies, [hobbie]);
            console.log(_this.hobbies);
        };
        this.name = name;
    }
    // ? If a class is abstract can't be instanciated
    Animal.makeNoise = function (noise) {
        // * this is a static method and can be used, either if you dont have an instance of the class
        console.log("Mi animal noise is: ", noise);
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    // * this
    function Dog(color, name) {
        var _this = _super.call(this, name) || this;
        _this.color = color;
        _this.name = name;
        _this.getColor = function () {
            console.log("Mi color is:", _this.color);
        };
        _this.addHobbie = function (hobbi) {
            _this.hobbies = __spreadArrays(_this.hobbies, [hobbi + "."]);
        };
        _this.calculateAge = function (age) {
            // * Calculate the age of a dog based on human years
            console.log("Mi age in dog years is: ", age * 3);
        };
        return _this;
    }
    return Dog;
}(Animal));
var SingletonExample = /** @class */ (function () {
    function SingletonExample(name) {
        this.name = name;
    }
    Object.defineProperty(SingletonExample.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    SingletonExample.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        return new SingletonExample("Singleton");
    };
    return SingletonExample;
}());
var singleton_single_child = SingletonExample.getInstance();
console.log("singleton name:", singleton_single_child.getName);
var poky = new Dog("Negro", "Poki");
poky.getName();
var afro = new Dog("Black", "afro");
var new_call = { getName: poky.getName };
new_call.getName.apply(afro);
afro.addHobbie("bark");
var tupak = new Dog("Black", "tupack");
tupak.getColor();
tupak.getName();
tupak.addHobbie("Eat dog fod");
Animal.makeNoise("Bark");
