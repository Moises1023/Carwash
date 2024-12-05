// main.js

// Función para cerrar sesión
document.getElementById('logout').addEventListener('click', function () {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
});
