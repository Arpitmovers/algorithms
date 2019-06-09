


function max(a,b){
    return a>=b ?a :b;
}
   
   
function LCS(a,b){
    // colmn represents a string
    // row represemts b string
     var matrix = new Array(a.length);
     
     for(var j=0;j<matrix.length;j++){
       matrix[j]  = new Array(b.length);
     }
   
    
     for(let i =0 ;i<b.length;i++){
         // 1st row all elem 
         matrix[0][i] = 0;
     }

     for(let i=0;i<a.length;i++){
        matrix[i][0] = 0;
     }

     for(let i=1;i<a.length;i++){
        for(j = 1;j<b.length;j++){
            if(a.charAt(i-1) == b.charAt(j-1)){
                matrix[i][j] = 1 + matrix[i-1][j-1];
            }else{

                matrix[i][j] = max(matrix[i-1][j],matrix[i][j-1]);
            }

        }
     }

    return matrix[a.length][b.length];
   
   
}
   
   var res = LCS("ABCA","ABCCCA")
