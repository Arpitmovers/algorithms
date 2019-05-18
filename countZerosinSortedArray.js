// https://www.geeksforgeeks.org/find-number-zeroes/
// solution using binary search as the array is of form [1,1,1,1,0,0]
function countZero(array, start, end) {

    if (end >= start) {


        var mid = Math.floor((start + end) / 2);
        if ((array[mid] == 0 && array[mid - 1] == 1) || (mid==0 && arr[mid] ==0 )) {  // startinng elem is 0 itself
            return mid;
        }

        if (array[mid] == 1) {
            return countZero(array, mid + 1, end);
        }
        else
            return countZero(array, start, mid-1);

    }
    return -1;
}

var arr = [1, 1, 1, 1, 0, 0];
var indexZero = countZero(arr, 0, arr.length - 1);
var zeroCount = arr.length - indexZero;
