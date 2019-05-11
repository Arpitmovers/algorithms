
// https://www.geeksforgeeks.org/given-an-array-of-numbers-arrange-the-numbers-to-form-the-biggest-number/
// example {1, 34, 3, 98, 9, 76, 45, 4} 

function arrange(array){
   
   var arr2 = array.sort(function(x,y){
     return giveMax(x,y);      
   });
   for(var h=0;h<arr2.length;h++){
      console.log(arr2[h]);
   
   }
  
} 

function giveMax(a,b){ 
 var x= String(a) +String(b);
 var y = String(b) +String(a);
 return Number(x) >= Number(y) ? -1:1;
}

arrange([1, 34, 3, 98, 9, 76, 45, 4]);

