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
    let dlina=mass.length;
    for (let i=0; i<dlina;i++) {
        mass.push(mass.shift())
    }
}