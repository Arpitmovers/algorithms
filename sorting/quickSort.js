
/*2,8,7,1,3,5,6,4

pivot = 4 (j=7)
i j   
0 6
1 4 
*/

function swap(array, a, b) {
    var tmp = array[a];
    array[a] = array[b];
    array[b] = tmp;
}
function partition(array, left, right) {
    var pivot = array[0];

    if (left < right) {

        while (array[left] <= pivot) {
            left++;
        }
        while (array[right] > pivot) {
            right--;
        }
        // swap(array[left], array[right]);
        swap(array, left, right);
    }
    console.log(' swapping ', pivot, array[left]);
    swap(array, right,0);


}

function quickSort(array, left, right) {

    if (right < left) {
        return;
    }

    var partitionIndex = partition(array, left, right);
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex, right);

}

var array = [2, 8, 7, 1, 3, 5, 6, 4];

quickSort(array, 0, array.length - 1);
