// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === "") {
        alert("Name is required.");
        e.preventDefault();
        return;
    }

    if (!email.match(emailPattern)) {
        alert("Enter a valid email.");
        e.preventDefault();
        return;
    }

    alert("Form submitted successfully!");
});

// Dynamic To-Do List
function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    // Remove task on click
    li.addEventListener("click", () => li.remove());

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}