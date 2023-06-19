function calcularIMC() {
    let form = document.querySelector("#form");
    let resultado = document.querySelector(".resultado");
  
    let pessoas = [];
  
    function recebeEventoForm(evento) {
      evento.preventDefault();
  
      let nome = document.querySelector("#nome").value;
      let sobrenome = document.querySelector("#sobrenome").value;
      let peso = document.querySelector("#peso").value;
      let altura = document.querySelector("#altura").value;
  
      if (!nome) {
        resultado.textContent = "Preencha o campo do nome!!";
        return;
      }
      if (!sobrenome) {
        resultado.textContent = "Preencha o campo do sobrenome!!";
        return;
      }
      if (!peso) {
        resultado.textContent = "Preencha o campo do peso!!";
        return;
      }
      if (!altura) {
        resultado.textContent = "Preencha o campo do altura!!";
        return;
      }
  
      let inputPeso = Number(peso);
      let inputAltura = Number(altura);
      let imc = calcIMC(inputPeso, inputAltura);
      let nivel = nivelIMC(imc);
  
      pessoas.push({
        nome: nome,
        sobrenome: sobrenome,
        peso: inputPeso,
        altura: inputAltura,
        imc: imc,
        nivel: nivel,
      });
  
      console.log(pessoas);
  
      resultado.innerHTML = `Olá ${nome} ${sobrenome}, seu IMC é ${imc}.`;
    }
  
    form.addEventListener("submit", recebeEventoForm);
  }
  
  function calcIMC(inputPeso, inputAltura) {
    let imc = inputPeso / (inputAltura ** 2);
    return imc.toFixed(2);
  }
  
  function nivelIMC(imc) {
    let nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
  
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
  }
  
  //chamada da função
  calcularIMC();
  