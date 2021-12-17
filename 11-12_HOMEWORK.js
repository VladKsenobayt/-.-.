console.log("zadanie 1");
let city = new Object();
var city1 = {};
city1["name"] = "ГородN";
city1["population"]=10000000;
console.log("zadanie 2");
var city2 = {name:"ГородM", population:1e6};
console.log("zadanie 3");
function getName (cityname) {
    return(cityname.name)
}
city2.getName=getName (cityname=city2);
city1.getName=getName (cityname=city1);
console.log(city1.getName);
console.log(city2.getName);
console.log("zadanie 4");
function exportStr(cityname) {
    var strok = "";
    for (var k in cityname) {
        if (typeof cityname[k] != 'function') {
            strok = strok+k+"="+cityname[k]+"\n";
        }
    }
    return(strok)
}
city2.exportStr=exportStr (cityname=city2);
city1.exportStr=exportStr (cityname=city1);
console.log(city1.exportStr);
console.log(city2.exportStr);
console.log("zadanie 5");
function getObj() {    return(this)}
function getCity(){
    return(getObj())
} 
city1.getCity = getObj;
city2.getCity = getObj;
console.log(city1.getCity());
console.log(city2.getCity());
console.log("zadanie 6");
let obj = new Object();
var obj1 = {
    method1: function(){
        return(this)
    },
    method2: function(){
        return(this)
    },
    method3: function(){
        return("Метод3")
    }
};
console.log(obj1.method1().method2().method3());
console.log("zadanie 7");
let d1=[45,78,10,3];
d1[7] = 100;
//dlina=d1.length;
for (i = 0; i < 4; i++) {
    console.log(i, d1[i]);
}
console.log(6, d1[6]);
console.log(7, d1[7]);
console.log("zadanie 8");
//Создайте массив d2 с числовыми величинами 45,78,10,3. Посчитайте в переменную sum2 сумму чисел в нем, при помощи цикла for .
let d2=[45,78,10,3];
let sum2 = 0;
dlina=d2.length;
for (i = 0; i < dlina; i++) {
    sum2=sum2+d2[i];
}
console.log(sum2);
console.log("zadanie 9");
//Создайте массив d3 с числовыми величинами 45,78,10,3. Добавьте в массив d3 еще одно число (например, d3[7] = 100) 
//Посчитайте в переменную sum3 сумму чисел в нем, при помощи цикла for/in.
let d3=[45,78,10,3];
d3[7] = 100;
let sum3 =0;
for (k in d3) {
    //if (k!=undefined){
    sum3 = sum3+d3[k];
    //}
}
console.log(sum3);
console.log("zadanie 10");
//Создайте массив d4 с числовыми величинами 45,78,10,3. Напишите функцию сортировки my(a,b), которая при вызове d4.sort(my) отсортирует
//элементы массива по убыванию чисел. Вызовите d4.sort(my)
let d4 =[45,78,10,3];
function my(a,b){
    if (a>b) {
        return -1
    }
    if (a<b) {
        return 1
    }
    return 0
}
d4.sort(my);
console.log(d4);
console.log("zadanie 11");
//Создайте двумерный массив d5 размером n=3 элементов в каждом из которых будет m=4 элементов из целых чисел (в каждый элемент 
//поместить цифру 5). Примечание: при создании двумерного массива используйте циклы. Во внешнем цикле должна появиться конструкция 
//d5[i] = [];
let d5 =[]
for (i = 0; i < 3; i++) {
    d5[i] = [];
    for (k = 0; k < 4; k++){
        d5[i][k]= 5;
    }
}
console.log(d5);
console.log("zadanie 12");
//Векторный тип. Напишите конструктор Vector,  представляющий вектор в двумерном пространстве. Он принимает параметры x и y (числа), 
//которые хранятся в одноимённых свойствах. Дайте прототипу Vector два метода, plus и minus, которые принимают другой вектор в качестве 
//параметра, и возвращают новый вектор, который хранит в x и y сумму или разность двух (один this, второй — аргумент)
//Добавьте геттер length в прототип, подсчитывающий длину вектора – расстояние от (0, 0) до (x, y).
function Vector(x,y) {
    this.x = x;
    this.y = y;
  }
  Vector.prototype.plus = function(otherVector) {
    var xx = this.x + otherVector.x;
    var yy = this.y + otherVector.y;
    return new Vector(xx, yy)
  };
  Vector.prototype.minus = function(otherVector) {
    var xx = this.x - otherVector.x;
    var yy = this.y - otherVector.y;
    return new Vector(xx, yy)
  };
  
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));


Vector.prototype.toString = function toString() {
  return 'Vector { x: ' + this.x + ', y: ' + this.y + ' }';
}
Vector.prototype = {
    get length () {
       //console.log();
       return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));
    },

 };


