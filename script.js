
    
// Set the date we're counting down to
var countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();

// Update the countdown every 1 second
var countdownfunction = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the flip cards with new values
    updateFlipCard('days', days);
    updateFlipCard('hours', hours);
    updateFlipCard('minutes', minutes);
    updateFlipCard('seconds', seconds);

    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);

function updateFlipCard(id, value) {
    var flipCard = document.getElementById(id).querySelector('.flip-card-inner');
    var front = flipCard.querySelector('.flip-card-front');
    var back = flipCard.querySelector('.flip-card-back');

    if (front.innerHTML != value) {
        flipCard.classList.add('flip');
        setTimeout(function() {
            front.innerHTML = value;
            back.innerHTML = value;
            flipCard.classList.remove('flip');
        }, 300);
    }
}


