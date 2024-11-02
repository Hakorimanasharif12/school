const video = document.getElementById('myVideo');
const playButton = document.getElementById('playPauseBtn');

playButton.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        playButton.innerHTML = '❚❚';
    } else {
        video.pause();
        playButton.innerHTML = '&#9658;'; 
    }
});

video.addEventListener('play', function() {
    playButton.innerHTML = '❚❚'; 
    
});

video.addEventListener('pause', function() {
    playButton.innerHTML = '&#9658;';
});


// Select all the card elements
const cards = document.querySelectorAll('.card');

// Loop through each card
cards.forEach((card, index) => {
    // Check if the index is odd or even (note: index is zero-based)
    if (index % 2 === 0) {
        // Even index (1st, 3rd, 5th...)
        card.classList.add('topup');
    } else {
        // Odd index (2nd, 4th, 6th...)
        card.classList.add('topdown');
    }
});



