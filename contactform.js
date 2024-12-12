document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS
    emailjs.init('GePeLqBUf2_7XBYqG'); // Replace with your EmailJS User ID

    const form = document.getElementById('contact-form');
    const responseDiv = document.getElementById('form-response');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries()); // Convert FormData to a simple object

        emailjs.send('service_f8gkn3c', 'template_s2jkqwx', data)
            .then(() => {
                responseDiv.style.display = 'block';
                responseDiv.textContent = 'Your message has been sent successfully!';
                responseDiv.style.color = 'green';
                form.reset(); // Clear the form
            })
            .catch((error) => {
                responseDiv.style.display = 'block';
                responseDiv.textContent = 'An error occurred. Please try again later.';
                responseDiv.style.color = 'red';
                console.error('EmailJS Error:', error);
            });
    });
});
