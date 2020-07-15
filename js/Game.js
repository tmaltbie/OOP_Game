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

    handleInteraction() {}

    removeLife() {}

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        
    }

    gameOver() {}
}