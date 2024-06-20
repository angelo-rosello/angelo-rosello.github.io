// Tableau des chapitres avec leur numero, nom, visibilite

const chapitres = [
    { numero: 1, nom: "Logique, symbole, raisonnement", visible: true },
    { numero: 2, nom: "Somme et produits", visible: true },
    { numero: 3, nom: "Applications", visible: true },
    { numero: 4, nom: "R&eacuteels, fonctions num&eacuteriques", visible: false },
    { numero: 5, nom: "Suites r&eacuteelles", visible: false },
    { numero: 6, nom: "Polyn&ocircmes", visible: false },
    { numero: 7, nom: "Limites de suites", visible: false },
    { numero: 8, nom: "D&eacutenombrement", visible: false },
    { numero: 9, nom: "Limites de fonctions", visible: false },
    { numero: 10, nom: "Continuit&eacute", visible: false },
    { numero: 11, nom: "Espaces probabilis&eacutes finis", visible: false },
    { numero: 12, nom: "Syst&egravemes lin&eacuteaires", visible: false },
    { numero: 13, nom: "D&eacuterivation", visible: false },
    { numero: 14, nom: "Matrices", visible: false },
    { numero: 15, nom: "Variables al&eacuteatoires finies", visible: false },
    { numero: 16, nom: "Int&eacutegration sur un segment", visible: false },
    { numero: 17, nom: "Espaces vectoriels", visible: false },
    { numero: 18, nom: "Equivalence et n&eacutegligeabilit&eacute", visible: false },
    { numero: 19, nom: "Applications lin&eacuteaires", visible: false },
    { numero: 20, nom: "S&eacuteries", visible: false },
    { numero: 21, nom: "Espaces probabilis&eacutes g&eacuten&eacuteraux", visible: false },
    { numero: 22, nom: "Espaces vectoriels de dimension finie", visible: false },
    { numero: 23, nom: "Variables al&eacuteatoies discr&egravetes", visible: false },
    { numero: 24, nom: "Somme de SEV", visible: false },
    { numero: 25, nom: "Int&eacutegrales impropres", visible: false },
    { numero: 26, nom: "Applications lin&eacuteaires en dimension finie", visible: false },
    { numero: 27, nom: "D&eacuteriv&eacutees successives, formules de Talor", visible: false },
    { numero: 28, nom: "Couples de variables al&eacuteatoires", visible: false },
    { numero: 29, nom: "Extrema et convexit&eacute", visible: false },
    { numero: 30, nom: "Convergences en probabilit&eacutes", visible: false },
    
    
    // Ajouter d'autres chapitres ici...
];



// Fonction pour generer les elements HTML pour chaque chapitre
function genererChapitres() {
    const ul = document.querySelector('.chapitres ul');
    
    chapitres.forEach(chapitre => {
        if (chapitre.visible) {
            console.log('Chapitre : ' + chapitre.numero);
            const li = document.createElement('li');
            li.setAttribute('data-visible', 'true');
            li.setAttribute('data-folder', `chapitre${chapitre.numero}`); // Utilisation du numéro de chapitre
            
            const innerHTML = `
                Chapitre ${chapitre.numero} (${chapitre.nom}) :
                <a href="cours.pdf" class="file-link" target="_blank">Cours</a> |
                <a href="exercices.pdf" class="file-link" target="_blank">Exercices</a> |
                <a href="corrige.pdf" class="file-link" target="_blank">Corrig&eacute</a>
            `;
            
            li.innerHTML = innerHTML;
            ul.appendChild(li);
        }
    });
}

// Appeler la fonction pour générer les chapitres au chargement du document
document.addEventListener("DOMContentLoaded", function() {
    genererChapitres();
});
