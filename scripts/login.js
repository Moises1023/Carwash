function login(){
    document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
        event.preventDefault()
        const userLogin = document.getElementById("userLogin").value
        const userPassword = document.getElementById("userPassword").value
        document.getElementById("loginForm").reset()
    });
}

document.addEventListener("DOMContentLoaded", login);