// comment
let defaultNumber = 0; // number, változó.

let string = "string"; // alap string = változó.

defaultNumber = 5; // defaultNumber változó átalakítása, 5-é.

console.log(defaultNumber + 5) // a defaultNumber változóhoz hozzáadunk 5-öt.

console.log(string) // string változónk kiiratása 
let numberOne = null // null érték = nil;
let numberTwo = 5 // második szám változónk értéke 5 .

function logDatas(colorOne, colorTwo){
    console.log("A csoki " + colorOne + " " + "A márk" + " " + colorTwo); // funkció logolása konzolba, több stringgel összefüzve
};
logDatas("fekete.", "fehér");

function loadStrings(name, age, favouriteColor){
    console.log("My name is" + " " + name + " " + "and my age is" + " " + age + " " + "and my favouritecolor" + " " + favouriteColor) // 3stringer összefűzés.
};
loadStrings("Márk", 15, "red") // loadstrings funkció meghívása.



function loadNumbers(){
    console.log(numberOne + numberTwo); // numberOne változónk és numberTwo változónknak az értéke.  
};

// Nincs meghívva sehol.

function defaultFunction(){

}; // alap funkció létrehozása és lezárása.