// Tableau des chapitres avec leur numéro, nom, visibilité et option d'affichage du corrigé
const chapitres = [
    { numero: 1, nom: "Logique, symbole, raisonnement", visible: true, afficherCorrige: true },
    { numero: 2, nom: "Somme et produits", visible: true, afficherCorrige: true },
    { numero: 3, nom: "Applications", visible: true , afficherCorrige:  true },
    { numero: 4, nom: "R&eacuteels, fonctions num&eacuteriques", visible: true, afficherCorrige: true },
    { numero: 5, nom: "Suites r&eacuteelles", visible: true, afficherCorrige: true },
    { numero: 6, nom: "Polyn&ocircmes", visible: true, afficherCorrige: true },
    { numero: 7, nom: "Limites de suites", visible: true, afficherCorrige: true },
    { numero: 8, nom: "D&eacutenombrement", visible: true, afficherCorrige: true },
    { numero: 9, nom: "Limites de fonctions", visible: true, afficherCorrige: true },
    { numero: 10, nom: "Continuit&eacute", visible: true, afficherCorrige: true },
    { numero: 11, nom: "Espaces probabilis&eacutes finis", visible: true, afficherCorrige: true },
    { numero: 12, nom: "Syst&egravemes lin&eacuteaires", visible: true, afficherCorrige: false },
    { numero: 13, nom: "D&eacuterivation", visible: false, afficherCorrige: false },
    { numero: 14, nom: "Matrices", visible: false, afficherCorrige: false },
    { numero: 15, nom: "Variables al&eacuteatoires finies", visible: false, afficherCorrige: false },
    { numero: 16, nom: "Int&eacutegration sur un segment", visible: false, afficherCorrige: false },
    { numero: 17, nom: "Espaces vectoriels", visible: false, afficherCorrige: false },
    { numero: 18, nom: "Equivalence et n&eacutegligeabilit&eacute", visible: false, afficherCorrige: false },
    { numero: 19, nom: "Applications lin&eacuteaires", visible: false, afficherCorrige: false },
    { numero: 20, nom: "S&eacuteries", visible: false, afficherCorrige: false },
    { numero: 21, nom: "Espaces probabilis&eacutes g&eacuten&eacuteraux", visible: false, afficherCorrige: false },
    { numero: 22, nom: "Espaces vectoriels de dimension finie", visible: false, afficherCorrige: false },
    { numero: 23, nom: "Variables al&eacuteatoies discr&egravetes", visible: false, afficherCorrige: false },
    { numero: 24, nom: "Somme de SEV", visible: false, afficherCorrige: false },
    { numero: 25, nom: "Int&eacutegrales impropres", visible: false, afficherCorrige: false },
    { numero: 26, nom: "Applications lin&eacuteaires en dimension finie", visible: false, afficherCorrige: false },
    { numero: 27, nom: "D&eacuteriv&eacutees successives, formules de Talor", visible: false, afficherCorrige: false },
    { numero: 28, nom: "Couples de variables al&eacuteatoires", visible: false, afficherCorrige: false },
    { numero: 29, nom: "Extrema et convexit&eacute", visible: false, afficherCorrige: false },
    { numero: 30, nom: "Convergences en probabilit&eacutes", visible: false, afficherCorrige: false },
];



// Fonction pour générer les éléments HTML pour chaque chapitre
function genererChapitres() {
    const ul = document.querySelector('.chapitres ul');
    
    chapitres.forEach(chapitre => {
        if (chapitre.visible) {
            const li = document.createElement('li');
            li.setAttribute('data-visible', 'true');
            li.setAttribute('data-folder', `chapitre${chapitre.numero}`); // Utilisation du numéro de chapitre
            
            let innerHTML = `
                Chapitre ${chapitre.numero} (${chapitre.nom}) :
                <a href="cours.pdf" class="file-link" target="_blank">Cours</a> |
                <a href="exercices.pdf" class="file-link" target="_blank">Exercices</a>
            `;
            
            // Ajouter le lien pour le corrigé si l'option est activée
            if (chapitre.afficherCorrige) {
                innerHTML += ' | <a href="corrige.pdf" class="file-link" target="_blank">Corrigé</a>';
            }
            
            li.innerHTML = innerHTML;
            ul.appendChild(li);
        }
    });
}

// Appeler la fonction pour générer les chapitres au chargement du document
document.addEventListener("DOMContentLoaded", function() {
    genererChapitres();
});
