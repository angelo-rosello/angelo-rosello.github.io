// setPaths.js
document.addEventListener("DOMContentLoaded", function() {
    const listItems = document.querySelectorAll('li[data-folder]');

    listItems.forEach(item => {
        const basePath = `doc-eleves/${item.getAttribute('data-folder')}/`;
        const links = item.querySelectorAll('.file-link');
        
        links.forEach(link => {
            link.href = basePath + link.getAttribute('href');
        });
    });
});
