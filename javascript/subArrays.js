let a=[4,2,10,3,12,-2,15]
// #########################################################
//printing all the numbers 
for(let i=0;i<a.length;i++){
    console.log(a[i])
}
// #########################################################
//printing subArray
function subArray(arr,start,end){
    for(let i=a[start];i<a[end];i++){
        console.log(arr[i])
    }
    return "" // to avoid getting undefined
}

console.log(subArray(a,2,5))
// #########################################################
let a=[4,2,10,3,12,-2,15]
//printing all the subArrays
for(let i=0;i<a.length;i++){
    console.log("subArray with ",a[i])
    for(let j=i;j<a.length;j++){
        for(let k=i;k<=j;k++){
            console.log(a[k])
        }
    }
    console.log("aaaaaaaaaaaa")
}

// TC - O(N^3)
// SC - O(1)
// #########################################################
