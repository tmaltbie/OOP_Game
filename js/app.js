/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game
const keyboard = document.getElementById('qwerty');
const keys = document.querySelectorAll('.key')

document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game
    game.startGame()
})

keyboard.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target)
    }
})

document.addEventListener('keydown', e => {
    for (let i = 0; i < keys.length; i++) {
        if (e.key === keys[i].textContent) {
            game.handleInteraction(keys[i])
        }
    }
})

 