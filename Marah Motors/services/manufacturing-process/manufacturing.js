// Function to handle image upload and update the progress bar
function handleImageUpload(event) {
    event.preventDefault(); // Prevent default form submission
    
    const fileInput = document.getElementById("car-image");
    if (fileInput.files.length === 0) {
        return; // No file selected
    }

    // Display thank-you message
    alert("شكراً لتحميل السيارة التي تريد إصلاحها. سوف يتم إرسال مندوب إلى مكانك لأخذ السيارة.");

    // Get today's date
    const today = new Date();
    const formattedDate = today.toLocaleDateString("ar-EG"); // Format the date in Arabic

    // Update the first point with today's date
    const point1 = document.getElementById("point-1");
    point1.innerText = `اليوم الذي تم مراجعة السيارة: ${formattedDate}`;
    point1.classList.add("active"); // Make the first point active

    // Set up the other points with a delay to simulate progress
    setTimeout(() => {
        const point2 = document.getElementById("point-2");
        point2.classList.add("active");
    }, 2000); // Simulate a delay before the second point

    setTimeout(() => {
        const point3 = document.getElementById("point-3");
        point3.classList.add("active");
    }, 4000); // Simulate another delay for the third point

    setTimeout(() => {
        const point4 = document.getElementById("point-4");
        point4.classList.add("active");
    }, 6000); // Final delay for the fourth point
}

// Event listener for form submission
document.addEventListener("DOMContentLoaded", () => {
    const uploadForm = document.getElementById("upload-form");
    uploadForm.addEventListener("submit", handleImageUpload); // Handle form submission
});