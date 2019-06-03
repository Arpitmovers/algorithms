

function subsetSum(arr, i, X,useCase) {
    console.log(' i :', i, 'X is ', X,'case ',useCase);
    if (X < 0) {
        return false;
    }

    if (X == 0) {
        return true;
    }

    return subsetSum(arr, i + 1, X - arr[i],1) || subsetSum(arr, i + 1, X,2);


}
var res = subsetSum([3, 2, 7, 1], 0, 6,'main')
console.log(' ans is ', res);
// here 6 can be obtained from <3,2,1>
