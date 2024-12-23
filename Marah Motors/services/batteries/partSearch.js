document.addEventListener("DOMContentLoaded", function () {
    const sortCriteria = document.getElementById("sort-criteria");
    const searchInput = document.getElementById("car-search");

    // Function to filter and sort cars based on selected criteria
    function searchCars() {
        const searchValue = searchInput.value.toLowerCase(); // Get search input
        const carItems = document.querySelectorAll(".gallery-item");
        const selectedSort = sortCriteria.value; // Get the selected sorting criteria

        // Filter items by search input
        carItems.forEach(item => {
            const carName = item.querySelector("h3").innerText.toLowerCase();
            if (carName.includes(searchValue)) {
                item.style.display = "block"; // Show item if it matches
            } else {
                item.style.display = "none"; // Hide if it doesn't match
            }
        });

        // Sort cars based on selected sorting criteria
        const visibleItems = Array.from(carItems).filter(item => item.style.display === "block");
        if (selectedSort === "price-high-to-low") {
            visibleItems.sort((a, b) => {
                const priceA = parseFloat(a.querySelector("p").innerText.replace(/[^\d.]/g, ""));
                const priceB = parseFloat(b.querySelector("p").innerText.replace(/[^\d.]/g, ""));
                return priceB - priceA; // High to low
            });
        } else if (selectedSort === "price-low-to-high") {
            visibleItems.sort((a, b) => {
                const priceA = parseFloat(a.querySelector("p").innerText.replace(/[^\d.]/g, ""));
                const priceB = parseFloat(b.querySelector("p").innerText.replace(/[^\d.]/g, ""));
                return priceA - priceB; // Low to high
            });
        } else if (selectedSort === "newest-first") {
            visibleItems.sort((a, b) => {
                const yearA = parseInt(a.querySelector("h3").innerText.match(/\d{4}/)[0]);
                const yearB = parseint(b.querySelector("h3").innerText.match(/\d{4}/)[0]);
                return yearB - yearA; // Newest to oldest
            });
        }

        // Reorder the gallery with sorted items
        const gallery = document.querySelector(".gallery");
        visibleItems.forEach(item => gallery.appendChild(item));
    }

    // Add event listener to the sorting dropdown
    sortCriteria.addEventListener("change", searchCars); // Trigger sorting on change
    searchInput.addEventListener("input", searchCars); // Trigger search on text input
});