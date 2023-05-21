// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]; 

function destructivelyAppendCat(name) { 
    cats.push(name); 
}
/*destructivelyAppendCat('Ralph');
console.log(cats);*/

function destructivelyPrependCat(name) {
    cats.unshift(name); 
}
/*destructivelyPrependCat("Bob");
console.log(cats);*/

function destructivelyRemoveLastCat(name) {
    cats.pop(name); 
}
/*destructivelyRemoveLastCat();
console.log(cats);*/

function destructivelyRemoveFirstCat(name) {
    cats.shift(name); 
}
/*destructivelyRemoveFirstCat();
console.log(cats);*/

function appendCat(name) {
    const appendCat = [...cats, name];
    return appendCat; 
}
//console.log(appendCat("Broom"))

function prependCat(name) {
    const prependCats = [name, ...cats]; 
    return prependCats;
}
//console.log(prependCat("Arnold"))

function removeLastCat() {
    const removeLastCat = cats.slice(0, cats.length-1); 
    return removeLastCat;
}
//console.log(removeLastCat())

function removeFirstCat() {
    const removeFirstCat = cats.slice(1);
    return removeFirstCat;
}
//console.log(removeFirstCat())