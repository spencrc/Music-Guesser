let clueArray: Array<HTMLElement> = [];

function setupClues() {
    const labels: Array<string> = ["0.5 seconds", "1 second", "Start of Song"];

    const guessFrame: HTMLElement = document.createElement("div");
    guessFrame.setAttribute("class", "guess-frame");
    guessFrame.innerHTML = `
        <div class="guess-features">
            <button class="play">PLAY</button>
            <div class="guess-box">
                <input id="current-guess" placeholder="GUESS A SONG" autocomplete="off">
                <button class="submit">SKIP</button>
            </div>
        </div>
        <div class="clue-type"></div>
    `
    
    for (let i = 0; i < 3; i++) {
        const clone: HTMLElement = guessFrame.cloneNode(true) as HTMLElement;

        const clue: HTMLElement = clone.querySelector(".clue-type") as HTMLElement
        clue.textContent = labels[i];

        clueArray[i] = clone;
        document.body.append(clueArray[i]);
    }
}

window.addEventListener('DOMContentLoaded', () => setupClues());