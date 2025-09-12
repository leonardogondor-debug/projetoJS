function pesoaltura() {
  // corpo da função
  let valorpeso = document.getElementById("peso").value;
  let valoraltura = document.getElementById("altura").value;
  
  let imc = valorpeso / (valoraltura + valoraltura);
  
  document.getElementById("resultado").textContent = "seu imc e " + imc;
} 