// gameboard object
// const gameboard = (function() {
//     // store the gameboard as an array
//     const gameboard = ['', '', '', '', '', '', '', '', ''];
//     // const gameboard = ['X', 'O', 'X', 'X', 'O', 'X', 'X', 'O', 'X'];

//     function initializeGameboard() {
//         const cells = [];
        
//         for(let i = 0; i < gameboard.length; i++) {
//             const cell = document.getElementById(`cell-${i}`);
//             cell.textContent = gameboard[i];
//             cells.push(cell);
//         };

//         cells.forEach((cell) => {
//             cell.addEventListener('click', () => {
//                 cell.textContent = 'X';
//             });
//         });
//     };
    
//     return {
//         initializeGameboard,
//     };

// })();

// gameboard.initializeGameboard();

// const player = (name, symbol) => {
//     return { name, symbol };
// };

// let player1 = player('player 1', 'X');
// let player2 = player('player 2', 'O');
// const players = [player1, player2];

// const game = {
//     function playerTurn() {
//         const turn = 0;
//         currentPlayer = players[turn];
//         turn++;
//     };
    
//     return {
//         playerTurn,
//     }
// };

///////////////////////////////////////////////////////////////////////////////////////////

// gameboard object
const gameboardObject =  (function () {
	// store the gameboard as an array
	let gameboardArray = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
	// variable to grab individual spaces
	let gameboardSpace = document.getElementById('`cell-${i}`');

	// render the contents of the gameboard array on the webpage
	function renderGameboard() {
		// create an array to hold gameboard spaces and assign it to variable 'gameboard'
        let spaces = [];

		// create a loop that will loop over gameboard array
			// for each array item
				// grab gameboard space id's from the DOM
				// set gameboard space text.Content to value of it's corresponding cell from gameboardArray
				// append the newly created divs to spaces array
        for (let i = 0; i < gameboardArray.length; i++) {
            // let space = document.getElementById(`cell-${i}`);
            // space.textContent = gameboardArray[i];
            // spaces.push(space);
            
            let gameboard = document.getElementById('gameboard');
            let spaces = document.createElement('div');
            spaces.id = 'boardspace';
            spaces.className = 'boardSpaces';
            spaces.textContent = gameboardArray[i];
            gameboard.appendChild(spaces);
        };

	};
    
	// build functions that allow players to add marks to a specific spot on the board
	function selectSpace() {
		// add a click event listener to gameboardSpace
	};

	function markSpace(player) {
		// selectSpace();
		// set the space's innerHTML = to the current player's symbol
	};

	function checkSpaceValidation() {
		// create an if...else statement to check if the selected space's innerHTML is === to a player's symbol
			// if the space has no mark call markSpace()
			// else return — do not mark the space
	};

    return { renderGameboard }
})();

// object to store player objects
const playersObject = {
	player1: {
		// player 1 name:
		// player 1 symbol:
	},

	player2: {
		// player 2 name:
		// player 2 symbol:
	}
};

// object to control the flow of the game
const gameController = (function () {
	
})();

gameboardObject.renderGameboard();