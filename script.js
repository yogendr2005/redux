function validate() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;


    var errorMessage = document.getElementById("error-message");

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var fnameRegex = /^[a-zA-Z]+$/;
    var lnameRegex = /^[a-zA-Z]+$/;

    var gender = document.querySelector('input[name="gender"]:checked');
    var hobby = document.querySelectorAll('input[name="hobby"]:checked');

    if (firstName === "" || lastName === "" || email === "" || password === "" || gender === "" || hobby === "") {
        errorMessage.textContent = "all fields required!";
    } else if (!fnameRegex.test(firstName)) {
        errorMessage.textContent = "Invalid first name. ";
    } else if (!lnameRegex.test(lastName)) {
        errorMessage.textContent = "Invalid last name. ";
    } else if (!emailRegex.test(email)) {
        errorMessage.textContent = "Invalid email address!";
    } else if (!passwordRegex.test(password)) {
        errorMessage.textContent = "password must be 8 characters";
    } else {
        errorMessage.textContent = "";
        alert("registration done!");
        localStorage.setItem("registeredUsername", email);
        localStorage.setItem("registeredPassword", password);

        window.location.href = "login.html";
    }
}

function validateLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var errorMessage = document.getElementById("error-message");

    var emailregexe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordregexe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (email === "" || password === "") {
        errorMessage.textContent = "Username and password are required!";
    } else if (!emailregexe.test(email)) {
        errorMessage.textContent = "Invalid username";
    } else if (!passwordregexe.test(password)) {
        errorMessage.textContent = "password must be 8 characters";
    } else {
        errorMessage.textContent = "";

        var registeredUsername = localStorage.getItem("registeredUsername");
        var registeredPassword = localStorage.getItem("registeredPassword");

        if (email === registeredUsername && password === registeredPassword) {

            alert("Login successful!");
        } else {
            errorMessage.textContent = "Invalid username or password!";
        }
    }
}

