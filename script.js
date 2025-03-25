document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Form submit hone se rokta hai

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "password") { // Static credentials
        alert("Login Successful! Redirecting to Chatbot...");
        window.location.href = "chatbot.html"; // Redirect to chatbot instead of YouTube
    } else {
        alert("Invalid Credentials! Try Again.");
    }
});
