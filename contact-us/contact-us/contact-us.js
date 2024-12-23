document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contactForm');
    contactForm.onsubmit = function(e) {
        e.preventDefault();
        // Perform form validation or submission here
        alert('شكرًا لك، تم استلام رسالتك وسيتم الرد عليك في أقرب وقت ممكن.');
        // Reset the form after submission
        contactForm.reset();
    };
});
