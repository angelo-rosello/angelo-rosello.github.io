// fadeTransition.js
document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.querySelector('main');
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            if (!link.target || link.target === '_self') {
                event.preventDefault();
                mainContent.classList.add('fade-out');

                setTimeout(() => {
                    window.location.href = link.href;
                }, 500); // La durée doit correspondre à celle de l'animation fadeOut
            }
        });
    });
});
