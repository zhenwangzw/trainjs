let usr=document.getElementById('usr')
let psw=document.getElementById('psw')
let btn=document.getElementById('btn')

btn.onclick=btnClick

function btnClick(){
  usr.style.backgroundColor='red'
  psw.style.backgroundColor='green'
  alert(usr.value+' '+psw.value)
}