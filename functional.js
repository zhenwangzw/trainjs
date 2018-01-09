let mapForEach = function(arr,fn){
  let newArr=[]
  for(let i=0;i<arr.length;i++){
    newArr.push(fn(arr[i]))
  }
  return newArr
}

let isLargerThanTen = function(num){
  return num>10
}

let arr=[1,2,3,4,56,78,9,10]
let newArr=mapForEach(arr,isLargerThanTen)
console.log(newArr)

newArr=arr.filter(x=>x>10)
console.log(newArr)

newArr=arr.map(x=>x*10)
console.log(newArr)

let result=arr.reduce((total,current)=>total+=current)
console.log(result)

arr.reduce(function(total,current,index,arr){
  console.log(current)
  console.log(arr)
})

//EXAMPLE1

let checkIfPastLimit=function(limitor,item){
  return item>limitor
}

newArr=mapForEach(arr,checkIfPastLimit.bind(this,10))
console.log(newArr)

// EXAMPLE2

let checkIfPastLimitSimp=function(limitor){
  return (function(limitor,item){
    return item>limitor
  }).bind(this,limitor)
}
newArr=mapForEach(arr,checkIfPastLimitSimp(10))
console.log(newArr)

let checkIfPastLimitSimp2=function(limitor){
  return function(item){
    return item>limitor
  }
}
newArr=mapForEach(arr,checkIfPastLimitSimp2(10))
console.log(newArr)

