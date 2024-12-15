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

            // Add fade-in animation for modal text
            modalTitle.style.animation = 'fadeIn 0.5s ease-out';
            modalBody.style.animation = 'fadeIn 0.8s ease-out forwards';
            modalBody.style.animationDelay = '0.5s'; // Optional delay for effect

            // Set modal content correctly
            modalTitle.textContent = `${dayNumber}. dienas dāvana`; // Title update
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
        1: 'Ziedi vislabākajai draudzenei',
        2: 'Ko Tu vēlies vakariņās?',
        3: 'Buču pievedums',
        4: 'Avenes saldējums',
        5: 'Vakarā skatamies ko Tu vēlies',
        6: 'Digitālais kupons: Nomazgā traukus',
        7: 'Masāža',
        8: 'Serenāde 🍬',
        9: 'Ceļoju uz vietām, kur sviedri tek un muskuļi aug, bet dzīvoju vienviet kaut aizrāda draugs',
        10: 'Našķis princesītei',
        11: 'Našķis princesītes princesītei',
        12: 'Buču pievedums',
        13: 'Piparkūkas',
        14: '🍒💦',
        15: 'kupons: 👅',
        16: 'Nešmaucies 🤭',
        17: 'Nešmaucies 🤭',
        18: 'Nešmaucies 🤭',
        19: 'Melanholiskais valsis',
        20: 'Striptīzs',
        21: 'Nešmaucies 🤭',
        22: 'Nešmaucies 🤭',
        23: 'Nešmaucies 🤭',
        24: 'Nešmaucies 🤭'
    };
    return gifts[day] || 'Kaut kas nogāja greizi :/ Dāvanā buča';
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

    // Determine the number of snowflakes based on screen size
    let snowflakeCount;
    if (window.innerWidth < 468) {
        snowflakeCount = 15; // Fewer snowflakes for small screens
    } else if (window.innerWidth < 768) {
        snowflakeCount = 30; // Moderate number for medium screens
    } else {
        snowflakeCount = 50; // Full snowflake count for larger screens
    }

    for (let i = 0; i < snowflakeCount; i++) {
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

document.addEventListener('DOMContentLoaded', () => {
    // Highlight current day and mark future/past days
    document.querySelectorAll('.day').forEach(day => {
        const dayNumber = parseInt(day.getAttribute('data-day'));

        if (dayNumber > currentDay) {
            day.classList.add('future-day');
        } else if (dayNumber === currentDay) {
            day.classList.add('current-day');
        } else {
            day.classList.add('opened-day');
        }
    });

    // Scroll to the current day's box on smaller screens
    if (window.innerWidth < 768) {
        const currentDayBox = document.querySelector('.current-day');
        if (currentDayBox) {
            currentDayBox.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling
                block: 'center', // Center the day box vertically
                inline: 'center' // Center the day box horizontally
            });
        }
    }

    // Create snowflakes
    createSnowflakes();
});

