let languages = ["html","css","javascript","python","php"];
let new_language =languages.filter(function(y){
    return y.length > 3
})
console.log(new_language);