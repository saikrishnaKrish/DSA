// word1 = "ab", word2 = "pqrs"
// w1>w2
// w2>w1

// lsg--loop
//   str=  wrd1[i]+wrd2[i]
    
// str=str+wrd.slice(i)

// return str
// Tc=O(largestString)
// sc=O(1)

// let wrd="arere"
// let s=wrd.slice(1)
// console.log(s)


function mergeStrings(str1,str2){
    let mergedString="";
    let Sstr="",rem=""
    let i=0;
        if(str1.length<str2.length){
            Sstr=str1
            rem=str2
        }else{
            Sstr=str2
            rem=str1
        }
        for(i=0;i<Sstr.length;i++){
            mergedString=mergedString+str1[i]+str2[i]
        }

        mergedString+=rem.slice(i)
    return mergedStringshall
}


console.log(mergeStrings("ab","pqrs"))