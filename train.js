//=======================FUNCTION CLOSURE1=======================
let createIncrementer=()=>{
  let i=0
  return {
    increment:()=>++i
  }
}

let incrementor=createIncrementer()
console.log(incrementor.increment())
console.log(incrementor.increment())
console.log(incrementor.increment())

//=======================FUNCTION CLOSURE2=======================
var buildFuncs=function(){
  var arr=[]
  for(var i=0;i<3;i++){
    arr.push((function(j){
      return function(){
        console.log(j)
      }
    })(i))
  }
  return arr
}

var bf=buildFuncs()
bf[0]()
bf[1]()
bf[2]()


//=======================FUNCTION CONSTRUCTORS vs OBJECT.CREATE=======================
let Person=function(firstname,lastname){
  this.firstname=firstname||'firstname'
  this.lastname=lastname||'lastname'
  this.getfullname=function(){
    return 'fullname'
  }
}

let me=new Person()
console.log(me)
console.log(me.__proto__)

let person={
  firstname:'firstname',
  lastname:'lastname',
  getfullname:function(){
    return 'fullname'
  }
}

me=Object.create(person)
console.log(me)
console.log(me.__proto__)

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

//=======================EXTEND (lodash/underscore library)=======================
let john={
  firstname: 'john',
  lastname: 'doe'
}

let jane={
  age:34,
  address:'Thomas Mission,8290 Grant Loop,Lakinville',
  getfullname:function(){
    return this.firstname+' . '+this.lastname
  }
}

let jim={
  increaseage:function(){
    this.age++
  }
}

//=======================MIMIK JQUERY OBJECT FUNCTION CONSTRUCTORS=======================
let thePerson = function(firstname,lastname){
  return new thePerson.fn.init(firstname,lastname)
}

//define a .fn property which equals to .prototype property
thePerson.fn = thePerson.prototype = {
  init:function(firstname,lastname){
    this.firstname=firstname||'firstname'
    this.lastname=lastname||'lastname'
    this.getfullname=function(){
      return this.firstname+' . '+this.lastname
    }
  }
}

let michael = thePerson('michael','wang')
console.log(michael)
console.log(michael.getfullname())
console.log(thePerson.fn)
console.log('michael\'s prototype:',michael.__proto__) //init is actually the function that invoked by 'new' keyword, so init{} would be michael's prototype
console.log('thePerson\'s .prototype property:',thePerson.prototype) //thePerson .prototype property is the one we defined: thePerson.prototype={init:function(x,y){...}}, .prototype for every function would be start with an empty object {}.

let theClass=function(x,y){
  return new theClass.fn.init(x,y)
}

theClass.fn=theClass.prototype={
  init:function(x,y){
    return {
      x:x||'default para x',
      y:y||'default para y',
      xplusy1:function(){
        return this.x+' . '+this.y
      },
      xplusy2:function(){
        return this.x+' / '+this.y
      }
    }
  }
}
  
let newObj=theClass()
console.log(newObj.xplusy1())

let newnewObj=theClass('haha','lolo')
console.log(newnewObj.xplusy2())

