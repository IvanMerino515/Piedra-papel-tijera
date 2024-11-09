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
const pcScoreElement = document.getElementById('pc-score');
const playerPickElement = document.getElementById('player-pick');
const pcPickElement = document.getElementById('pc-pick');
const resultMessageElement = document.getElementById('result-message');
const playAgainButton = document.getElementById('play-again');
const gameContainer = document.querySelector('.buttons-game-container');

// SELECCIONAMOS OPCIONES
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const rockButton = document.getElementById('rock');

// Datos del Programa

let playerScore = 0;
let pcScore=0;
let playerChoice ='';
let pcChoice = '';


// funcion para generar la jugada del jugador

 const handlePlayerChoice = (choice) =>{
    playerChoice = choice;
    playerPickElement.textContent = `You Picked: ${choice.charAt(0).toUpperCase() + choice.slice(1)}`

   console.log(`jugador eligió: ${choice}`);

     generateComputerChoice();
}




// Funcion para generar una jugada para el pc

const generateComputerChoice = () => {
    const choices= ['paper','scissors','rock'];
    const randomIndex = Math.floor(Math.random() * choices.length);

    pcChoice = choices[randomIndex];
    pcPickElement.textContent = `Pc Picked: ${pcChoice.charAt(0).toUpperCase() + pcChoice.slice(1)}`;

    console.log(`computadora eligió: ${pcChoice}`);

    compareChoices();
}




// Función para comparar las elecciones y determinar el resultado
const compareChoices = () => {
    if (playerChoice === pcChoice) {
        resultMessageElement.textContent = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && pcChoice === 'scissors') ||
        (playerChoice === 'scissors' && pcChoice === 'paper') ||
        (playerChoice === 'paper' && pcChoice === 'rock')
    ) {
        resultMessageElement.textContent = "You win!";
        playerScore++;
        playerScoreElement.textContent = playerScore;
    } else {
        resultMessageElement.textContent = "PC wins!";
        pcScore++;
        pcScoreElement.textContent = pcScore;
    }

    // MOSTRAR EL BOTÓN PLAY AGAIN

    playAgainButton.classList.remove('hidden');
};

    // escucha para el botón de play again.

    playAgainButton.addEventListener('click', ()=> {
        paperButton.classList.remove('hidden');
        scissorsButton.classList.remove('hidden');
        rockButton.classList.remove('hidden');

        playAgainButton.classList.add('hidden');

        // borrar contenido al jugar
        playerPickElement.textContent = "your Picked";
        pcPickElement.textContent = "PC Picked";
        resultMessageElement.textContent =""; 
        playerScoreElement.textContent = "0";
        pcScoreElement.textContent ="0";


    });




// Detectar el clic de los botones
paperButton.addEventListener ('click', () => handlePlayerChoice('paper'));
scissorsButton.addEventListener('click', () => handlePlayerChoice('scissors'));
rockButton.addEventListener('click', () => handlePlayerChoice('rock'));





// modal

const buttonElement = document.getElementById('modal-button');
const modalElement = document.getElementById('modal');

const showModal = () => {
    modalElement.classList.add('modal-show')

}

const hideModal = () => {
    modalElement.classList.remove('modal-show')

}


buttonElement.addEventListener('click', showModal);
modalElement.addEventListener('click', hideModal);