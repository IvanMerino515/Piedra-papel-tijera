// // INSTRUCCIONES

// - Localizar los elementos implicados del DOM
// - Crear los datos del programa necesarios

// FLUJO DEL PROGRAMA
 
//   - Detectar dónde hacemos click (Si tenéis problemas al hacer click
// porque detectáis cosas que no os interesan, podéis usar la propiedad
// "pointer-events:none" en CSS para facilitaros la vida)
//     - Guardar nuestra jugada
//     - Generar una jugada aleatoria para el ordenador y guardarla
//     - Comparar jugadas
//     - Mostrar resultado
//     - Asignar puntos


// LOCALIZAR ELEMENTOS

const playerScoreElement = document.getElementById('player-score');
const psScoreElement = document.getElementById('pc-score');
const playerPickElement = document.getElementById('player-pick');
const pcPickElement = document.getElementById('pc-pick');
const resultMessageElement = document.getElementById('result-message');
const playagainButton = document.getElementById('play-again');

// SELECCIONAMOS OPCIONES
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissors');
const rockButton = document.getElementById('rock');

// Datos del Programa

let playerScore = 0;
let pcScore=0;
let playerChoice ='';
let pcChoice = '';
