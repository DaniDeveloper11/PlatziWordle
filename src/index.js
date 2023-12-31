import { fromEvent } from "rxjs";

const letterRows = document.getElementsByClassName('letter-row')
const onKeyDown$ = fromEvent(document, "keydown");
let letterIndex = 0;
let letterRowIndex = 0;

const insertLetter = {
    next: (event) => {
        const pressedKey = event.key.toUpperCase();
        if(pressedKey.length === 1 && pressedKey.match(/[a-z]/i)){
            let letterBox = Array.from(letterRows)[letterRowIndex].children[letterIndex];
            letterBox.textContent = pressedKey;
            letterBox.classList.add("filled-letter");
            // console.log(event.key);
        }
    }
}

onKeyDown$.subscribe(insertLetter);