console.log(new Vector(3, 4).length);
console.log("zadanie 13");
//Создайте тип ячейки StretchCell(inner, width, height), соответствующий интерфейсу ячеек таблицы из этой главы. 
//Он должен оборачивать другую ячейку (как делает UnderlinedCell - из примера книги), и убеждаться, что результирующая ячейка 
//имеет как минимум заданные ширину и высоту, даже если внутренняя ячейка была бы меньше.
// Ваш код.
function StretchCell(inner, width, height) {
    this.inner = inner;
    this.width = width;
    this.height = height;
    this.minWidth=function(){
        return(this.width)
    }
    this.minHeight=function(){
        return(this.height)
    }
  }
  StretchCell.prototype.draw = function (otherVector) {
    let yach=[];
    let inne;
    if (typeof this.inner == 'object'){
        //dlina=this.inner.length;
        for (let i in this.inner) {
            inne=this.inner[i];
            while (inne.length < this.width){
                inne=inne+" "
            }
            yach.push(inne);
        } 
    } else {
            inne=this.inner;
            while (inne.length < this.width){
                inne=inne+" "
            }
            yach.push(inne);
    }
    inne="";
    while (inne.length < this.width){
        inne=inne+" "
    }
    while (yach.length < this.height){
        yach.push(inne);
    }
    return (yach);
};
var sc = new StretchCell("abc", 1, 2);


console.log(sc.minWidth());
// - 3
console.log(sc.minHeight());
// - 2
console.log(sc.draw(3, 2));
// - ["abc", "   "]

console.log("zadanie 14");
//Разработайте интерфейс, абстрагирующий проход по набору значений. Объект с таким интерфейсом представляет собой последовательность, 
//а интерфейс должен давать возможность в коде проходить по последовательности, работать со значениями, которые её составляют, 
//и как-то сигнализировать о том, что мы достигли конца последовательности.
//Задав интерфейс, попробуйте сделать функцию logFive, которая принимает объект-последовательность и вызывает console.log для первых её 
//пяти элементов – или для меньшего количества, если их меньше пяти.
//Затем создайте тип объекта ArraySeq, оборачивающий массив, и позволяющий проход по массиву с использованием разработанного вами 
//интерфейса. Создайте другой тип объекта, RangeSeq, который проходит по диапазону чисел (его конструктор должен принимать аргументы 
//from и to).
function logFive (posled){
    dlina=posled.length;
    if (dlina>5){
        dlina =5;
    }
    for (var i = 0; i < dlina; i++) {
        console.log(posled[i]);
    }
}
//function RangeSeq(from, to) {
//    this.from = from;
//    this.to = to;
//}
function RangeSeq(from, to){
    this.from = from;
    this.to = to;
    self.mass=[];
    for (var i = from; i < to; i++){
        self.mass.push(i);
    }
    return(self.mass)
    
}

//  StretchCell.prototype.draw = function (otherVector) 
//RangeSeq = function (otherVector) 
function ArSeq(arr){
    self.mass=[];
    for (let i in arr){
        self.mass.push(arr[i]);
        }
    return(self.mass)
    
}
logFive(new ArSeq([1, 2]));
// - 1
// - 2
logFive(new RangeSeq(100, 1000));
// - 100
// - 101
// - 102
// — 103
// - 104

console.log("zadanie 15");
//Создайте конструктор function Card(from, to){...}, создающий объекты карточки со свойствами from, to и методом show(), возвращающим 
// свойства отдельного объекта в виде строки «from,to», где на месте названий свойств будут их значения. Создайте переменную c1 
//с городами Екатеринбург и Москва
function Card(from, to){
    this.from=from;
    this.to=to;
    this.show=function(){
        return `${this.from},${this.to}`;
    }
}
let c1 = new Card("Екатеренбург", "Москва");
console.log(c1.show());
//alert(c1.show);

console.log("zadanie 16");
//Опишите класс Human:  для создания объектов со свойствами name, age и height конструктор класса должен принимать одноимённые аргументы . Создайте массив humans из десяти объектов:
//«Коля», 23, 180, «Даша», 19, 170,«Ваня», 18, 192,«Петя», 45, 178,«Вася», 34, 197,«Джони», 40, 168,«Катя», 37, 160,«Петя», 29, 200,«Соня», 21, 172,«Женя», 25, 175
//Укажите классу метод getInfo (он должен возвращать строки вида «Коля, 23, 180»), метод геттер firstname ( он должен возвращать свойство name объекта)
function Human(name, age, height){
    this.name = name,
    this.age = age,
    this.height = height,
    this.getInfo=function(){
        return(`${this.name}+,+${this.age}+,+${this.height}`)
    }   
}
Human.prototype = {
    get firstname () {
        return this.name
    },

 };
