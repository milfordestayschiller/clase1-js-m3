// Arreglo palabras random
const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
];
var time = 10;
var score = 0;
// Función palabras random
function randomWords(params) {
    var palabraIngresada = document.getElementById("input");
    var palabrasAleatoria = words[Math.floor(Math.random() * words.length)];
    console.log(words)
    //Donde se asigna la palabra aleatoria
    var titulo = document.querySelector(".proyecto");
    titulo.textContent = palabrasAleatoria;
    input.addEventListener("keypress", function (e) {
        if (e.key == "Enter" && palabraIngresada.value === palabrasAleatoria) {
            time += 4;
            input.value = "";
            randomWords();
            updateScore();
           

        }
    })

    return palabrasAleatoria;
}

randomWords();

// Actualizacion del Score
function updateScore(params) {
    var scorepuntos = document.getElementById("score");
    scorepuntos.innerHTML = score++;
    return scorepuntos;
}

updateScore();



//Contador de tiempo de 10 a 0

let timeInterval = setInterval(function actualizarTiempo(){
    var resultado = document.querySelector("#timeSpan");
    resultado.innerHTML = time;
    gameOver()
    main()
    
    if(0 === time) {
        clearInterval(timeInterval);
    }
    time--;
}, 1000);


//Cambio a ventana final, Fin del Juego con opcion de reactivación
function gameOver(params) {
    var sinTiempo = document.querySelector(".sintiempo");
    if (time === 0) {
        sinTiempo.textContent = "Te has quedado sin tiempo";
        sinTiempo.classList.add("sintiempo");
        var puntajefinal = document.querySelector(".puntajefinal");
        puntajefinal.textContent = `Score Final es: ${score - 1}`;

    }
    return sinTiempo;
}
gameOver()
// Main principal para cambio de ventana principal a final, se retiran componentes para su reaparicion en etapa final
function main(params) {
    var main = document.querySelector(".main");
    var container = document.querySelector(".container");
    var tiempo = document.querySelector(".tiempo");
    var scores = document.querySelector(".scorevalor");
    var proyecto = document.querySelector(".proyecto");
    if (time === 0) {
        container.classList.remove("container");
        proyecto.classList.add("proyectos");
        main.classList.add("mains");
        tiempo.classList.add("tiempos");
        scores.classList.add("scorevalores");
       
    }
    return container;
}

main();
