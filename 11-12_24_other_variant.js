console.log("zadanie 24");
//Представьте, что разрабатываете игру. Создайте конструктор Unit(), создающий объекты с координатами x, y. При помощи прототипного наследования расширьте Unit(), создав новый конструктор Fighter() с свойством power. Примечание: не забудьте о геттерах и сеттерах.

function Unit(x, y){
    this.x = x;
    this.y = y;
}

Unit.prototype = {
    get X() {return this.x;},
    get Y() {return this.y;},
    set X(val) {this.x=val;},
    set Y(val) {this.y=val;}
}

function Fighter(power){
    this.power = power;
}

Fighter.prototype = Unit.prototype;
Fighter.prototype += {
    get power() {return power;},
    set power(val) {this.power = val;}
}

units = new Fighter(11);
units.X = 1;
units.Y = 2;
console.log(units.X, units.Y, units.power);
    