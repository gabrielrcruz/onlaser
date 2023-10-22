// script.js

document.querySelector('.neon-button').addEventListener('click', function(e) {
    e.preventDefault(); // Impede que o link padrão seja seguido
    window.open(this.href, '_blank'); // Abre o link em uma nova aba
});