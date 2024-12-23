// Function to extract URL parameters for car parts
function getPartParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        part: params.get("part"), // Name of the car part
        price: params.get("price"), // Price of the car part
        img: params.get("img") // Image path of the car part
    };
}

// Function to handle the purchase action for car parts and show the thank you message
function purchasePart() {
    alert("شكراً جزيلاً لشرائك قطعة الغيار من ماراح موتور. نتمنى أن تلبي احتياجاتك بكفاءة.");
}

// Event listener for DOM content load
document.addEventListener("DOMContentLoaded", function () {
    const partInfo = getPartParams(); // Extract URL parameters
    const partInfoDiv = document.getElementById("part-info");

    // Display car part information based on extracted parameters
    partInfoDiv.innerHTML = `
        <img src="${partInfo.img}" alt="${partInfo.part}" style="max-width: 100%; border-radius: 10px;"> <!-- Car part image -->
        <h2>${partInfo.part}</h2> <!-- Car part name -->
        <p>السعر: ${partInfo.price} دولار</p> <!-- Car part price -->
    `;

    // Set up the purchase button for car parts
    const purchaseButton = document.getElementById("purchase-part-button");
    purchaseButton.addEventListener("click", purchasePart); // Trigger thank you message for car parts
});
