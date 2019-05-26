/* NOTES:

FBT: has all nodes at each level

CBT: if u represent  tree in an array there should not be any gaps (IN BETWEEN)/


MAX HEAP : is a CBT where every node is > all its descendant




EVERY FULL B TREE IS A COMPLETE B T
 max HEAP does not mean that the array is in sorted order


 -- heap sort - first we build a max heap (we get the max element at top)
 move to root element to end of array so that max elem is at end 
 decrement size of heap by 1.
 do heapify of remaing heap
*/
/** insertion, deletion adjustment is in diff direction */

function maxHeapify(arr, index) {

    var maxIndex;
    var leftChild = getLeftChild(index, arr);
    var rightChild = getRightChild(index, arr);
    if (leftChild != undefined && arr[index] < leftChild) {
        maxIndex = (2 * index) + 1;
    } else
        maxIndex = index;

    if (rightChild != undefined && rightChild > arr[maxIndex]) {
        maxIndex = (2 * index) + 2;
    }

    if (maxIndex != index) {
        swap(index, maxIndex, arr);
        maxHeapify(arr, maxIndex);
    }
}

/**does heapify from root(start) till end index 
 * does not consider elem after end
 */
function heapify(array, start, end) {
    var left = getLeftChild(start, array);
    var rightChild = getRightChild(start, array);
    var maxIndex = start;
    var elem = array[start];
    var lIndex = (2 * start) + 1;
    var rIndex = (2 * start) + 2;

    if (left != undefined && (left > elem) && (lIndex < end)) {
        maxIndex = lIndex;
    }
    if (rightChild != undefined && (rightChild > array[maxIndex]) && (rIndex < end)) {
        maxIndex = rIndex;
    }
    if (maxIndex != start) {
        swap(start, maxIndex, array);
        heapify(array, maxIndex, end);
    }
}


function getLeftChild(index, arr) {
    return arr[2 * index + 1];
}

function getRightChild(index, arr) {
    return arr[2 * index + 2];
}

function buildHeap(arr) {
    for (var i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        maxHeapify(arr, i);
    }
    return arr;
}

function swap(index, maxIndex, arr) {
    var tmp;
    tmp = arr[index];
    arr[index] = arr[maxIndex];
    arr[maxIndex] = tmp;
}

var arr = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7]; // len = 10

console.log('HEAP ', buildHeap(arr));
// we start from last level and run heapify(called recursively for child nodes) for all the nodes 
/**
 *  0  1  2  3  4  5   6   7   8  9
 * [4, 1, 3, 2, 16, 9, 10, 14, 8, 7]; 
 * 
 * o/p
 * [16, 14, 10, 8, 7, 9, 3, 2, 4, 1]
 */


// return elements in arr in sorted order (asc)
function heapSort(arr) {
    arr = buildHeap(arr);
    // arr is max heap

    console.log(' heap : ', arr);
    var i = arr.length - 1;
    while (i > 0) {
        console.log(' swap  elem at index 0', i);
        swap(0, i, arr);
        heapify(arr, 0, --i);
    }
    return arr;

}
var arrayToSort = [5, 13, 2, 25, 7, 17, 20, 8, 4];
var heapArr = heapSort(arrayToSort);
/*heap sort 
create max heap
swap 1st and last element now the last element is not part of heap,
we heapify top down till the last index of heap
*/


/***
 * INSERTION algo
 * insert new node in last index
 *  compare  the new nnode with its parent and swap
 * O(log n)  as time depends on no of swaps
 * minm time is o(1) in no swap is needed
 *
 * for insertion heapify is bottom -up
 */

/**
 * deletion in heap
 * we delete top element (can keep it in last index)
 * insert the last elem in CBT to zeroth index
 * size of decreases
 * preservee heap property by starting top down HEAPIFY
 */
