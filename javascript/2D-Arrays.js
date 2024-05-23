
//creating an array
function create2DArray(rows,cols){
let arr=[];
for(let i=0;i<rows;i++){
  arr.push([])
  for(let j=0;j<cols;j++){
    arr[i].push([])
  }
}
return arr;
}

console.log(create2DArray(5,4))
// #################################


let a=[[2,3,4,2,4],[5,6,23,5,3],[33,3,334,5,32]]

//printing the array elements
for(let i=0;i<a.length;i++){
    for(let j=0;j<a[i].length;j++){
        console.log(a[i][j])
    }
    console.log("--------------")
}


let a=[[1,2,3],[4,5,6],[7,8,9]]

//printing diagonal
for(let i=0;i<a.length;i++){
    console.log(a[i][i])
}

//printing anti-diagonal
let n=a[0].length;
for(let i=n-1;i>=0;i--){
    console.log(a[i][i])
}


// #################################
let a=[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]]

for(let i=0;i<a.length;i++){
  console.log(a[i])
  
}