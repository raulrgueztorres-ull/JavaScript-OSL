function lanzar()
{
  var numero = Math.floor(Math.random() * 6) + 1;
  var dado = document.getElementById('dado');
  dado.innerHTML = numero;  
}