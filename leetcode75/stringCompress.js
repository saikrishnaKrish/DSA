


// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of consecutive repeating characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, 
// but instead, be stored in the input character array chars.
//  Note that group lengths that are 10 or
//   longer will be split into multiple characters in chars.

// After you are done modifying the input array, 
// return the new length of the array.

// You must write an algorithm that uses only constant extra space.

 

// Example 1:

// Input: chars = ["a","a","b","b","c","c","c"]
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
// Example 2:

// Input: chars = ["a"]
// Output: Return 1, and the first character of the input array should be: ["a"]
// Explanation: The only group is "a", which remains uncompressed since it's a single character.
// Example 3:

// Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
// Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
// Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".




// let arr = ["a","a","q","q","c","c","c"]
// approach
//hashmap ---> to get the count of chars
//a=>2,q=>2,c=>3
//loop over the hashmap ===> convert the hs into array
//create a string otherwise split into chars

let arr=["a","a","a","b","b","a","a"]
let arr=["a","a","b","b","c","c","c"]
let hs= new Map();
let count=1
let result=[]

for(let i=0;i<arr.length;i++){
       if(arr[i]==arr[i+1]){
           if(hs.has(arr[i])){
               count = hs.get(arr[i]);
               count+=1;
               hs.set(arr[i],count)
           }
           else{
               hs.set(arr[i],2)
           }
       }else{
        //    console.log("a",arr[i],"arr",arr[i+1])
        let fval= [...hs][0]
        if(fval==undefined){
            hs.set(arr[i],1)
        }
        callArray(hs)
            hs.clear()
       }
}


function callArray(hs){
    // console.log("hs",hs)
    hs.forEach((v,k)=>{
        if(v>1 && v<=9){
            result.push(k,v.toString())
        }
        else if(v>9){
            console.log(v.toString().split(""))
            let temp = v.toString().split("")
            result.push(k,...temp)
        }
        else{
            result.push(k)
        }
    })
    // console.log(result)
}
console.log(result)
console.log(result.length)



https://leetcode.com/problems/string-compression/?envType=study-plan-v2&envId=leetcode-75



let arr=["a","a","x","b","b","b","c","c","c","d","e","f"]
let result=[]
let count=1;
let prevChar="",i=0;
for( i=1;i<arr.length+1;i++){
    if(arr[i]==arr[i-1]){
        count++
    }else{
        if(count>1){
            result.push(arr[i-1],count)
        }
        else{
            result.push(arr[i-1])
        }
          count=1
    }
}

// console.log(result,i)

// let arr=[ 'a', 'b', 12 ]
// arr=arr.join("")
// arr=arr.split("")
// console.log(arr)

for(let i=0;i<result.length;i++){
    arr[i]=result[i].toString()
}
console.log(result,arr)


// #####################################################