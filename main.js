// Get the current date
const currentDate = new Date();
const currentDay = currentDate.getDate();

// Highlight the current day box and mark future days with PNG overlay
document.querySelectorAll('.day').forEach(day => {
    const dayNumber = parseInt(day.getAttribute('data-day'));

    if (dayNumber > currentDay) {
        // Add 'future-day' class to future days
        day.classList.add('future-day');
    } else if (dayNumber === currentDay) {
        // Highlight the current day
        day.classList.add('current-day');
    } else {
        // Style for opened or past days
        day.classList.add('opened-day');
    }

    // Add event listeners to each day box
    day.addEventListener('click', function () {
        if (dayNumber === currentDay || dayNumber < currentDay) {
            const gift = getGiftForDay(dayNumber);

            // Show the modal
            const modal = document.getElementById('modal');
            const modalTitle = document.getElementById('modal-title');
            const modalBody = document.getElementById('modal-body');
            modal.style.display = 'block';

            // Set modal content correctly
            modalTitle.textContent = `Day ${dayNumber} Gift`; // Title update
            modalBody.textContent = gift; // Gift description update
        } else if (dayNumber > currentDay) {
            // Add shake effect if future day is clicked
            this.classList.add('shake');
            setTimeout(() => {
                this.classList.remove('shake');
            }, 500);
        }
    });
});

// Function to get the gift for a specific day
function getGiftForDay(day) {
    const gifts = {
        1: 'Chocolate!',
        2: 'Candy Cane!',
        3: 'Masāža',
        4: 'Holiday Sticker!',
        5: 'Christmas Cookie!',
        6: 'Holiday Ornament!',
        7: 'Festive Candle!',
        8: 'Winter Scarf!',
        9: 'Handmade Card!',
        10: 'Mittens!',
        11: 'Gingerbread House!',
        12: 'Christmas Movie!',
        13: 'Hot Cocoa Mix!',
        14: 'Cozy Blanket!',
        15: 'Jingle Bell!',
        16: 'Snowman Kit!',
        17: 'Christmas Puzzle!',
        18: 'Reindeer Antlers!',
        19: 'Gift Card!',
        20: 'Holiday Mug!',
        21: 'Festive Socks!',
        22: 'Baking Set!',
        23: 'Christmas Storybook!',
        24: 'Christmas Surprise!'
    };
    return gifts[day] || 'No gift for today!';
}

// Close the modal when the "x" is clicked
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// Close the modal if the user clicks anywhere outside the modal content
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});


// Snowflake creation function
function createSnowflakes() {
    const body = document.body;

    for (let i = 0; i < 50; i++) { // Create 50 snowflakes
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = '❄'; // Snowflake character

        // Random position and animation settings
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() * 5 + 5 + 's'; // 5-10 seconds
        snowflake.style.animationDelay = Math.random() * 5 + 's'; // Random delay

        body.appendChild(snowflake);

        // Remove the snowflake after animation ends
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
        });
    }
}

// Call the createSnowflakes function as needed
document.addEventListener('DOMContentLoaded', () => {
    createSnowflakes();
});
