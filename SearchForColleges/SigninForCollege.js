document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("college-signin-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const collegeName = document.getElementById("college-name").value;
        const password = document.getElementById("password").value;

        // Check if the college name matches any of the stored names
        const validColleges = ["Banaras Hindu University", "DBU University", "Theresa Foundations", "Millineum University", "Saint JohnSon University", "Milestone Leranings", "Indian Institute of Science", "Indian Institutes of Technology", "University of Delhi", "Anna University", "University of Calcutta", "University of Hyderabad"];
        const isValidCollege = validColleges.includes(collegeName);

        if (!isValidCollege) {
            alert("Invalid college name!");
            return;
        }

        // Check if the password is correct
        if (password !== "nan2") {
            alert("Incorrect password!");
            return;
        }

        // College sign-in successful, redirect to college information page
        window.location.href = "CollegeInformation.html";
    });
});
