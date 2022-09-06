let item = [12, "google", 32, null, "yahoo", 25];
let new_item = item.map(function(y){
    if(typeof y == "number"){
        return Math.pow(y,2);
    }else if(typeof y == "string"){
        return y.toUpperCase()
    }else{return y;
    }
})
console.log(new_item);