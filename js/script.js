document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded');
});


// Function to generate a random color in HEXADECIMAL format
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.addEventListener('DOMContentLoaded', function() {
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');

    changeColorBtn.addEventListener('click', function() {
        // Use the getRandomColor function to get a random color
        const randomColor = getRandomColor();
        // Set the random color as the background color of the color box
        colorBox.style.backgroundColor = randomColor;
    });
});
