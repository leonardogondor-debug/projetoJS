function pesoaltura() {
  // corpo da função
  let valorpeso = document.getElementById("peso").value;
  let valoraltura = document.getElementById("altura").value;
  
  let imc = valorpeso / (valoraltura * valoraltura);
  let imcFormatado = imc.toFixed(2);
  
  document.getElementById("resultado").textContent = "seu imc é " + imcFormatado;
   

  if (imc < 18.5)
    document.getElementById("resultado2").textContent = "você está abaixo do peso";
  else if (imc < 24.9)
    document.getElementById("resultado2").textContent = "você está com o peso ideal";
  else if (imc < 29.9)
    document.getElementById("resultado2").textContent = "você está com sobrepeso";
}