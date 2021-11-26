console.log("zadanie 1");
let s1 = "#";
for (let k=0; k<7;k++){
    console.log(s1);
    s1 = s1+"#";
} 
console.log("zadanie 2");
for (let k=1; k<101;k++){
    if (k%3==0 && k%5==0){
        console.log("FizzBuzz");
    } else if (k%3==0){
        console.log("Fizz");
    } else if (k%5==0){
        console.log("Buzz");
    } else {
        console.log(k);
    }
    
} 
console.log("zadanie 3");
for (let k=0; k<8;k++){
    if (k%2==0){
        console.log("# # # # ");
    } else {
        console.log(" # # # #");
    }
}
console.log("zadanie 4");
function min(n1, n2){
    if (n1 > n2){
        return(n2);
    } else {
        return(n1);
    }
}
console.log(min(9,0));
console.log("zadanie 5");
function countBs (strochka){
    let dlina=strochka.length;
    let kolv = 0;
    for (let k=0; k<dlina;k++){
        if (strochka.charAt(k) == "B"){
            kolv++;
        }
    }
    return(kolv);
}

function countChar (strochka, bykv){
    let dlina=strochka.length;
    let kolv = 0;
    for (let k=0; k<dlina;k++){
        if (strochka.charAt(k) == bykv){
            kolv++
        }
    }
    return(kolv);
}
console.log(countChar("gfgfgfff", "g"));
console.log("zadanie 6");
function range(nach, kon, shag=1) {
    let arr = [];
    ///kon=kon+shag;
    do {
        arr.push(nach);
        nach=nach+shag;
    }  while (nach<kon && shag>0 || nach>kon && shag<0 || kon == nach)
    ///
    ///Обнаружено несоответствие в условии задания, согласно вводному условию КОНЕЧНОЕ ЧИСЛО должно обязательно включаться в массив
    ///но в примере (range(1, 10, 2) ожидаемый вывод 1, 3, 5, 7, 9 (данный код выдаст его). Чтобы данный ввод включал число 10 
    ///раскомментируйте строки ниже
    ///if (arr[arr.length-1]!=kon-shag) {
    ///    arr.push(kon);
    ///}
    return(arr);
}
function sum (mass){
    let dlina=mass.length;
    let summ=0;
    for (let i=0; i<dlina;i++) {
       summ = summ +mass[i];
    }
    return(summ);
}
console.log(sum(range(1, 10)));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
console.log("zadanie 7");
function reverseArray(mass){
    let arr = [];   
    let dlina=mass.length-1;
    for (let i=dlina; i>=0;i--) {
        arr.push(mass[i])
    }
    return(arr)
}
function reverseArrayInPlace(mass){
	reversmass = reverseArray(mass);
    let dlina=mass.length;
	for (var i = 0; i < dlina; i++) {
		mass[i] = reversmass[i];
	}
}
let gf=range(1, 10);
console.log(reverseArray(gf));
reverseArrayInPlace(gf);
console.log(gf);

console.log("zadanie 8");
//arrayToList, которая строит такую структуру, получая в качестве аргумента [1, 2, 3]

//listToArray, которая создаёт массив из списка. 

//prepend, которая получает элемент и создаёт новый список, где этот элемент добавлен спереди к первоначальному списку
function prepend(elem, list){
    return {value: Number(elem), rest: list}
}

//nth, которая в качестве аргументов принимает список и число, а возвращает элемент на заданной позиции в списке, или же 
//undefined в случае отсутствия такого элемента. рекурсивную 
function nth (list, elem) {
    if (elem == 0) {
        return(list.value);
    } else if (list.rest) {
        return(nth (list.rest, elem-1));
    } else {
        return(undefined);
   }
    //return(list[elem])
}


function arrayToList(mass){
    let list = {};
    let dlina=mass.length;
    for (-1<dlina; dlina--;){
        list = prepend(mass[dlina], list)
    }
    return list
}

function listToArray(list){
   let vuvod = [];
   //let dlina=list.length;
   let i = 0;
   do {
        com = nth(list, i);
        if  (com != undefined) {
            vuvod.push(nth(list, i));
            i=i+1;
        }
   }while (com != undefined)
   
   return (vuvod)
}

let sp=range(1, 3);
sp=arrayToList(sp);
console.log(sp);
console.log(listToArray(sp));


console.log("zadanie 9");
function deepEqual(firstt, secondd){
    if (firstt == null || secondd == null) {
        if (firstt != null || secondd != null){
            return false
        }
        return true
    }
    if(typeof(firstt)=="object" & typeof(secondd) == "object"){
        if(JSON.stringify(firstt)=== JSON.stringify(secondd)){
            return true
        }
        else{
            return false
        }
    }
    else{
        if(firstt == secondd){
            return true
        }
        else{
            return false
        }
    }
}

let array_1 = [2,4,6,8,1];
let array_2 = [2,7,5,7,1];
let array_3 = [2,4,6,8,1];

