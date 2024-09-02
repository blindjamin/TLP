function saludar(){
    //alert("TERREMOTO")
var miH1 = document.getElementById("miH1")
var nombre =  document.getElementById("txtNombre").value
miH1.className = "saludo"
miH1.innerHTML = "Holis " + nombre
}
function despedir(){
    var miH1 = document.getElementById("miH1")
    var nombre = document.getElementById("txtNombre").value
    miH1.className = "despedida"
    miH1.innerHTML = "Adeus " + nombre
}