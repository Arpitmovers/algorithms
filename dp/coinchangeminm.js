

function minCoinsNeededRecurse(coinsArr,sum,coinCount,res){
    console.log(' sum ',sum,'res  ',res)
    if(sum == 0){
        return 0;
    }

    for(var i=0;i<coinCount;i++){
        if(coinsArr[i] <= sum){
           // console.log('minCoinsNeededRecurse ', sum - coinsArr[i]);
           var tempres =  minCoinsNeededRecurse(coinsArr, sum - coinsArr[i],coinCount,i);
           console.log(' tempres ',tempres,' res ',res);
           if(tempres != res && tempres +1 < res){
                res = tempres +1;
           }
        }
    }

    return res;
}
/*var minmCoins = minCoinsNeededRecurse([25,10,5],30,3)
console.log(' minm coins needed are ',minmCoins);
*/

function coinChangeMinmCoins(coinsArr,sum){

    var sumAll = new Array(sum+1);
    sumAll[0] = 0;
    for(var i=1;i<sumAll.length;i++){
        sumAll[i] = 9999;
    }

    for(i=1;i < sumAll.length;i++){
        for(var j=0; j < coinsArr.length;j++){
            if(coinsArr[j] <= i){
                    var val =  sumAll[i - coinsArr[j]];
                   if(val +1 < sumAll[i]){
                        sumAll[i] = 1+ val;
                   } 

            }
        }
    }
}



coinChangeMinmCoins([1,2,5],11)

