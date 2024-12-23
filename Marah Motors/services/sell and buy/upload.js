// Function to handle image upload and show an alert
function handleImageUpload(event) {
    event.preventDefault(); // Prevent default form submission
    
    const fileInput = document.getElementById("car-image");
    if (fileInput.files.length === 0) {
        return; // No file selected
    }

    // Display the alert in the middle of the screen
    alert("شكراً لك على تحميل السيارة التي تريد بيعها. سوف نحاول مع مختصين في البيع ب تفصيل سيارتك واختيار سعر مناسب لها.");

    // Navigate to the home screen after the alert is dismissed
    window.location.href = "/"; // Adjust to your home screen path
}

// Event listener for form submission
document.addEventListener("DOMContentLoaded", () => {
    const uploadForm = document.getElementById("upload-form");
    uploadForm.addEventListener("submit", handleImageUpload); // Handle form submission
});