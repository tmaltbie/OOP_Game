/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 /* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
    constructor(phrase) {
        this.phrase = phrase
    }
   /**
   * Display phrase on game board
   */
    addPhraseToDisplay() {
       const phraseSection = document.querySelector('#phrase ul');
       const randomPhrase = game.getRandomPhrase().phrase
       console.log(this.phrase)
    //    for (let i = 0; i < randomPhrase; i++) {
    //        const li = document.createElement('li')
    //        if (randomPhrase[i] !== ' ') {
    //            li.className = `hide letter ${randomPhrase[i]}`
    //            li.textContent = randomPhrase[i]
    //        }
    //        if (randomPhrase[i] === ' ') {
    //            li.className = `space`
    //            li.textContent = ' '
    //        }
    //        phraseSection.appendChild(li) 
    //    }
    }

    checkLetter() {}

    showMatchedLetter() {}
}