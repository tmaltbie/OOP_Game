/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 /* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor () {
        this.missed = 0
        this.phrases = [
            {'phrase': 'long time no see'},
            {'phrase': 'fall seven times, stand up eight'},
            {'phrase': 'i think therefore i am'},
            {'phrase': 'to infinity and beyond'},
            {'phrase': 'practice makes progress'},
            {'phrase': 'teamwork makes the dream work'},
            {'phrase': 'common sense is not so common'},

        ]
        this.activePhrase = null;
    }

    startGame() {}

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

    checkForWin() {}

    gameOver() {}
}