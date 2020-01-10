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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var populateElement = function (content, id) {
    return function (_) {
        var htmlElement = document.getElementById(id);
        htmlElement.innerHTML = content;
    };
};
var propertyDecotator = function (target, varName) {
    console.log("Property decorator:");
    console.log(target);
    console.log(varName);
};
var accesorDecorator = function (target, varName) {
    console.log("Accesor decorator:");
    console.log(target);
    console.log(varName);
};
var methodDecorator = function (target, varName, details) {
    console.log("Method decorator:");
    console.log(target);
    console.log(varName);
    console.log(details);
};
var paramDecorator = function (target, varName, number_argument) {
    console.log("Parameter decorator:");
    console.log(target);
    console.log(varName);
    console.log(number_argument);
};
var return_class_decorator = function (log) {
    return function (super_constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _ = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _[_i] = arguments[_i];
                }
                var _this = _super.call(this) || this;
                console.log("====================================");
                console.log(log);
                console.log("====================================");
                return _this;
            }
            return class_1;
        }(super_constructor));
    };
};
var SomeFancyClass = /** @class */ (function () {
    function SomeFancyClass(name) {
        this.name = name;
        this.age = "10";
    }
    Object.defineProperty(SomeFancyClass.prototype, "setAge", {
        set: function (new_age) {
            this.age = new_age;
        },
        enumerable: true,
        configurable: true
    });
    SomeFancyClass.prototype.someMethod = function (ephiloge) {
        return ephiloge;
    };
    __decorate([
        propertyDecotator
    ], SomeFancyClass.prototype, "age", void 0);
    __decorate([
        accesorDecorator
    ], SomeFancyClass.prototype, "setAge", null);
    __decorate([
        methodDecorator,
        __param(0, paramDecorator)
    ], SomeFancyClass.prototype, "someMethod", null);
    SomeFancyClass = __decorate([
        return_class_decorator("<h1>Hello chimichanga</h1>")
    ], SomeFancyClass);
    return SomeFancyClass;
}());
var some = new SomeFancyClass("fff");