console.log(deepEqual(array_1, array_2));
console.log(deepEqual(array_1, array_3));
console.log(deepEqual(array_1, null));
console.log(deepEqual(null, null));
console.log(deepEqual(5, 4));
console.log(deepEqual(5, 5));
console.log("zadanie 10");
function soedinitel(firstt, secondd){
    return firstt.concat(secondd)
}

let array_10 = [['a', 'b', 'c'], ['d', 'e', 'f'], [2,7,5,7,1]];
console.log(array_10.reduce(soedinitel));



//import pip_inf from './data.js';
let array11 = [
    { "name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel" },
    { "name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme" },
    { "name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen" },
    { "name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten" },
    { "name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano" },
    { "name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother": null },
    { "name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother": null },
    { "name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene" },
    { "name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm" },
    { "name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes" },
    { "name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother": null },
    { "name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape" },
    { "name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters" },
    { "name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans" },
    { "name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother": null },
    { "name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke" },
    { "name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker" },
    { "name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker" },
    { "name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze" },
    { "name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke" },
    { "name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father": null, "mother": null },
    { "name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke" },
    { "name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze" },
    { "name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene" },
    { "name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters" },
    { "name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke" },
    { "name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke" },
    { "name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters" },
    { "name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze" },
    { "name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano" },
    { "name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke" },
    { "name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes" },
    { "name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke" },
    { "name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens" },
    { "name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander" },
    { "name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke" },
    { "name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert" },
    { "name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier" },
    { "name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke" }
];//ANCESTRY_FILE;
let array12 = [
    { "name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel" },
    { "name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme" },
    { "name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen" },
    { "name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten" },
    { "name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano" },
    { "name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother": null },
    { "name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother": null },
    { "name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene" },
    { "name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm" },
    { "name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes" },
    { "name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother": null },
    { "name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape" },
    { "name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters" },
    { "name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans" },
    { "name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother": null },
    { "name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke" },
    { "name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker" },
    { "name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker" },
    { "name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze" },
    { "name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke" },
    { "name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father": null, "mother": null },
    { "name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke" },
    { "name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze" },
    { "name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene" },
    { "name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters" },
    { "name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke" },
    { "name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke" },
    { "name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters" },
    { "name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze" },
    { "name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano" },
    { "name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke" },
    { "name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes" },
    { "name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke" },
    { "name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens" },
    { "name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander" },
    { "name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke" },
    { "name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert" },
    { "name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier" },
    { "name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke" }
];//ANCESTRY_FILE;
console.log("zadanie 11") 
function average(array) {
    function plus(a, b) {return a + b;}
    return array.reduce(plus) / array.length;
}

function mom_chld (arm, arch) {
    let dlina=arch.length;
    let mass = [];
    for (var i = 0; i < dlina; i++) {
        if (arm.has(arch[i][0])) {
          mass.push(arch[i][1]-arm.get(arch[i][0]));
        }
    } 
    console.log(mass);
    return mass
}
let byName = {};
array11.forEach(function(person) {
    byName[person.name] = person;
});
let mam_slov = new Map(array11.map(element=>[element.name, element.born]));
let chld = array11.map(element=>[element.mother, element.born]);
console.log(average(mom_chld (mam_slov, chld)));
//31.2
console.log("zadanie 12");
function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

function groupBy(arr, func){ 
    let groupObj = {};
    arr.forEach(function(p){
        let id = func(p);
        if (groupObj[id] === undefined ) {
            groupObj[id] = [];
        }
        groupObj[id].push( p )
    });
    return groupObj;
}
function getCentury(p) {
    return Math.ceil(p.died / 100);
}
let byCenturies = groupBy( array12, getCentury );

for (century in byCenturies ) {
    byCenturies[century] = average( byCenturies[century].map(function(p){ return p.died - p.born }) );
    console.log( century + ": " + byCenturies[century] );
}
//16: 43.5
//17: 51.2 18: 52.8 19: 54.8 20: 84.7 21: 94
//import { ANCESTRY_FILE } from './data.js';
console.log("zadanie 13");

function every(mass, isEvery) {
    if (!Array.isArray(mass)) {
      return "Error"
    }
    for (i = 0; i < mass.length; i++) {
      if (!isEvery(mass[i])) {
        return false;
      }
    }
    return true;
  }
  function some(mass, isSome) {
    if (!Array.isArray(mass)) {
      return "Error"
    }
    for (i = 0; i < mass.length; i++) {
      if (isSome(mass[i])) {
        return true;
      }
    }
    return false; 
  }
// Ваш код
console.log(every([NaN, NaN, NaN], isNaN));
// - true
console.log(every([NaN, NaN, 4], isNaN));
// … false
console.log(some([NaN, 3, 4], isNaN));
// - true
console.log(some([2, 3, 4], isNaN));
// … false