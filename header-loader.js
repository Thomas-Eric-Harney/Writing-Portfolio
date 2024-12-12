document.addEventListener('DOMContentLoaded', () => {
    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load header');
            }
            return response.text();
        })
        .then(data => {
            document.querySelector('header').innerHTML = data;

            // Set the title dynamically
            const pageTitle = document.title; // Use the page's <title> tag
            document.getElementById('page-title').textContent = pageTitle;
        })
        .catch(error => {
            console.error('Error loading header:', error);
        });
});
