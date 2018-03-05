console.log('hello world')

let val

val=document.querySelectorAll('li')
val.forEach((item,index) => {
  console.log(item)
  item.textContent=`${index} : hello world`
  item.style.background='red'
  item.style.padding='20px'
});

const liodd=document.querySelectorAll('li:nth-child(odd)')
liodd.forEach(x=>{
  console.log(x)
})
console.log(liodd)

const lieven=document.querySelectorAll('li:nth-child(even)')
lieven.forEach(x=>{
  console.log(x)
})
console.log(lieven)

liodd.forEach((item)=>{
  item.style.background='green'
  item.style.color='yellow'
  item.style.padding='20px'
})

lieven.forEach((item)=>{
  item.style.background='grey'
})

let lis=document.getElementsByTagName('li')
lis=Array.from(lis)
console.log(lis)
for(let i=0;i<lis.length;i++){
  console.log(lis[i])
}
console.log('----------')
console.log(val)