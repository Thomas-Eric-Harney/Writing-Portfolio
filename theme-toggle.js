document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById('theme-toggle');
    if (!toggleButton) {
        console.error('Theme toggle button not found!');
        return;
    }

    // Set Night Mode as the default
    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'night-mode'); // Default theme
    }

    // Load the saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'night-mode') {
        document.body.classList.add('night-mode');
        toggleButton.textContent = 'Day';
    } else {
        toggleButton.textContent = 'Night';
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

// Collapsible Updates Section
document.addEventListener("DOMContentLoaded", () => {
    const updatesHeading = document.getElementById("updates-heading");
    const updatesContainer = document.getElementById("updates-container");

    if (updatesHeading && updatesContainer) {
        updatesHeading.addEventListener("click", () => {
            updatesContainer.classList.toggle("expanded");
            updatesContainer.classList.toggle("collapsed");
        });
    } else {
        console.error("Updates heading or container not found.");
    }
});
