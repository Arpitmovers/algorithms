
// arp 
// ar-->chosen , p is remaining
//arp ->chosen , '' is remaing 
function permute(remain,chosen){
   // indent(chosen.length);
     console.log("permute \(",remain+",",chosen,")");
   if(remain.length ==0){
        debugger;
     console.log(chosen);
   }else {
     // choose , explore, unchoose
     for(var i=0;i<remain.length;i++){
         // chose(remove) from 'remaining' and add to choosen
         var letter = remain[i];
         chosen += letter;
    
         part1 = remain.substring(0, i);
         part2 = remain.substring(i + 1, remain.length);
         remain = part1 + part2;

         // explore
         permute(remain,chosen);
          debugger;
         // unchoose (add the 'chosen' charachter back to 'remain' and delete it from chose)
         remain = remain.substring(0,i) + letter + remain.substring(i,remain.length);
         chosen = chosen.substring(0,chosen.length-1);
       console.log('chosen ',chosen , 'remain' ,remain);

    }
   }  
}

function indent(n){
    for(var h=0;h<n;h++){
       console.log(" ");
    }
}


function findallcombinations(str){
 permute(str,"");

}
