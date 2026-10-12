const form = document.getElementById("registrationForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const studentName = document.getElementById("studentName").value;
    const registerNumber = document.getElementById("registerNumber").value;
    const department = document.getElementById("department").value;

    const selectedSubjects = document.querySelectorAll(
        '.subjects input[type="checkbox"]:checked'
    );

    if (selectedSubjects.length === 0) {
        result.innerHTML = "⚠️ Please select at least one subject.";
        return;
    }

    let subjects = "";

    selectedSubjects.forEach(function (subject) {
        subjects += "<li>" + subject.value + "</li>";
    });

    result.innerHTML = `
        <h3>✅ Registration Successful!</h3>
        <p><strong>Student Name:</strong> ${studentName}</p>
        <p><strong>Register Number:</strong> ${registerNumber}</p>
        <p><strong>Department:</strong> ${department}</p>

        <p><strong>Selected Subjects:</strong></p>
        <ul>
            ${subjects}
        </ul>
    `;

    result.style.background = "#dcfce7";
    result.style.color = "#166534";
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const regno = document.getElementById("regno").value;
    const password = document.getElementById("password").value;

    if (regno === "12345" && password === "1234") {
        document.getElementById("message").style.color = "green";
        document.getElementById("message").textContent = "Login Successful!";
    } else {
        document.getElementById("message").textContent = "Invalid Register Number or Password";
    }
});