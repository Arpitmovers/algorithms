

function max(a, b) {
    return a >= b ? a : b;
}

function findMaxSubArray(arr) {

    var computedMax = [];
    computedMax[0] = arr[0];
    debugger;
    for (var i = 1; i < arr.length; i++) {
        computedMax[i] = this.max(computedMax[i - 1] + arr[i], arr[i]);
    }


}

var res = findMaxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
