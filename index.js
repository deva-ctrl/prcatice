document.querySelector('.click').addEventListener('click', function () {
    const button = document.querySelector('.click');
    if (button.textContent === 'Click') {
        button.textContent = 'Clicked!';
    } else {
        button.textContent = 'Click';
    }
});