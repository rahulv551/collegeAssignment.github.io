const loginForm = document.getElementById("login-form");
const message = document.getElementById("message");
const username = document.getElementById("username");
const password = document.getElementById("password");

// Define a list of valid users
const validUsers = [
    { username: "Alice", password: "1234" },
    { username: "Bob", password: "5678" },
    { username: "Charlie", password: "abcd" },
    { username: "David", password: "efgh" },
    { username: "Emily", password: "ijkl" }
];

// Listen for the form submission event
loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Check if the entered username and password match a valid user
    const user = validUsers.find(user => user.username === username.value && user.password === password.value);
    if (user) {

            // Store the username in Local Storage
            localStorage.setItem("username", user.username);
        

        // Display the welcome message with the user's name
        message.innerHTML = `Welcome, ${user.username}!`;
        message.style.color = "green";
        window.location.href = 'index.html';

        // Show the name of the logged-in user on every page
        document.querySelectorAll(".username").forEach(element => element.innerHTML = user.username);

        // Hide the login form
        loginForm.style.display = "none";
    } else {
        // Display an error message if the user is invalid
        message.innerHTML = "Invalid username or password.";
        message.style.color = "red";
    }
});
