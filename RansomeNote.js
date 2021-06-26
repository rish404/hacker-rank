//https://www.hackerrank.com/challenges/ctci-ransom-note/problem

var map = {};
var replicable = true;
for (var i of magazine){
    map[i] = (map[i] || 0) + 1;
}
for (var i of ransom){
    map[i] = (map[i] || 0) - 1;
}
for (var i in map){
    if (map[i] < 0){
        replicable = false;
        break;
    }
}
console.log(replicable ? 'Yes' : 'No');
