document.addEventListener("DOMContentLoaded", () => {
    const sortCriteria = document.getElementById("sort-criteria");
    const searchInput = document.getElementById("car-search");
    const searchButton = document.getElementById("search-button");

    const searchCars = () => {
        const searchValue = searchInput.value.toLowerCase();
        const carItems = document.querySelectorAll(".gallery__item");
        const selectedSort = sortCriteria.value;

        // Filter cars based on search
        carItems.forEach((item) => {
            const carName = item.querySelector("h3").innerText.toLowerCase();
            if (carName.includes(searchValue)) {
                item.style.display = "block"; // Show item if it matches
            } else {
                item.style.display = "none"; // Hide item if it doesn't match
            }
        });

        // Only sort visible items
        const visibleItems = Array.from(carItems).filter(
            (item) => item.style.display === "block"
        );

        if (selectedSort === "price-high-to-low") {
            visibleItems.sort((a, b) => {
                const priceA = parseFloat(
                    a.querySelector("p").innerText.replace(/[^\d.]/g, "")
                );
                const priceB = parseFloat(
                    b.querySelector("p").innerText.replace(/[^\d.]/g, "")
                );
                return priceB - priceA; // High to low
            });
        } else if (selectedSort === "price-low-to-high") {
            visibleItems.sort((a, b) => {
                const priceA = parseFloat(
                    a.querySelector("p").innerText.replace(/[^\d.]/g, "")
                );
                const priceB = parseFloat(
                    b.querySelector("p").innerText.replace(/[^\d.]/g, "")
                );
                return priceA - priceB; // Low to high
            });
        } else if (selectedSort === "newest-first") {
            const getYear = (text) => parseInt(text.match(/\d{4}/)[0], 10);
            visibleItems.sort((a, b) => {
                const yearA = getYear(a.querySelector("h3").innerText);
                const yearB = getYear(b.querySelector("h3").innerText);
                return yearB - yearA; // Newest to oldest
            });
        }

        // Reorder the gallery with sorted items
        const gallery = document.querySelector(".gallery");
        visibleItems.forEach((item) => gallery.appendChild(item));
    };

    // Bind event handlers
    searchInput.addEventListener("input", searchCars); // Trigger search on text input
    sortCriteria.addEventListener("change", searchCars); // Trigger sorting on dropdown change
    searchButton.addEventListener("click", searchCars); // Trigger search on button click
});