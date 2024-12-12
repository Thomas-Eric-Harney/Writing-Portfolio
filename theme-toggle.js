// Select the toggle button
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById('theme-toggle');
    if (!toggleButton) {
        console.error('Theme toggle button not found!');
        return;
    }

    // Load the saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'night-mode') {
        document.body.classList.add('night-mode');
        toggleButton.textContent = 'Day';
    }

    // Toggle theme and save preference
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('night-mode');
        if (document.body.classList.contains('night-mode')) {
            localStorage.setItem('theme', 'night-mode');
            toggleButton.textContent = 'Day';
        } else {
            localStorage.setItem('theme', 'day-mode');
            toggleButton.textContent = 'Night';
        }
    });
});
