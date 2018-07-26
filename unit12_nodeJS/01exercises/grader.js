function average(scores) {
    var total = scores.reduce(function(sum, score){
        return sum += score;
    })

    return Math.round(total/scores.length);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
var avg1 = average(scores);

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
var avg2 = average(scores2);

console.log("Avg1: " + avg1);
console.log("Avg 2: "+ avg2);