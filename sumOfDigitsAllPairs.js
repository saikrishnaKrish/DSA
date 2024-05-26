// You are given an array nums consisting of positive integers where all
//  integers have the same number of digits.

// The digit difference between two integers is the count of different digits that 
// are in the same position in the two integers.

// Return the sum of the digit differences between all pairs of integers in nums.

 

// Example 1:

// Input: nums = [13,23,12]
// subraction
// 133,233
// 2-1=1


// [13,23,12]
// 13-23==1
// 13-12==1
// 23-12==1+1
// ===========4


// 13,23,12,33,19
// ==============
// 13--23==>1
// 13-33==>2
// 13-19==>6
// 13-12==>1
// ===================> 10

// 23---12 ==>1+1
// 23---33==>1
// 23---19===?1+6
// ===================>10
// 12--33===>2+1
// 12--19==>7
// ===================>10
// 33==19==>2+6
// ===================>8



// Output: 4

// Explanation:
// We have the following:
// - The digit difference between 13 and 23 is 1.
// - The digit difference between 13 and 12 is 1.
// - The digit difference between 23 and 12 is 2.
// So the total sum of digit differences between all pairs of integers is 1 + 1 + 2 = 4.

// Example 2:

// Input: nums = [10,10,10,10]

// Output: 0

// Explanation:
// All the integers in the array are the same. So the total sum of digit differences 
// between all pairs of integers will be 0.

 

// Constraints:

// 2 <= nums.length <= 105
// 1 <= nums[i] < 109
// All integers in nums have the same number of digits.



// let nums = [13,23,12]

// 1.using ^ opertor===> two elements are same or not
// 2.create a function which will return a count;
// 3.using for loop we are going to iterate all the elements

// TC:O(n^2)
// SC:O(1)


function getDiff(num1,num2){
    let diff=0;
    let i=0;
    num1=num1.toString()
    num2=num2.toString()
    while(i<num1.length){
        if((num1[i]^num2[i])){
            // console.log("ele",num1[i],num2[i])
            // console.log("entered loop",diff)
                        diff++
                }
            i++;
        }
        // console.log("returning",diff)
        return diff;
}

let count=0;
function sumOfDigitsAllPairs(arr){
            for(let i=0;i<arr.length;i++){
                for(let j=i+1;j<arr.length;j++){
        
                    count+=getDiff(arr[i],arr[j])
                            
        }
            }
    return count
}


console.log(sumOfDigitsAllPairs([13,23,12,33,19]))
