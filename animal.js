var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        this.distance_covered = distance;
        return "Distance covered by " + this.name + " is " + this.distance_covered + " km";
    };
    Animal.prototype.makeSound = function (sound) {
        this.sound = sound;
        return this.name + " made Sound " + this.sound;
    };
    return Animal;
}());
var Tiger = (function (_super) {
    __extends(Tiger, _super);
    function Tiger(name) {
        return _super.call(this, name) || this;
    }
    return Tiger;
}(Animal));
var Elephant = (function (_super) {
    __extends(Elephant, _super);
    function Elephant(name) {
        return _super.call(this, name) || this;
    }
    return Elephant;
}(Animal));
var tiger = new Tiger('Tiger');
var elephant = new Elephant('Elephant');
document.write(tiger.move(12) + " and " + tiger.makeSound('grrrrrrrrrrrr'));
document.write(elephant.move(3) + " and " + elephant.makeSound('Ummmmmmmmm'));
