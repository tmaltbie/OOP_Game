/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 /* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
    constructor(phrase) {
        this.phrase = phrase.toLowerCase()
    }

   /**
   * Display phrase on game board
   */
    addPhraseToDisplay() {
        const phraseSection = document.querySelector('#phrase ul');
        const currentPhrase = this.phrase
        const chars = currentPhrase.split('')
        // const phraseChars = []
        const regex = /\S/
        
        // for (let i = 0; i < currentPhrase.length; i++) {
        //     phraseChars.push(chars[i])
        // }

        chars.forEach((letters) => {
            const li = document.createElement('li')
            if (regex.test(letters)) {
                li.className = `hide letter ${letters}`
                li.innerText = letters
            } else {
                li.className = 'space'
                li.innerText = ' '
            }
            phraseSection.appendChild(li)
        })
    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        return this.phrase.includes(letter)
    }

    showMatchedLetter() {}
}