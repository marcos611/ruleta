var finalRotationAngle = 0;
document.getElementById('spin').addEventListener('click', function () {
    // Obtén la referencia al contenedor de la ruleta
    var container = document.querySelector('.container');
  
    // Genera un número aleatorio de rotaciones por segundo entre 30 y 50
    var rotationsPerSecond = Math.floor(Math.random() * (500 - 30 + 1)) + 30;
  
    // Calcula la duración total en segundos
    var totalSeconds = 3;
    var totalRotations = rotationsPerSecond * totalSeconds;
  
    // Calcula el ángulo de rotación por cada rotación
    var rotationAngle = 360 / rotationsPerSecond;
  
    // Genera un ángulo aleatorio para hacer la ruleta más impredecible
    var randomAngle = Math.floor(Math.random() * 360);

    finalRotationAngle = totalRotations * rotationAngle + randomAngle;
  
    // Aplica la animación de rotación a la ruleta
    container.style.transition = 'transform ' + totalSeconds + 's cubic-bezier(0.4, 2.8, 0.3, 1)';
    container.style.transform = 'rotate(' + finalRotationAngle + 'deg)';
    //container.style.transition = 'transform ' + totalSeconds + 's cubic-bezier(0.4, 2.8, 0.3, 1)';
    //container.style.transform = 'rotate(' + (totalRotations * rotationAngle + randomAngle) + 'deg)';
  
    // Deshabilita el botón durante la animación
    this.disabled = true;
  
    // Restaura el estilo después de que termine la animación
    setTimeout(function () {
      container.style.transition = 'none';
      document.getElementById('spin').disabled = false;
      detectarDivSuperior();
    }, totalSeconds * 1000);
  });
  
  
  function detectarDivSuperior() {
    // Obtén el contenedor de la ruleta
    var container = document.querySelector('.container');
  
    // Obtén el ángulo actual de rotación
    var estiloTransform = window.getComputedStyle(container).getPropertyValue('transform');
    var matrizTransform = new DOMMatrix(estiloTransform);
    var anguloRotacion = Math.round(Math.atan2(matrizTransform.b, matrizTransform.a) * (180 / Math.PI));
  
    // Calcula el índice del div superior
    var numDivisiones = 8; // Número de divisiones en la ruleta
    var anguloPorDivision = 360 / numDivisiones;
    var indiceDivSuperior = Math.floor((anguloRotacion % 360 + 360) % 360 / anguloPorDivision);
  
    // Obtén la clase del div superior
    var clasesDivs = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
    var claseDivSuperior = clasesDivs[indiceDivSuperior];
  
    // Imprime la clase en la consola
    console.log('Div superior:', claseDivSuperior);
  }
  
  // Llama a la función detectarDivSuperior después de que termine la animación
  //setTimeout(detectarDivSuperior, totalSeconds * 1000);
  