"use strict";
var function_with_type = function (number1) {
    console.log(number1);
};
var function_with_default_value = function (number1) {
    if (number1 === void 0) { number1 = 1; }
    console.log("====================================");
    console.log(number1);
    console.log("====================================");
};
