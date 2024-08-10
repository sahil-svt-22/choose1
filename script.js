let globalWinCount = 0;  // Global win counter for all buttons
let gameStopped = false; // Global flag to track if the game has stopped

document.querySelectorAll('.color-button').forEach(button => {
    button.addEventListener('click', () => {
        if (gameStopped) return;  // Exit if the game has stopped

        const isWin = Math.random() < 0.5;  // 50% chance of win
        
        if (isWin) {
            globalWinCount++;
            if (globalWinCount > 4) {
                document.querySelectorAll('.color-button').forEach(btn => {
                    btn.style.backgroundColor = 'red';  // Set all buttons to red after 4 wins
                    btn.classList.add('bold');
                });
                document.getElementById('game-message').textContent = 'Game Over';
                gameStopped = true;  // Mark the game as stopped
            } else {
                button.style.backgroundColor = 'green';  // Win outcome
                button.classList.add('bold');
            }
        } else {
            button.style.backgroundColor = 'red';  // Loss outcome
            button.classList.add('bold');
            document.getElementById('game-message').textContent = 'Game Over';
            gameStopped = true;  // Mark the game as stopped
        }
    });
});
