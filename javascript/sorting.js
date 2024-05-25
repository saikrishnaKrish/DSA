// Given an array of n integers, minimize the 
// cost to empty given array where cost of removing 
// // an element is equal to sum of all elements left in an array.
// A[ ] = { 2, 1, 4 }
// Ans = 11
//  Comment
// Explanation
// After removing 4 cost = 4+2+1 = 7
// After removing 2 cost = 2+1 = 3
// After removing 1 cost = 1 = 1

// Total cost = 11

// let arr=[2,1,4]
let arr=[3,5,1,-3]
function minimizeCost(arr){
    let result=0,ts=0;
    arr.sort((a,b)=>b-a)
    ts=arr.reduce((acc,ele)=>acc+ele)
    result=ts
    for(let i=0;i<arr.length;i++){
        ts=ts-arr[i];
        result+=ts
    }
    return result
}
console.log(minimizeCost(arr))

// Tc=O(n);sc=O(1)


// ################################################

function GCD_Val(num1,num2){
    let count =1;
    let maxNum=Math.max(num1,num2);
    let minNum=Math.min(num1,num2);
    while(maxNum>minNum){
        // console.log(maxNum,minNum)
        maxNum=maxNum-minNum;
        count++
    }
    return count
}

// let v=GCD_Val(24,4)
// console.log(v)


let res=[];
let arr=[1,2,3,4]
let total=arr.reduce((acc,val)=>acc*val,1)
for(let i=0;i<arr.length;i++){
    res.push(GCD_Val(total,arr[i]))
}
// return res
console.log(res);


// ################################################

//## Given an array of size n, find the count of noble integers.
A = [ -10, 1, 1, 3, 100 ]

let count = 0;
for(let i=0;i<A.length;i++){
    console.log("i",i+1,"A",A[i])
    if(i==A[i]){
        count+=1
    }
}

console.log(count)


