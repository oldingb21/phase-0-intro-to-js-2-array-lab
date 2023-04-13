const cats = ["Milo", "Otis", "Garfield"];
const destructivelyAppendCat = () => {
    cats.push("Ralph");
}
const destructivelyPrependCat = () => {
    cats.unshift("Bob");
}
const destructivelyRemoveLastCat = () => {
    cats.pop();
}
const destructivelyRemoveFirstCat = () => {
    cats.shift();
}
function appendCat ()  {
    return appendCat = [...cats, "Broom"];
}
function prependCat() {
    return prependCat = ["Arnold", ...cats];
}
function removeLastCat() {
    return removeLastCat = cats.slice(0, 2);
}
function removeFirstCat() {
    return removeFirstCat = cats.slice(1)
}