// --- form.js ---

// Handles the submission of the contact form
function handleFormSubmit() {
    const form = document.querySelector('form[name="contact"]');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(form);
        
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString()
        }).then(() => {
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        }).catch((error) => {
            alert('Sorry, there was an error sending your message. Please try again later.');
            console.error(error);
        });
    });
}

// Initialize form handling when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    handleFormSubmit();
});
