"use strict";
var afro_dog = {
    name: "afro",
    ability: "Bark",
    age: 21
};
var poky_dog = {
    name: "Poky",
    age: 20
};
var getAbility = function (dog) {
    if ("ability" in dog) {
        return dog.ability;
    }
    else
        return "No abilitys registered ";
};
var Truck = /** @class */ (function () {
    function Truck(car_number) {
        var _this = this;
        this.car_number = car_number;
        this.loadCargo = function () {
            return "loading the cargo in the truck. " + _this.car_number;
        };
    }
    return Truck;
}());
var Car = /** @class */ (function () {
    function Car(car_number) {
        this.car_number = car_number;
    }
    return Car;
}());
var getCargo = function (car) {
    if (car instanceof Truck) {
        // ? this is a type guard
        return car.loadCargo();
    }
    return ("It's not posible to load the cargo in this vehicle number. " +
        car.car_number);
};
var matador_truck = new Truck(123);
var matador_tesla_car = new Car(321);
console.log(getAbility(poky_dog));
console.log(getCargo(matador_truck));
console.log(getCargo(matador_tesla_car));
var getFastAnimalVelocity = function (animal) {
    switch (animal.type) {
        case "Horse":
            animal.getRunningSpeed();
            break;
        case "Eagle":
            animal.getFlyingSpeed();
            break;
        default:
            break;
    }
};
var some_string_val = {
    name: "String"
};
// * type casting
var some_div = document.getElementById("mydiv");
function some_function(name, age) {
    return "Hello my name is " + name + "And my age is " + age;
}
// ? optional chaining
var object_chain = {
    name: "Eduardo",
    role: {
        // name: "Developer | DevOps",
        experience: 2
    }
};
// console.log(object_chain?.role?.name);
var null_var = "";
console.log((null_var !== null && null_var !== void 0 ? null_var : null_var));
