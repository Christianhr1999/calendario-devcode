// Esto es JavaScript

alert('Esto es un evento de JavaScript');

function saludo()
{
  alert('Esto me gusta muxo');
}
function saludo_2()
{
  alert('Esto me gusta muxo V.2');

}

function saludo_3()
{
  alert('Esto vale para la funcion ejecuta');
}
function saludo_4()
{
  alert('Esto vale para ejecuta 2');
}
function ejecuta() {
  
  document.getElementsByTagName("p")[0].onclick = saludo_3;
}
function ejecuta_1()
{
  document.getElementById("importante").onclick = saludo_4;
}
window.onload = saludo_2;
window.onload = ejecuta;
window.onload = ejecuta_1;
