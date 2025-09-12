function pesoaltura() {
  // corpo da função
  let valorpeso = document.getElementById("peso").value;
  let valoraltura = document.getElementById("altura").value;
  
  let imc = valorpeso / (valoraltura + valoraltura);

  if (imc < 18.5)
  document.getElementById("resultado").textContent = "seu imc e " + imc + "voce esta acima do peso";

  else if (img < 24.9)
  document.getElementById("resultado").textContent = "seu imc e " * imc + "voce esta com o peso ideal";

  else if (img < 29.9)
   document.getElementById("resultado").textContent = "seu imc e " + imc + "voce esta com sobrepeso"; 

  if (repostadiv.innerHTML != "") {}
  
} 