
function LCS(a,b){
 var lenA = a.length;
 var lenB = b.length;
 
 console.log('' ,a ,'  ',b);
 if(lenA == 0 || lenB == 0 ){
    return 0;
 }

 if(a[lenA-1] == b[lenB-1]){
     let c = getTrimmedString(a);
     let d = getTrimmedString(b);
     console.log('last char are equal LCS(',c,d,')');
    return 1+ LCS(c,d);
 } else {

     let x = getTrimmedString(a);
     let y = getTrimmedString(b);
     console.log('lcs(x,b),',x,b, 'lcs(a,y)',a,y);
     var re1 =  LCS(x,b);
     var re2 =  LCS(a,y);
     return re1 > re2 ? re1:re2;

 }

}

function getTrimmedString(str){
    return  str.substring(0,str.length-1);
}

var res = LCS("ABCA","ABCCCA")
console.log('length is  ',res );
