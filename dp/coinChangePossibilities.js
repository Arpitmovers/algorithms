


function countWays(coins,sum,totalCoins){

  if(sum < 0){
    return 0;
  }
  if(sum == 0){
    // do not include any coin
    return 1;
  }

  if(sum > 0 && totalCoins <=0){
    return 0;
   }


// including last  coin  +  not including  last coin
    return countWays(coins, sum - coins[totalCoins],totalCoins) + countWays(coins,sum,totalCoins-1);
}

function countWaysMemosiation(coinArr,sum){
 
    coinArr.unshift(0);
    var table = new Array(coinArr.length);
    for(var i=0;i<table.length; i++){
        table[i] = new Array(sum+1);
    }
    table[0][0] = 1;

    for(i=1;i<sum+1 ;i++){
        table[0][i] = 0;
    }

    for(i=0;i<table.length;i++){
        table[i][0] = 1;
    }

    for(i =1 ;i<table.length;i++){  // coins
        for(var j =1 ;j<sum+1;j++){   // sums 1,2,3,
            let sumInclude = 0, sumExclude = 0;
            //sumInclude --> include the last elem         // sumExclude --> exclude the last elem
            sumInclude =  j-i >=0 ? table[i][j-i]:0;
            sumExclude  =   table[i-1][j];
            console.log('for (',i,j,')',' sumInclude',sumInclude,'sumExclude ',sumExclude);

            table[i][j]  = sumInclude + sumExclude;


        }
    }
}


//countWays([1,2,3],5,2)
/**
 *  f([1,2,3],5-3,2)  + f([],5,1)
 * 
 * 
 */

countWaysMemosiation([1,2,3],5,2)
