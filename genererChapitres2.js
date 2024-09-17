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
    const basePath = `https://angelorosello.fr/doc-eleves/chapitre${chapitreNumero}/`;

    // Objets pour les noms de fichiers et les noms des liens
    const files = [
        { file: 'cours.pdf', label: 'Cours' },
        { file: 'exercices.pdf', label: 'Exercices' },
        { file: 'corrige.pdf', label: 'Corrigé' }
    ];

    let atLeastOneFileExists = false;
    const li = document.createElement('li');
    li.textContent = `Chapitre ${chapitreNumero} : `;

    files.forEach(({ file, label }) => {
        const filePath = basePath + file;
        checkFileExists(filePath, (exists) => {
            if (exists) {
                if (!atLeastOneFileExists) {
                    atLeastOneFileExists = true;
                }
                const a = document.createElement('a');
                a.href = filePath;  // Lien vers le fichier
                a.textContent = label;  // Nom du lien (Cours, Exercices, Corrigé)
                a.target = "_blank";  // Ouvre dans un nouvel onglet
                li.appendChild(a);
                li.appendChild(document.createTextNode(' | '));
            }
            if (label === 'Corrigé') {  // Après la vérification du dernier fichier
                if (atLeastOneFileExists) {
                    ul.appendChild(li);  // Ajouter le <li> à la liste si au moins un fichier existe
                }
            }
        });
    });
}

// Appeler la fonction pour chaque chapitre
document.addEventListener("DOMContentLoaded", function() {
    for (let i = 1; i <= 30; i++) {  // Nombre de chapitres
        genererLiensChapitre(i);
    }
});
