// Fonction pour vérifier si un fichier existe
function checkFileExists(url, callback) {
    fetch(url, { method: 'HEAD' })
        .then(response => {
            callback(response.ok);  // Si la réponse est 200 (OK), le fichier existe
        })
        .catch(() => callback(false));
}

// Fonction pour générer les liens des chapitres
function genererLiensChapitre(chapitreNumero) {
    const ul = document.querySelector('.chapitres ul');
    const li = document.createElement('li');
    li.textContent = `Chapitre ${chapitreNumero} : `;

    const basePath = `https://angelo-rosello.github.io/doc-eleves/chapitre${chapitreNumero}/`;

    // Objets pour les noms de fichiers et les noms des liens
    const files = [
        { file: 'cours.pdf', label: 'Cours' },
        { file: 'exercices.pdf', label: 'Exercices' },
        { file: 'corrige.pdf', label: 'Corrigé' }
    ];

    files.forEach(({ file, label }) => {
        const filePath = basePath + file;
        checkFileExists(filePath, (exists) => {
            if (exists) {
                const a = document.createElement('a');
                a.href = filePath;  // Lien vers le fichier
                a.textContent = label;  // Nom du lien (Cours, Exercices, Corrigé)
                a.target = "_blank";  // Ouvre dans un nouvel onglet
                li.appendChild(a);
                li.appendChild(document.createTextNode(' | '));
            }
        });
    });

    ul.appendChild(li);
}

// Appeler la fonction pour chaque chapitre
document.addEventListener("DOMContentLoaded", function() {
    for (let i = 1; i <= 30; i++) {  // Nombre de chapitres
        genererLiensChapitre(i);
    }
});