//get firstname () {
//    return this.name
//},
per=["Коля", 23, 180, "Даша", 19, 170,"Ваня", 18, 192,"Петя", 45, 178,"Вася", 34, 197,"Джони", 40, 168,"Катя", 37, 160,"Петя", 29, 200,"Соня", 21, 172,"Женя", 25, 175];
humans=[];
for (i = 0; i < 30; i=i+3){
    humans[Math.round(i/3)]=new Human(per[i],per[i+1],per[i+2]);
}
//
console.log("zadanie 17");
//(*) Напишите функции сортировки sortByName и sortByHeight, которые смогут отсортировать массив по именам (в алфавитном порядке) или росту (по убыванию роста). Вызовите только функцию сортировки по росту.
function sortByName (mass) {
    dlina=mass.length;
    
    per = true;
    while (per){
        per=false;
        for (i = 1; i < dlina; i++) {
            if  (mass[i].name <mass[i-1].name) {
                per = mass[i];
                mass[i]= mass[i-1];
                mass[i-1]=per;
                per = true;
            }
        }
    
    }
    return(mass)
}
function sortByHeight (mass){
    dlina=mass.length;
    per = true;
    while (per){
        per=false;
        for (i = 1; i < dlina; i++) {
            //console.log(mass[i].height, mass[i-1].height);
            if  (mass[i].height >mass[i-1].height) {
                per = mass[i];
                mass[i]= mass[i-1];
                mass[i-1]=per;
                per = true;
            }
        }
    
    }
    return(mass)
}
console.log(sortByHeight(humans));
console.log("zadanie 18");
//Получите в переменную dt1  дату соответствующую 0:00, 1 января 2045 года, при помощи конструктора Date()
let dt1=new Date('January 1, 2045 00:00');
console.log(dt1);

console.log("zadanie 19");
//В переменную dt2 найдите кол-во секунд, которое прошло с 1 января 1970 года по текущий момент.
dt2=Math.round(Date.now() / 1000);

console.log("zadanie 20");
//Напишите функцию getDays, которая принимает год и месяц (пусть январь будет — 1, февраль — 2 и т.д.), а возвращает количество дней в месяце
function getDays(year, month) {
    if (month%2==1 & month<8||month%2==0 & month>7) {
        return(31)
    }
    if (month==2){
        if (year%4==0){
            return 29
        }
        return 28
    }
    return 30
}
console.log(getDays(2021, 12));
console.log("zadanie 21");
//Напишите функцию calendar(year,month), которая принимает два параметра — номер месяца и год, а возвращает разметку 
//календаря HTML на указанный месяц
//Пользовался помощью StackOverFlow
function createCalendar(iddd, year, month) {

    let mon = month - 1; 
    let d = new Date(year, mon);
    let table = '<table>';

    while (d.getMonth() == mon) {
      table += '<td>' + d.getDate() + '</td>';

      if (getDay(d) % 7 == 6) { 
        table += '</tr><tr>';
      }

      d.setDate(d.getDate() + 1);
    }
    if (getDay(d) != 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += '<td></td>';
      }
    }

    table += '</tr></table>';

    iddd.innerHTML = table;
  }

  function getDay(date) { 
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
  }

createCalendar(calendar, 2021, 11);
console.log("zadanie 22");
//Через прототип расширьте встроенный объект Number методом isOdd(), который возвращает true, если число нечетное.
Number.prototype.isOdd = function(){
    return (this % 2 != 0);
}
let c = 7;
console.log(c.isOdd());
c=6;
console.log(c.isOdd());
console.log("zadanie 23");
//Создайте конструктор , который поддерживает на своих методах цепочечный синтаксис.
function Chain(elm){
    this.elm = elm,
    this.add = function(i){
        this.elm += i;
        return this;
    },

    this.substract = function(i){
        this.elm -= i;
        return this;
    },

    this.multiply = function(i){
        this.elm *= i;
        return this;
    },

    this.div = function(i){
        this.elm /= i;
        return this;
    }
    
}

let otv = new Chain(7).add(2).substract(1).multiply(3).div(8);
console.log(otv.elm);

console.log("zadanie 24");
//Представьте, что разрабатываете игру. Создайте конструктор Unit(), создающий объекты с координатами x, y. При помощи прототипного наследования расширьте Unit(), создав новый конструктор Fighter() с свойством power. Примечание: не забудьте о геттерах и сеттерах.

class Unit {
    constructor(x, y) {
      this._x = x;
      this._y = y;
    }  
  
    get y() {
      return this._y;
    }
  
    set y(y) {
      if (y <= 0) {
        throw new Error('Y must be bigger than 0');
      }
      this._y = y;
    }
  
    get x() {
      return this._x;
    }  set x(x) {
      if (x <= 0) {
        throw new Error('X must be bigger than 0');
      }
      this._x = x;
    }
  }
 let user = new Unit(5,8);
 console.log(user);
 class Fighter extends Unit {
    constructor (x,y, power) {
        super(x,y);
        //super(y);
        this._power=power;
    }
    get power(){
        return this._power;
    }
    set power(power){
        if (power<0){
            throw new Error ('too small');
        }
        this_power=power;
    }

}
let player = new Fighter(1,2,11);
console.log(player);