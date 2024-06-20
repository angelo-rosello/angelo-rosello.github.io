// checkVisibility.js
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('[data-visible]');

    elements.forEach(element => {
        const isVisible = element.getAttribute('data-visible');
        if (isVisible === "false") {
            element.style.display = 'none'; // Masquer l'�l�ment si data-visible est "false"
        }
    });
});
