

function maxHeapify(arr, index) {

    var maxIndex;
    var leftChild = getLeftChild(index, arr);
    var rightChild = getRightChild(index, arr);
    if(leftChild != undefined && arr[index] < leftChild){
        maxIndex =( 2 * index )+ 1;
    }else 
     maxIndex = index;

    if(rightChild != undefined && rightChild > arr[maxIndex]){
        maxIndex = ( 2 * index )+ 2;
    } 
    
    if(maxIndex != index){
        swap(index,maxIndex,arr);
        maxHeapify(arr,maxIndex); 
    }
}

function getLeftChild(index, arr) {
    return arr[2 * index +1];
}

function getRightChild(index, arr) {
    return arr[2 * index + 2];
}

function buildHeap(arr) {
    for (var i = (arr.length / 2) - 1; i >= 0; i--) {
        maxHeapify(arr, i);
    }
    
}

function swap(index,maxIndex,arr){
    var tmp;
    tmp = arr[index];
    arr[index]= arr[maxIndex];
    arr[maxIndex] = tmp;

}

var arr = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7]; // len = 10
buildHeap(arr);
console.log('HEAP ',arr);
/**
 *  0  1  2  3  4  5   6   7   8  9
 * [4, 1, 3, 2, 16, 9, 10, 14, 8, 7]; 
 */
