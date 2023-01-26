function longestcmnSubstr(str1,str2){
    let longest = "";
    let current = "";

    for(let i=0; i<str1.length;i++){
        for(let j=0;j<str2.legth;j++){
            if(str1[i] === str2[j]){
                current += str1[i];
                if(current.length > longest.length ) {
                    longest = current
                }
            }else{
                j = -1;
                current = "";
            }
        }
    }
    return longest;
}


console.log(longestcmnSubstr("abcdef","abc"));

console.log('hey');