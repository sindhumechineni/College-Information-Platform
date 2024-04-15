// Form validation and redirection
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("student-registration-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const studentName = document.getElementById("student-name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (confirmPassword !== password) {
            alert("Passwords do not match!");
            return;
        }

        // Redirect the user to the colleges information page after successful registration
        alert("Registration successful! Redirecting to colleges information page...");
        window.location.href = "CollegeInformation.html";
    });
});
