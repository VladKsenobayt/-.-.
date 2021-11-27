console.log("zadanie 1");
let city = new Object();
var city1 = {
    
};
city1["name"] = "ГородN";
city1["population"]=10000000;
console.log("zadanie 2");
var city2 = {name:"ГородM", population:1e6};
console.log("zadanie 3");
function getName (cityname) {
    return(cityname.name)
}
city2.getName=getName (cityname=city2) 
city1.getName=getName (cityname=city1) 
console.log(city1.getName)
console.log(city2.getName)
console.log("zadanie 4");
function exportStr(cityname) {
    var strok = "";
    for (var k in cityname) {
        if (cityname[k] != undefined) {
            strok = strok+k+"="+cityname[k]+"\n";
        }
    }
    return(strok)
    //return("name="+cityname.name+"\npopulation="+cityname.population+"\n")
}
city2.exportStr=exportStr (cityname=city2) 
city1.exportStr=exportStr (cityname=city1) 
console.log(city1.exportStr)
console.log(city2.exportStr)
console.log("zadanie 5");
function getObj() {    return(this)}
function getCity(){
    return(getObj())
}
//city1.getCity = getObj;
//city2.getCity = getObj;
//city2.getCity=getCity () 
//getCity: getObj,
//city1["getCity"] = getObj();
//city2["getCity"] = getObj();
//city1.getCity=getCity () 
//function getObj () { return this }
 
city1.getCity = getObj;
city2.getCity = getObj;
console.log(city1.getCity())
console.log(city2.getCity())
