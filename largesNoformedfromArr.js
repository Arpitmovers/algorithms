
// https://www.geeksforgeeks.org/given-an-array-of-numbers-arrange-the-numbers-to-form-the-biggest-number/
// example {1, 34, 3, 98, 9, 76, 45, 4} 
//  (34,3) (1) (98,9) (76) (45,4)
   
function (array){
 // create bucket based on MSB of each no
 // concat and resolve 
 let bucket = {};
  for(let i=0;i<array.length;i++){
       let buckKey = getKey(array[i]);
       bucket[buckKey].push(array[i]);
  }
  
  //
  
  
} 

function giveMax(a,b){ 
 var x= String(a) +String(b);
 var y = String(b) +String(a);
 return Number(x) >= Number(y) ? Number(x):Number(y);
}

function getKey(element){
    return String(element).substring(0,1);
  
