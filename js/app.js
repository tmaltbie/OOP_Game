/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game

document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game
    game.startGame()
})

document.getElementById('qwerty').addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target)
    }
})

document.addEventListener('keydown', e => {
    const overlay = document.getElementById('overlay');
    const keys = document.querySelectorAll('.key')
    if (overlay.style.display === 'none') {
        for (let i = 0; i < keys.length; i++) {
            if (e.key === keys[i].textContent && keys[i].disabled != true) {
                game.handleInteraction(keys[i])
            }
        }
    }
})
