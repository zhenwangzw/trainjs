// tiny library mimic jQuery

;(function(global,$){

  //*** define local copy of jGreetr
  let jGreetr=function(firstname,lastname,lang){
    return new jGreetr.init(firstname,lastname,lang)
  }

  //*** variable available for library internal use
  let supportedLangs=['en','cn']

  let greetings={
    en:'hello',
    cn:'你好'
  }

  let formalGreetings={
    en:'greetings',
    cn:'您好'
  }

  let logMessage={
    en:'logged in',
    cn:'已登录'
  }
  //***//

  //*** method for jGreetr
  jGreetr.prototype={
    getFullName:function(){
      return this.firstname+' '+this.lastname
    },

    validate:function(){
      if(supportedLangs.indexOf(this.lang)===-1){
        throw 'Invalid language'
      }
    },

    greeting:function(){
      return greetings[this.lang]+' '+this.firstname+'!'
    },

    formalGreeting:function(){
      return formalGreetings[this.lang]+' '+this.getFullName()+'!'
    }, 

    greet:function(formal){
      let msg=''
      if(formal){
        msg=this.formalGreeting()
      }
      else{
        msg=this.greeting()
      }
      if(console){
        console.log(msg)
      }
      return this
    },

    log:function(){
      if(console){
        console.log(logMessage[this.lang]+': '+this.getFullName())
      }
      return this
    },

    setLang:function(lang){
      this.lang=lang
      this.validate()
      return this
    },

    htmlGreet:function(selector,formal){
      if(!$){
        throw 'jQuery not loaded'
      }
      if(!selector){
        throw 'missing jQuery selector'
      }
      let msg=''
      if(formal){
        msg=this.formalGreeting()
      }
      else{
        msg=this.greeting()
      }

      //use jQuery obj take selector to select the element and set msg to html
      $(selector).html(msg)

      return this
    }

  }

  //*** property of jGreetr 
  let init=jGreetr.init=function(firstname,lastname,lang){
    let self=this
    self.firstname=firstname||'default firstname'
    self.lastname=lastname||'default lastname'
    self.lang=lang||'en'
    
    self.validate()
  }

  // Give the init function the jGreetr prototype for later instantiation
  init.prototype=jGreetr.prototype

  // make jGreetr global accessible
  global.jGreetr=global.G$=jGreetr

})(window,jQuery)