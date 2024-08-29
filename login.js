function checkPassword() {
    const password = document.getElementById('password').value;
    const hash = CryptoJS.SHA256(password).toString();
    const correctHash = '804009875b8f147428508e89ac1fbcda6d9be01b56a5818e31b288b77706e61a'; // Mdp hashé
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
