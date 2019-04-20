/*
solution for 
https://www.hackerrank.com/challenges/bonetrousle/problem
*/


function bonetrousle(n, k, b) {
    // n - no of sticks to buy
    // k - no of boxes shop has
    // b - no of box to buy

    var min = b * (1 + b) / 2;
    var max = b * ((2 * k) - b + 1) / 2;
    if (n < min || n > max) {
        return [-1];
    }

    var solnArr = [];
    for (var i = 0; i < b; i++) {
        solnArr[i] = i + 1;
    }

    var remainingSumTotal = n - min;
    var singleDeltaChange = remainingSumTotal / b;

    for (var i = 0; i < b; i++) {
        solnArr[i] += singleDeltaChange;
    }
    var remainingchange = remainingSumTotal % b;
    if (remainingchange != 0) {
        for (var j = 0; j<remainingchange;i++){
            solnArr[j] += 1;
        }
    }
    return solnArr;

}
