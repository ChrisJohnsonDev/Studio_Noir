document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        // Send the form data to the node.js server using fetch
        fetch('http://localhost:3000/submit-form', {
            method: 'POST', 
            headers: {
                'Content-Type' : 'application/json', 
            }, 
            body: JSON.stringify({
                name,
                email,
                message,
            }), 
        })
        .then(response => response.json())
        .then(data => {
            console.log('Server response:', data);
            alert('Form submitted successfully!');
        })
        .catch(error => {
            console.error('Error submitting form: ', error);
            alert('Form submission failed. Please try again later');
        })
    });
});