var num = 2.499998;
var restlt = Math.floor(num);
var result2 = Math.ceil(num);
var result3 = Math.round(num);
for(var i = 0; i < 10; i++){
    var randomNumber = Math.random() * 6;
    var output = Math.round(randomNumber);

    console.log(output);
}
