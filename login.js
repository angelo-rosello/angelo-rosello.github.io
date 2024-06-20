function checkPassword() {
    const password = document.getElementById('password').value;
    const hash = CryptoJS.SHA256(password).toString();
    const correctHash = '1e9cc37678c0112d7a394909256c2a5998a6e57e2b0d82209900e1456e51b7eb'; // Mdp hashé
    const guardImage = document.querySelector('.guard-image'); 

    if (hash === correctHash) {
        localStorage.setItem('auth', 'true');
        window.location.href = 'espace-eleves.html';
    } else {
        // Ajout de l'animation de tremblement
        guardImage.classList.remove('animate-zoomIn'); // Suppression de la classe animate-zoomIn
        guardImage.classList.remove('shake'); // Assurez-vous que la classe est supprimée d'abord
        void guardImage.offsetWidth; // Forcer le reflow en lisant une propriété

        guardImage.classList.add('shake');

        // Enlever la classe shake après l'animation pour pouvoir la réutiliser
        setTimeout(() => {
            guardImage.classList.remove('shake');
        }, 500);

        // Optionnel : Effacer le champ de mot de passe
        document.getElementById('password').value = '';
    }
}
