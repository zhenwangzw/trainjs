let usr=document.getElementById('usr')
let psw=document.getElementById('psw')
let btn=document.getElementById('btn')

btn.onclick=btnClick

function btnClick(){
  usr.style.backgroundColor='red'
  psw.style.backgroundColor='green'
  alert(usr.value+' '+psw.value)
}

$('#login').click(function(){
  let firstname=$('#firstname').val()
  let lastname=$('#lastname').val()
  let lang=$('#lang').val()
  
  let user=G$(firstname,lastname)
  $('#logindiv').hide()
  user.setLang(lang).htmlGreet('#greetingmsg',true).log()
})