let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
let numbers = array.filter(function (y){
    if (typeof y == "number") {
        return y;
    }
})
console.log(numbers);
