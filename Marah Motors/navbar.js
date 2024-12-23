// JavaScript to toggle dropdown visibility
function toggleDropdown(dropdownId) {
    // Get all dropdowns
    var dropdowns = document.querySelectorAll('.dropdown');
    // Loop through each dropdown to close them
    dropdowns.forEach(dropdown => {
        // If it's not the current dropdown, close it
        if (dropdown.id !== dropdownId) {
            dropdown.style.display = "none";
        }
    });
    // Toggle the visibility of the current dropdown
    var currentDropdown = document.getElementById(dropdownId);
    if (currentDropdown.style.display === "none" || currentDropdown.style.display === "") {
        currentDropdown.style.display = "block"; // Show the dropdown
    } else {
        currentDropdown.style.display = "none"; // Hide the dropdown
    }
}

