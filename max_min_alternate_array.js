
function alternateMaxMin(array){
  var soln = [];
  var i=0;
  var j = array.length - 1;
  var mid = Math.ceil(j/2);
  
  if(array.length %2 == 0){
      while(i<j){
        soln.push(array[j--]);
        soln.push(array[i++]);
      }
  }else{
      while(i !==j){
         soln.push(array[j--]);
        soln.push(array[i++]);
      }
      soln.push(array[i]);
  }  
  return soln.join();
  
}

alternateMaxMin([1,2,3,4,5,6,7,8 ])
 alternateMaxMin([1,2,3,4,5,6,7 ]) 
