document.addEventListener('DOMContentLoaded', function() {
    // Function to update the price and show/hide phone number input
    function updatePrice() {
        var insuranceValue = document.getElementById('insurance-options').value;
        var phoneGroup = document.getElementById('phone-group');
        if (insuranceValue === 'custom') {
            phoneGroup.style.display = 'block';
        } else {
            phoneGroup.style.display = 'none';
        }
    }

    // Function to handle form submission
    var insuranceForm = document.getElementById('insuranceForm');
    if (insuranceForm) {
        insuranceForm.onsubmit = function() {
            var insuranceValue = document.getElementById('insurance-options').value;
            if (insuranceValue === 'custom' && !document.getElementById('phone').value) {
                alert('شكرا جدا لاختيارك هذا الخيار يرجى وضع رقم للتواصل مع حضرتك');
                return false;
            } else {
                alert('شكرا لك على اختيار التأمين من خلالنا سوف يتواصل معك الدعم الفنى ف اقرب وقت ممكن');
                window.location.href = '/'; // Redirect to home page
                return false;
            }
        };
    }

    // Call updatePrice when the insurance options change
    var insuranceOptions = document.getElementById('insurance-options');
    if (insuranceOptions) {
        insuranceOptions.addEventListener('change', updatePrice);
    }
});
