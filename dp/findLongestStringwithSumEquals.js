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

findLongestStringwithSumEquals("9430723");
