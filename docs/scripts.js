const segments = document.querySelectorAll('.segment');
const spinButton = document.getElementById('spinButton');
const resultModal = document.getElementById('resultModal');
const jackpotModal = document.getElementById('jackpotModal');
const resultText = document.getElementById('resultText');
const closeButtons = document.querySelectorAll('.close');

closeButtons.forEach(button => {
    button.onclick = () => {
        resultModal.style.display = 'none';
        jackpotModal.style.display = 'none';
    }
});

spinButton.addEventListener('click', () => {
    let currentSegment = 0;
    const totalSegments = segments.length;
    const rounds = 3; // Number of full rounds
    const targetSegment = Math.floor(Math.random() * totalSegments);
    const totalSteps = rounds * totalSegments + targetSegment;
    let step = 0;

    const interval = setInterval(() => {
        segments.forEach((segment, index) => {
            segment.style.backgroundColor = (index === currentSegment) ? 'orange' : 'lightblue';
        });

        if (step >= totalSteps) {
            clearInterval(interval);
            const prize = segments[currentSegment].textContent;
            if (prize === '奖池') {
                jackpotModal.style.display = 'flex';
            } else {
                resultText.textContent = `恭喜你，抽中了${prize}!`;
                resultModal.style.display = 'flex';
            }
        } else {
            currentSegment = (currentSegment + 1) % totalSegments;
            step++;
        }
    }, 100);
});

window.onclick = (event) => {
    if (event.target === resultModal) {
        resultModal.style.display = 'none';
    }
    if (event.target === jackpotModal) {
        jackpotModal.style.display = 'none';
    }
};
