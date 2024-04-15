document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("student-signin-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const studentId = document.getElementById("student-id").value;
        const password = document.getElementById("password").value;

        // Dummy data for registered students
        const registeredStudents = [
            { studentId: "Varnika", password: "nan2" },
            { studentId: "Varshitha", password: "nan2" },
            { studentId: "Sindhu", password: "nan2" },
            { studentId: "Indhu", password: "nan2" },
            { studentId: "Nandhu", password: "nan2" },
            // Add more dummy data here...
        ];

        // Check if entered student ID and password match any registered student
        const foundStudent = registeredStudents.find(student => student.studentId === studentId && student.password === password);

        if (!foundStudent) {
            alert("Invalid student ID or password!");
            return;
        }

         // College sign-in successful, redirect to college information page
         window.location.href = "CollegeInformation.html";
    });
});
