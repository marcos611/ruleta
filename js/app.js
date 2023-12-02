var finalRotationAngle = 0;

var nombres = ["Nombre1", "Nombre2", "Nombre3", "Nombre4", "Nombre5", "Nombre6", "Nombre7", "Nombre8"];
document.getElementById('spin').addEventListener('click', function () {
    //setDivs()
    // Obtén la referencia al contenedor de la ruleta
    var container = document.querySelector('.container');

    // Habilita la transición antes de aplicar la animación
    container.style.transition = 'transform 0.01s'; // Tiempo de transición muy corto

    // Aplica una rotación inicial para restablecer la transformación
    container.style.transform = 'rotate(0deg)';

    // Calcula la duración total en segundos
    var totalSeconds = 5;

    // Asegúrate de que la transición se aplique
    setTimeout(() => {
        // Genera un número aleatorio de rotaciones por segundo entre 30 y 50
        var rotationsPerSecond = Math.floor(Math.random() * (500 - 30 + 1)) + 30;

        
        var totalRotations = rotationsPerSecond * totalSeconds;

        // Calcula el ángulo de rotación por cada rotación
        var rotationAngle = 360 / rotationsPerSecond;

        // Genera un ángulo aleatorio para hacer la ruleta más impredecible
        var randomAngle = Math.floor(Math.random() * 360);

        finalRotationAngle = totalRotations * rotationAngle + randomAngle;

        // Aplica la animación de rotación a la ruleta
        container.style.transition = 'transform ' + totalSeconds + 's cubic-bezier(0.4, 2.8, 0.3, 1)';
        container.style.transform = 'rotate(' + finalRotationAngle + 'deg)';
    }, 10); // Espera 10 milisegundos para asegurarte de que la transición anterior se aplique correctamente

    // Deshabilita el botón durante la animación
    this.disabled = true;

    // Restaura el estilo después de que termine la animación
    setTimeout(function () {
        container.style.transition = 'none';
        container.style.transform = 'rotate(' + finalRotationAngle + 'deg)'; // Asegura que el ángulo final esté establecido
        document.getElementById('spin').disabled = false;
        detectarDivSuperior();
    }, totalSeconds * 1000);
});
  
function setDivs(){
    // Obtén el contenedor de la ruleta
    var wheelContainer = document.getElementById('wheelContainer');

    // Genera dinámicamente los divs basados en el arreglo de nombres
    for (var i = 0; i < nombres.length; i++) {
        var div = document.createElement('div');
        div.textContent = nombres[i];
        div.className = 'nameDiv'; // Agrega una clase para referencia futura si es necesario
        wheelContainer.appendChild(div);
    }
}
  
  
function detectarDivSuperior(finalAngle) {
    // Obtén el contenedor de la ruleta y el número de divisiones
    var container = document.querySelector('.container');
    var numDivisiones = 8;
  
    // Calcula el ángulo actual de rotación
    var estiloTransform = window.getComputedStyle(container).getPropertyValue('transform');
    var matrizTransform = new DOMMatrix(estiloTransform);
    var anguloRotacion = Math.round(Math.atan2(matrizTransform.b, matrizTransform.a) * (180 / Math.PI));
  
    // Calcula el ángulo final de rotación después de la animación
    var anguloFinal = (anguloRotacion % 360 + 360) % 360;
  
    // Calcula el ángulo en el que queremos detectar el div superior
    var anguloDeseado = (anguloFinal + 90) % 360;
  
    // Calcula el índice del div superior
    var anguloPorDivision = 360 / numDivisiones;
    var indiceDivSuperior = Math.floor(anguloDeseado / anguloPorDivision);
  
    // Obtén la clase del div superior
    var clasesDivs = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
    var claseDivSuperior = clasesDivs[indiceDivSuperior];
  
    // Imprime la clase en la consola
    console.log('Div superior:', claseDivSuperior);
  }
  
  