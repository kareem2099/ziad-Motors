// Function to display the price and date based on the selected maintenance type
function showMaintenanceInfo() {
    const maintenanceType = document.getElementById("maintenance-type").value;
    const priceElement = document.getElementById("maintenance-price");
    const dateElement = document.getElementById("maintenance-date");

    // Get today's date
    const today = new Date();
    const formattedDate = today.toLocaleDateString("ar-EG"); // Format date in Arabic

    let price = 0; // Default price

    // Determine price based on selected maintenance type
    if (maintenanceType === "periodic") {
        price = 30; // Price for periodic maintenance
    } else if (maintenanceType === "immediate") {
        price = 50; // Price for immediate maintenance
    } else if (maintenanceType === "full") {
        price = 120; // Price for full maintenance
    }

    // Display the price and date
    priceElement.innerText = `السعر: ${price} دولار`; // Display the price in Arabic
    dateElement.innerText = `التاريخ: ${formattedDate}`; // Display today's date
}

// Event listener to trigger the maintenance info when the dropdown value changes
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("maintenance-type").addEventListener("change", showMaintenanceInfo);
});

// Function to handle maintenance option selection
function handleMaintenanceSelection() {
    const maintenanceType = document.getElementById("maintenance-type").value;
    const bookButton = document.getElementById("book-maintenance-button");

    if (maintenanceType) {
        // Display the book button if a valid maintenance type is selected
        bookButton.style.display = "block"; // Show the button
    } else {
        bookButton.style.display = "none"; // Hide the button if no selection
    }

    // Trigger the price and date display (as per previous example)
    showMaintenanceInfo();
}

// Function to handle the booking action and display a success message
function bookMaintenance() {
    alert("تم حجز الصيانة الخاصة بحضرتك بنجاح. يرجى زيارة أي فرع من فروعنا أو الاتصال على الرقم +962 7 8570 8558 للاستفسار.");

    window.location.href="/";
}

// Event listener to show the book button when maintenance type changes
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("maintenance-type").addEventListener("change", handleMaintenanceSelection); // Display the button
    document.getElementById("book-maintenance-button").addEventListener("click", bookMaintenance); // Handle the booking action
});