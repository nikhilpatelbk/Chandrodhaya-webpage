const images = [
    'url("chandrodhaya.jpg")',
    'url("i1.jpg")',
    'url("i2.jpg")'
];

let currentIndex = 0;

function changeBackground() {
    const header = document.querySelector('.header-bg');
    header.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length; // Loop through the images
}

// Change background every 5 seconds (5000 milliseconds)
setInterval(changeBackground, 5000);

document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const show = document.getElementById('show').value;
    const quantity = document.getElementById('quantity').value;

    if (!name || !email || !show || !quantity) {
        alert('Please fill in all fields.');
        return;
    }

    document.getElementById('bookingMessage').textContent = `Thank you, ${name}! Your booking for ${show} has been confirmed.`;
});
