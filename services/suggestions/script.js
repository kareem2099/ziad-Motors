document.getElementById('inquiryForm').onsubmit = function() {
    alert("شكرا لتقديم الاستفسارات سوف يقوم فريق المختص بفحص استفسارك بدقة وعمل ما يتم عمله.");
    window.location.href="/";
    return false; // Prevent form submission
};
