

function getNodesCount(n) {
    var height = Math.ceil(Math.log2(n));
    var totalnodes;
    totalnodes = 2 * Math.pow(2, height) - 1;
    return totalnodes;

}

// creates segmentTree for inputElements in range of(startIdx, endIdx)
// currentIndex is  index in segmentTree (where we have to store data)
function createSegRecursive(inputElements, startIdx, endIdx, segmentTree, treeIndex) {

    // base case (single element)
    if (startIdx == endIdx) {
        segmentTree[treeIndex] = inputElements[startIdx];
        return;
    }

    var mid = getMidIndex(startIdx, endIdx);
    // left tree ko build karke la
    createSegRecursive(inputElements, startIdx, mid, segmentTree, (2 * treeIndex) + 1);
    // right tree ko build karke la
    createSegRecursive(inputElements, mid + 1, endIdx, segmentTree, (2 * treeIndex) + 2);
    segmentTree[treeIndex] = treeIndex[(2 * treeIndex) + 1] + treeIndex[(2 * treeIndex) + 2];


}


function getMidIndex(start, end) {
    return Math.floor(start + (end - start) / 2);
}

function createSegmentTree(elements) {
    count = this.getNodesCount(elements.length);
    var array = new Array(count);
    /// is tree ko build karke la 
    createSegRecursive(elements, 0, array.length - 1, array, 0);
    return array;
}
var arr = [1, 3, 5, 7, 9, 11];

console.log(' segment tree:: ', createSegmentTree(arr));
