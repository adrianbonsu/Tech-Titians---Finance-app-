
/* MONEY MENTOR LOGIN MVP */

let signupMode = false;


/* PAGE NAVIGATION */

function showPage(pageId) {

    const pages = [
        "welcomePage",
        "loginPage",
        "successPage"
    ];

    pages.forEach(function(page) {

        document.getElementById(page).classList.add("hidden");

    });

    document.getElementById(pageId).classList.remove("hidden");

    window.scrollTo(0, 0);

}


/* SWITCH LOGIN AND SIGNUP */

function switchMode(event) {

    event.preventDefault();

    signupMode = !signupMode;

    document.getElementById("loginForm").reset();

    document.getElementById("errorMessage").textContent = "";

    document.getElementById("password").type = "password";

    const nameGroup = document.getElementById("nameGroup");

    const fullName = document.getElementById("fullName");

    if (signupMode) {

        nameGroup.classList.remove("hidden");

        fullName.required = true;

        document.getElementById("formTitle").textContent =
            "Create Account";

        document.getElementById("formDescription").textContent =
            "Join Money Mentor and start managing your finances.";

        document.getElementById("loginButton").textContent =
            "Sign Up";

        document.getElementById("switchText").textContent =
            "Already have an account?";

        document.getElementById("switchLink").textContent =
            "Login";

        document.getElementById("password").autocomplete =
            "new-password";

    } else {

        nameGroup.classList.add("hidden");

        fullName.required = false;

        document.getElementById("formTitle").textContent =
            "Student Login";

        document.getElementById("formDescription").textContent =
            "Login to continue your financial journey.";

        document.getElementById("loginButton").textContent =
            "Login";

        document.getElementById("switchText").textContent =
            "Don't have an account?";

        document.getElementById("switchLink").textContent =
            "Sign Up";

        document.getElementById("password").autocomplete =
            "current-password";

    }

}


/* SHOW OR HIDE PASSWORD */

function togglePassword() {

    const password = document.getElementById("password");

    const checkbox = document.getElementById("showPassword");

    password.type = checkbox.checked ? "text" : "password";

}


/* DEMO LOGIN VALIDATION */

function handleLogin(event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value;

    const fullName = document.getElementById("fullName").value.trim();

    const error = document.getElementById("errorMessage");

    error.textContent = "";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        error.textContent = "Please enter a valid email address.";

        return;

    }

    if (password.length < 6) {

        error.textContent =
            "Password must contain at least 6 characters.";

        return;

    }

    if (signupMode && fullName.length === 0) {

        error.textContent = "Please enter your full name.";

        return;

    }

    /*
       FRONTEND DEMONSTRATION ONLY

       No passwords are stored.
       No real accounts are created.
       No backend authentication takes place.
    */

    const studentName = signupMode
        ? fullName
        : email.split("@")[0];

    document.getElementById("studentName").textContent =
        studentName;

    document.getElementById("password").value = "";

    showPage("successPage");

}


/* LOGOUT */

function logout() {

    document.getElementById("loginForm").reset();

    document.getElementById("errorMessage").textContent = "";

    if (signupMode) {

        signupMode = false;

        // Reset the form to login mode.
        document.getElementById("nameGroup").classList.add("hidden");
        document.getElementById("fullName").required = false;

        document.getElementById("formTitle").textContent =
            "Student Login";

        document.getElementById("formDescription").textContent =
            "Login to continue your financial journey.";

        document.getElementById("loginButton").textContent = "Login";

        document.getElementById("switchText").textContent =
            "Don't have an account?";

        document.getElementById("switchLink").textContent = "Sign Up";

        document.getElementById("password").autocomplete =
            "current-password";

    }

    document.getElementById("password").type = "password";

    showPage("loginPage");

}
