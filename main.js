var car = /** @class */ (function () {
    function car() {
        this.Engine = function (hp, cc) {
            console.log("The car horse power is ".concat(hp, " and engine capacity is ").concat(cc));
        };
        this.doors = 4;
        this.tyreSize = "13\"";
    }
    return car;
}());
var alto = new car();
alto.Engine("90hp", 660);
console.log("".concat(alto.doors, " \n ").concat(alto.tyreSize));
