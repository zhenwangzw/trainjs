//=======================FUNCTION CONSTRUCTORS vs OBJECT.CREATE=======================
function Person(firstname,lastname){
  this.firstname=firstname||'default'
  this.lastname=lastname||'default'
  this.getfullname=function(){
    return this.firstname+' . '+this.lastname
  }
}

let me=new Person()

console.log(me.__proto__)
console.log(Person.prototype)
console.log(me.getfullname())
for(let prop in me){
  if(me.hasOwnProperty(prop))
  console.log(prop+': '+me[prop])
}

Person.prototype.age=0
Person.prototype.increaseage=function(){
  this.age++
}

me=new Person('zhen','wang')

console.log(me.__proto__)
console.log(Person.prototype)

for(let prop in me){
  if(me.hasOwnProperty(prop))
  console.log(prop+': '+me[prop])
}

console.log(me)

//=======================COUNT ITEMS=======================
function countItems(arr,item){
  let count=0
  for(let i=0;i<arr.length;i++){
    if(arr[i] instanceof Array){
      count+=countItems(arr[i],item)
    }
    if(arr[i]===item){
      count++
    }
  }
  return count
}

let fruits=['apple',['apple','melon','grape'],['apple'],'apple',['banana','banana'],['melon','melon','apple','apple'],'melon']

console.log(countItems(fruits,'melon'))

//=======================REFORMAT NUMBERS=======================
let extended = n=>n.toString()
                    .split('')
                    .reverse()
                    .map((n,i)=>n*Math.pow(10,i))
                    .filter(n=>n!==0)
                    .reverse()
                    .join(' + ')

console.log(extended(10570602))

//=======================ONLY SHOW LAST 4 DIGIT=======================
let maskify=(s,d)=>s.toString()
                    .slice(0,-d)
                    .replace(/./g,'#')
                    +
                    s.toString()
                    .slice(-d)

console.log(maskify(123341289751,4))

//=======================REMOVE PARTICULAR LAST CHAR=======================
let remove=s=>s.replace(/!$/g,'')

console.log(remove('ha!ha!!ha!!!'))

//=======================REPEAT STRING=======================
let repeatFunc=(n,s)=>s.repeat(n)

console.log(repeatFunc(10,'hahaha'))
console.log(repeatFunc(10,'hahaha').length)

//=======================PIN VALIDATION=======================
let validatePin=(pin)=>(pin.toString().length===4||pin.toString().length===6)
                        &&
                        ((/^\d+$/).test(pin))

console.log(validatePin('112345'))

let validatePinSim=(pin)=>/^(\d{4}|\d{6})$/.test(pin)
console.log(validatePin('a12345'))



//=======================FILL AN ARRAY=======================
let arr=Array.from({length:5},(v='number: ',i)=>v+i)

console.log(arr)

//=======================DON'T GIVE ME FIVE=======================
let excludeFive=function(start,end){
  let count=0;
  for(i=start;i<=end;i++){
    if(!/5/g.test(i))
    count++
  }
  return count
}

console.log(excludeFive(1,60))


let excludeFiveArrow=(start,end)=>
                      Array.from({length:end-start+1},(v,i)=>i+start)
                      .filter(n=>!/5/g.test(n))
                      .length

console.log(excludeFiveArrow(4,17))
