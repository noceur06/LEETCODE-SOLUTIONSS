/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "";
    let first = strs[0];
    for(let i =0; i<first.length; i++){
        for(let j =0; j< strs.length; j++){
            if(strs[j][i] !== first[i]){
               return prefix;
            }
        }
           prefix+=first[i];
    }
    return prefix;
  


    
};