// Form validation
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("college-registration-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const collegeName = document.getElementById("college-name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Submit the form data to the server if all validations pass
        // Replace the alert with actual form submission logic
        
        window.location.href = "CollegeInformation.html";
    });
});
