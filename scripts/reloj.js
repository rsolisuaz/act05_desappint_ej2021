
var mostrando=false
var idtarea=null
if (!window.onload) {
  window.onload = function() {
    var boton=document.getElementById("muestra")
    boton.onclick=actualiza
  }
}
else {
  var anterioronload = window.onload
  window.onload = function() {
    anterioronload()
    var boton=document.getElementById("muestra")
    boton.onclick=actualiza
  }
}

function actualiza() {
   var boton=document.getElementById("muestra")
   if (mostrando) {
     boton.value="Mostrar Fecha y Hora"
     window.clearInterval(idtarea)
     var elem=document.getElementById("hora")
     elem.innerHTML=""
     mostrando=false
   }
   else {
    var tiempo=document.getElementById("segundos")
    boton.value="Ocultar Fecha y Hora"
    ponhora()
    idtarea=window.setInterval(ponhora,segundos.value*1000)
    mostrando=true;
   }
}

function ponhora() {
  var elem=document.getElementById("hora")
  var d = new Date()
  var texto=d.toLocaleTimeString()
  elem.innerHTML=texto
}