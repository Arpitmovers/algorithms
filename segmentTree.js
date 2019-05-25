


// creates segmentTree for inputElements in range of(startIdx, endIdx)
// currentIndex is  index in segmentTree (where we have to store data)
// treeIndex is root of segment tree
function createSegRecursive(inputElements, startIdx, endIdx, segmentTree, treeIndex, casee) {
    console.log('startIdx :', startIdx, 'endIdx ', endIdx, 'treeIndex', treeIndex, 'case  ', casee);

    if (treeIndex > segmentTree.length) {
        return 0;
    }
    // base case (single element)
    if (startIdx == endIdx) {
        segmentTree[treeIndex] = inputElements[startIdx];
        console.log('value at ', treeIndex, 'is ', segmentTree[treeIndex]);
        return;
    }

    var mid = getMidIndex(startIdx, endIdx);
    // left tree ko build karke la
    createSegRecursive(inputElements, startIdx, mid, segmentTree, (treeIndex * 2) + 1, 'left');
    createSegRecursive(inputElements, mid + 1, endIdx, segmentTree, (treeIndex * 2) + 2, 'right');
    segmentTree[treeIndex] = segmentTree[(treeIndex * 2) + 1] + segmentTree[(treeIndex * 2) + 2];

}


function createSegmentTree(elements) {
    var count = getNodesCount(elements.length);
    var array = new Array(count);

    /// is tree ko build karke la 
    createSegRecursive(elements, 0, elements.length - 1, array, 0, 'top');
    return array;
}


//positon is root if my segMent tree 
// positon is for storage at correct location
// low , high are representation of node  range in segment tree
function recursiveSum(segmentTree, queryStart, queryEnd, low, high, positon) {
    console.log('low, high, positon ', low, high, positon);
    
    
    // total overlap
    if (low >= queryStart && high <= queryEnd) {
        return segmentTree[positon];
    }

    // no overlap
    if (low > queryEnd || high < queryStart) {
        return 0;
    }

    var mid = getMidIndex(low, high);
    var s1 = recursiveSum(segmentTree, queryStart, queryEnd, low, mid, (2 * positon) + 1);
    var s2 = recursiveSum(segmentTree, queryStart, queryEnd, mid + 1, high, (2 * positon) + 2);
    console.log(' s1 s2 ', s1, s2);
    return s1 + s2;

}


function findSumInRange(segmentTree, queryStart, queryEnd, origArrLength) {
    if (queryStart > segmentTree.length || queryEnd < 0 || queryEnd < queryStart) {
        return null;
    }
    return recursiveSum(segmentTree, queryStart, queryEnd, 0, origArrLength - 1, 0);
}


function getNodesCount(n) {
    // (2 raised to h+1) -1
    var height = Math.ceil(Math.log2(n));
    var totalnodes;
    totalnodes = Math.pow(2, height + 1) - 1;
    return totalnodes;

}
 
function getMidIndex(start, end) {
    return Math.floor(start + (end - start) / 2);
}


var arr = [1, 3, 5, 7, 9, 11];
//var segmentTree = createSegmentTree(arr);
var segmentTree = [36, 9, 27, 4, 5, 16, 11, 1, 3, null, null, 7, 9, null, null];
//console.log(' segment tree:: ', createSegmentTree(arr));



//range queries: find sum
var queryStart = 1, queryEnd = 2;  // ans 8

var sum = findSumInRange(segmentTree, queryStart, queryEnd, arr.length);

if (!sum) {
    console.log(' INVALID');
} else {
    console.log('sum in range ', queryStart, queryEnd, ' is ', sum);
}
// space complexxity O(n) as total 2n-1 nodes
// time complexity for update   O(log n)
// https://www.youtube.com/watch?v=ZBHKZF5w4YU&t=1015s  -
