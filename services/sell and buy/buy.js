// Function to extract URL parameters and determine the type of vehicle
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        type: params.get("type"), // To determine if it's a car, plane, or ship
        name: params.get("name"), // Name of the vehicle
        price: params.get("price"), // Price of the vehicle
        img: params.get("img") // Image path of the vehicle
    };
}

// Function to handle the purchase action and show the thank you message
function purchaseVehicle() {
    alert("شكراً جزيلاً لاختيارك أحد منتجاتنا القيمة والمناسبة لذوقك الرفيع. إذا كنت ترغب في شراء أي منتج آخر، نرجو الاطلاع على قائمتنا.");
    window.location.href="/";
}

// Event listener for DOM content load
document.addEventListener("DOMContentLoaded", function () {
    const vehicleInfo = getUrlParams(); // Extract URL parameters
    const vehicleInfoDiv = document.getElementById("vehicle-info");

    // Display vehicle information based on extracted parameters
    vehicleInfoDiv.innerHTML = `
        <img src="${vehicleInfo.img}" alt="${vehicleInfo.name}" style="max-width: 100%; border-radius: 10px;"> <!-- Vehicle image -->
        <h2>${vehicleInfo.name}</h2> <!-- Vehicle name -->
        <p>السعر: ${vehicleInfo.price} دولار</p> <!-- Vehicle price -->
    `;

    // Set up the purchase button
    const purchaseButton = document.getElementById("purchase-button");
    purchaseButton.addEventListener("click", purchaseVehicle); // Trigger thank you message
});