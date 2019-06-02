// find longest string where sum of 1st half is same as second half

// "9430723" - 4307 is longest string with sum l = sum r
//
function findLongestStringwithSumEquals(str) {
    // brute force
    var longestValidsoln = "";
    var longestValid = "";

    for (var i = 0; i < str.length - 1; i++) {
        for (var j = i + 1; j < str.length; j += 2) {
            var st = str.substring(i, j + 1);
            console.log(' check Left , right equality for ', st);
            if (checkLeftRightSum(st)) {
                longestValid = st;
            }
            if (longestValidsoln.length < longestValid.length) {
                longestValidsoln = longestValid;
            }
        }
    }
    return longestValidsoln;
}


// EACH I=J HAS VALUE 0 
function create2dArr(len, str) {
    var arr = new Array(len);
    for (var h = 0; h < len; h++) {
        arr[h] = new Array(len);
        arr[h][h] = str[h];
    }

    return arr;
}

function getElemAtRowColm(i, j, arr) {
    return arr[i][j];
}

function findLongestStringwithSumEqualsMatrix(str) {

    var sum = create2dArr(str.length, str);
    var n = str.length;
    var maxLen = 0;
    for (len = 2; len < n; len++) {
        console.log(' len is ', len);
        for (var i = 0; i < n - len + 1; i++) {
            var j = i + len - 1; // j is ending index
            // sum (i)(j) is sum b/w indexes i , j .length is j - i + 1 
            var k = Math.floor(len / 2);
            console.log('    finding sum for (', i, j, ') =  ', '(', i, ') (', j - k, ') +  (', j - k + 1, ')(', j, ')');
            sum[i][j] = Number(sum[i][j - k]) + Number(sum[j - k + 1][j]);
            if (len % 2 == 0 && (sum[i][j - k] == sum[j - k + 1][j]) && (len >= maxLen)) {
                console.log('  length with max sum : ', len, ' indexes are ', i, j);
                maxLen = len;
            }

        }

    }
    return maxLen;

}

function checkLeftRightSum(str) {
    var sumL = 0;
    var sumR = 0;
    var i = 0;
    var j = str.length - 1;
    while (i < j) {
        sumL += Number(str[i++]);
        sumR += Number(str[j--]);

    }
    if (sumL == sumR) {
        return true
    }
    return false;
}

//findLongestStringwithSumEquals("9430723");

findLongestStringwithSumEqualsMatrix("9430723")

/**          9 4  3 0 7 2 3
     * 9     9
     * 4     - 4
     * 3     - - 3
     * 0     - - - 0
     * 7     - - - - 7
     * 2     - - - - - 2
     * 3     - - - - - -  3
 *
 * lower matrix i > j
 * higher matrix j > i
 * sum(i)(j) = sum(i)(j-1) + arr[j]
 *

 */
