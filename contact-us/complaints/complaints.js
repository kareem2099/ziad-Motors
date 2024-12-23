document.addEventListener('DOMContentLoaded', function() {
    var complaintForm = document.getElementById('complaintForm');
    complaintForm.onsubmit = function(e) {
        e.preventDefault();
        // Perform form validation or submission here
        alert('شكرًا لك، تم استلام شكواك وسيتم مراجعتها بعناية.');
        // Reset the form after submission
        complaintForm.reset();
    };
});
