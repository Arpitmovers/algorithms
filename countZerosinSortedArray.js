
// solution using binary search as the array is of form [1,1,1,1,0,0]
function countZero(array, start, end) {

    var mid = Math.floor((start + end) / 2);
    if ((array[mid] == 0 && array[mid - 1] == 1) || (array[mid] == 1 && array[mid + 1] == 0)) {
        return mid;
    }

    if (array[mid] == 1) {
      return  countZero(array, mid + 1, end);
    }
    if (array[mid] == 0) {
       return countZero(array, start, mid);
    }

}


var arr = [1, 1, 1, 1, 0, 0];
var indexZero = countZero(arr, 0, arr.length - 1);
var zeroCount = arr.length - indexZero;
