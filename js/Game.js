/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 /* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor () {
        this.missed = 0;
        this.phrases = this.createPhrases()
        this.activePhrase = null;
    }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */  
    createPhrases() {
        const phrases = [
            new Phrase('Long time no see'),
            new Phrase('Fall seven times stand up eight'),
            new Phrase('I think therefore I am'),
            new Phrase('To infinity and beyond'),
            new Phrase('Practice makes progress'),
            new Phrase('Teamwork makes the dream work'),
            new Phrase('Common sense is not so common')
        ]
        return phrases
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none'
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay()
    }

   /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
    getRandomPhrase() {
       const random = Math.floor(Math.random() * this.phrases.length)
       return this.phrases[random]
    }

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        console.log(button)
    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        this.missed++
        const tries = document.querySelectorAll('.tries img')
            if (this.missed === 1) {
                tries[0].src = 'images/lostHeart.png'
            } else if (this.missed === 2) {
                tries[1].src = 'images/lostHeart.png'
            } else if (this.missed === 3) {
                tries[2].src = 'images/lostHeart.png'
            } else if (this.missed === 4) {
                tries[3].src = 'images/lostHeart.png'
            } else if (this.missed === 5) {
                tries[4].src = 'images/lostHeart.png'
                this.gameOver()
            }
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        const hidden = document.getElementsByClassName('hide')
        console.log(hidden)
        if (hidden.length === 0) {
            return true
        } else {
            return false
        }
        // return [...document.querySelectorAll('#phrase ul li')].every( (val, i, arr) => val === arr[0].className.includes('show' || 'space') )
    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const overlay = document.getElementById('overlay');
        const gameOverMsg = document.getElementById('game-over-message')
        overlay.style.display = ''
        if (!gameWon) {
            overlay.style.backgroundColor = '#cb561b'
            gameOverMsg.textContent = 'You have perished. Try Again?'
        } else {
            overlay.style.backgroundColor = '#2d930f'
            gameOverMsg.textContent = 'YOU WIN! YOU GLOAT OVER THE CARCASS OF THE PHRASE HUNTER GAME'
        }
    }
}