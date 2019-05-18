// https://www.geeksforgeeks.org/find-zeroes-to-be-flipped-so-that-number-of-consecutive-1s-is-maximized/

function findZeroIndices(arr, m) {
    // m atmost zeros allowed to be toggled
    var windowL = 0, windowR = 0;
    var windowZeroCnt = 0;
    var diff=0;
    var maxL = 0,maxR = 0;
    while (windowR <= arr.length) {
        
        if (windowZeroCnt <= m) {
            if (arr[windowR] ==0){
                windowZeroCnt++;
            }
            windowR++;
        }

        if(windowZeroCnt > m){
            if(arr[windowL]==0){
               windowZeroCnt --;
            }
            windowL++;
        }


        if(windowR -windowL >diff){
            diff = windowR - windowL;
            maxL = windowL;
            maxR = windowR;
        }
    }
    
    
    for(var x=maxL;x<maxR;x++){
        if(arr[x] ==0){
            console.log(x);
        }
    }

}
findZeroIndices([1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1],2)
// o/p 5,7 indexes 
