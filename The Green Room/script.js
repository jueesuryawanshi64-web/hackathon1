const registerForm = document.getElementById("registerForm");
if (registerForm) {
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const password = document.getElementById("password").value;
        const confirmPassword =
            document.getElementById("confirm-password").value;

        if (password !== confirmPassword) {
            alert("Password does not match");
            return;
        }
        const user = {
            name: name,
            email: email,
            phone: phone,
            password: password
        };
        let users = localStorage.setItem("leafyUser",   JSON.stringify(user));
        alert("Registration successful!");
        window.location.href = "login.html";
    });
}
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password =document.getElementById("password").value;
        const savedUser = localStorage.getItem("leafyUser");
        if (!savedUser) {
            alert("Please register first.");
            return;
        }
        const user = JSON.parse(savedUser);
        if (email === user.email && password === user.password){
            alert("Login successful!");
            localStorage.setItem("isLoggedIn","true");
            window.location.href = "index.html";
        } else {
            alert("Invalid email or password!");
        }
    });
}