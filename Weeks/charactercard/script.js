const character = {
    name: 'Snortleblat',
    class: 'Guardian',
    level: 10,
    health: 100,
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

attackButton.addEventListener('click', () => {
    character.attacked();
});

levelUpButton.addEventListener('click', () => {
    character.levelUp();
});

render();
statusMessage.textContent = `${character.name} is ready for battle!`;
