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
    return(mass)
    }
    
}
function sortByHeight (mass){
    dlina=mass.length;
    per = true;
    while (per){
        per=false;
        for (i = 1; i < dlina; i++) {
            if  (mass[i].height >mass[i-1].height) {
                per = mass[i];
                mass[i]= mass[i-1];
                mass[i-1]=per;
                per = true;
            }
        }
    return(mass)
    }
    
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
