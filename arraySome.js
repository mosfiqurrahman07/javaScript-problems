
function getArraySum(numbers){
    var sum = 0;
    for(var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [45, 578, 56, 47, 12, 654, 57];
var result = getArraySum(numbers);
console.log("total of the numbers: ", result);