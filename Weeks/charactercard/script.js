const storageKey = 'snortleblat-character';
const savedState = JSON.parse(localStorage.getItem(storageKey) ?? 'null');

if (savedState !== null && (
    !Number.isInteger(savedState.level) ||
    savedState.level < 10 ||
    !Number.isInteger(savedState.health) ||
    savedState.health < 0 ||
    savedState.health > 100 ||
    typeof savedState.status !== 'string'
)) {
    throw new Error('Saved character data is invalid.');
}

const character = {
    name: 'Snortleblat',
    class: 'Guardian',
    level: savedState?.level ?? 10,
    health: savedState?.health ?? 100,
    image: 'snortleblat.webp',
    attacked() {
        this.health -= 20;

        if (this.health <= 0) {
            this.health = 0;
            alert(`${this.name} has died.`);
            statusMessage.textContent = `${this.name} has died.`;
        } else {
            statusMessage.textContent = `${this.name} took damage! Health: ${this.health}`;
        }

        render();
    },
    levelUp() {
        this.level += 1;
        statusMessage.textContent = `${this.name} leveled up to level ${this.level}!`;
        render();
    }
};

const statusMessage = document.querySelector('#status');
const cardImage = document.querySelector('.image');
const cardName = document.querySelector('.name');
const statList = document.querySelector('.stats');
const attackButton = document.querySelector('#attack');
const levelUpButton = document.querySelector('#level-up');

function saveCharacterAndReload() {
    localStorage.setItem(storageKey, JSON.stringify({
        level: character.level,
        health: character.health,
        status: statusMessage.textContent
    }));
    window.location.reload();
}

function render() {
    cardImage.src = character.image;
    cardImage.alt = `${character.name} character portrait`;
    cardName.textContent = character.name;

    statList.innerHTML = `
        <p>Class: ${character['class']}</p>
        <p>Level: ${character.level}</p>
        <p>Health: ${character.health}</p>
    `;

    attackButton.disabled = character.health <= 0;
    levelUpButton.disabled = character.health <= 0;
}

statusMessage.textContent = savedState?.status ?? `${character.name} is ready for battle!`;
render();

attackButton.addEventListener('click', () => {
    character.attacked();
    saveCharacterAndReload();
});

levelUpButton.addEventListener('click', () => {
    character.levelUp();
    saveCharacterAndReload();
});
