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

function buildFuncs2(){
  var arr=[]
  for(var i=0;i<3;i++){
  ;(function(j){
    arr.push(function(){
      console.log('this is:',j)
    })})(i)
  }
  return arr
}
  
var bf2=buildFuncs2()
bf2[0]()
bf2[1]()
bf2[2]()

function buildFuncs3(){
  var arr=[]
  for(var i=0;i<3;i++){
    let j=i
    arr.push(function(){
      console.log('this is:',j)
    })
  }
  return arr
}

var bf3=buildFuncs3()
bf3[0]()
bf3[1]()
bf3[2]()

//=======================FUNCTION CURRYING USE .BIND=======================

function multiply(a,b){
  return a*b
}

let multiplyByTwo=multiply.bind(this,2)
console.log('4 multiply by 2 is: '+multiplyByTwo(4))

function someFunc(a,b,c){
  return 'do something about '+a+' '+b+' '+c
}

let someFuncCurrying=someFunc.bind(this,'haha').bind(this,'yeye').bind(this,'lolo')
console.log(someFuncCurrying())

//=======================FUNCTION CONSTRUCTORS vs OBJECT.CREATE=======================
let Person=function(firstname,lastname){
  this.firstname=firstname||'firstname'
  this.lastname=lastname||'lastname'
  this.getfullname=function(){
    return 'fullname'
  }
}

let me=new Person()
console.log('me by new Function constructor:',me)
console.log(me.__proto__)

let person={
  firstname:'firstname',
  lastname:'lastname',
  getfullname:function(){
    return 'fullname'
  }
}

me=Object.create(person)
console.log('me by Object.create:',me)
console.log(me.__proto__)

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
console.log('=======================MIMIK JQUERY OBJECT FUNCTION CONSTRUCTORS=======================')
// no need to 'new', and have access to all properties of the prototype

// define local copy of person variable
let thePerson = function(firstname,lastname){
  return new thePerson.fn.init(firstname,lastname)
}

// set .fn property reference to thePerson.prototype property
thePerson.fn = thePerson.prototype = {
  address:'china',
  postcode:'10010',
  getShippingCost:function(){
    return this.address==='china'?0:100
  }
}

// initialise thePerson
// init is actually (function constructor), invoked by 'new'
let init=thePerson.fn.init=function(firstname,lastname){
  this.firstname=firstname||'firstname'
  this.lastname=lastname||'lastname'
  this.getfullname=function(){
    return this.firstname+' . '+this.lastname
  }

  // return{
  //   firstname:firstname||'firstname',
  //   lastname:lastname||'lastname',
  //   getfullname:function(){
  //     return this.firstname+' . '+this.lastname
  //   }
  // }
}

// give the init function the thePerson prototype for later initialization
// since we have referenced: thePerson.fn=thePerson.prototype={...} then any object created by new init/thePerson.fn.init have access to all the properties of thePerson.prototype
init.prototype=thePerson.fn


console.log('thePerson.fn is: '+thePerson.fn)//[object Object]
console.log('thePerson.init is: '+thePerson.init)//undefined
console.log('thePerson.fn.init is: '+thePerson.fn.init)//init function
console.log('thePerson.prototype is: '+thePerson.prototype)

console.log('=====the implementation=====')

let michael = thePerson('michael','wang')
console.log(michael)
console.log(michael.getfullname())
console.log('michael\'s prototype:',michael.__proto__) //init is actually the function that invoked by 'new' keyword, so init{} would be michael's prototype
for(var prop in michael){
  if(michael.hasOwnProperty(prop)){
    console.log(prop+': '+michael[prop])
  }
}


let vivi=thePerson('vivi','gong')
console.log(vivi)
console.log(vivi.getfullname())
console.log('vivi\'s prototype:',vivi.__proto__)
for(var prop in vivi){
  console.log(prop+': '+vivi[prop])
}

console.log('.fn address:'+vivi.__proto__.address)
console.log('.fn postcode:'+vivi.__proto__.postcode)
console.log('.fn shippingcost:'+vivi.__proto__.getShippingCost())
console.log('.fn firstnme / lastname:'+vivi.__proto__.firstname+' / '+vivi.__proto__.lastname)//undefined/undefined because thePerson.prototype doesn't hold the property; it is thePerson.fn.init.prototype hold this property, which cannot be access by its upper prototype chain
console.log('.fn getfullname:'+vivi.__proto__.getfullname())//getfullname will be undefined in this case, thus will give an error


/*
let theClass=function(x,y){
  return new theClass.fn.init(x,y)
}

theClass.fn=theClass.prototype={
  
}
  
let init=theClass.fn.init=function(x,y){
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

init.prototype=theClass.fn

let newObj=theClass()
console.log(newObj.xplusy1())

let newnewObj=theClass('haha','lolo')
console.log(newnewObj.xplusy2())
*/


;(function(){
  console.log('do nothing')
})()