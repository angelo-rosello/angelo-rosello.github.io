// Tableau des chapitres avec leur numéro, nom, visibilité et option d'affichage du corrigé
const chapitres = [  
    { numero: 1, nom: "Logique, symbole, raisonnement", visible: true, afficherComplet : true, afficherCorrige: true },
    { numero: 2, nom: "Somme et produits", visible: true,  afficherComplet : true, afficherCorrige: true },
    { numero: 3, nom: "Applications", visible: true , afficherComplet : true, afficherCorrige:  true },
    { numero: 4, nom: "Réels, fonctions numériques", visible: true,  afficherComplet : true, afficherCorrige: true },
    { numero: 5, nom: "Suites réelles", visible: true,  afficherComplet : true, afficherCorrige: true },
    { numero: 6, nom: "Polynômes", visible: true,  afficherComplet : true, afficherCorrige: true },
    { numero: 7, nom: "Limites de suites", visible: true,  afficherComplet : true, afficherCorrige: true },
    { numero: 8, nom: "Dénombrement", visible: true,  afficherComplet : true, afficherCorrige: true },
    { numero: 9, nom: "Limites de fonctions", visible: true,  afficherComplet : true, afficherCorrige: true },
    { numero: 10, nom: "Continuité", visible: true,  afficherComplet : true, afficherCorrige: true },
    { numero: 11, nom: "Espaces probabilisés finis", visible: true, afficherComplet : true,  afficherCorrige: true },
    { numero: 12, nom: "Systèmes linéaires", visible: true,  afficherComplet : true, afficherCorrige: true },
    { numero: 13, nom: "Dérivation", visible: true,  afficherComplet : true, afficherCorrige: true },
    { numero: 14, nom: "Matrices", visible: true, afficherComplet : true, afficherCorrige: true },
    { numero: 15, nom: "Variables aléatoires finies", visible: true, afficherComplet : true,  afficherCorrige: true },
    { numero: 16, nom: "Intégration sur un segment", visible: true, afficherComplet : true,  afficherCorrige: true },
    { numero: 17, nom: "Espaces vectoriels", visible: true, afficherComplet : true, afficherCorrige: true },
    { numero: 18, nom: "Equivalence et négligeabilité", visible: true, afficherComplet : true,  afficherCorrige: true },
    { numero: 19, nom: "Applications linéaires", visible: true, afficherComplet : true,  afficherCorrige: true },
    { numero: 20, nom: "Séries", visible: true, afficherComplet : true,  afficherCorrige: true },
    { numero: 21, nom: "Espaces probabilisés généraux", visible: true, afficherComplet : true,  afficherCorrige: true },
    { numero: 22, nom: "Espaces vectoriels de dimension finie", visible: true, afficherComplet : true,  afficherCorrige: true },
    { numero: 23, nom: "Variables aléatoires discrètes", visible: true, afficherComplet : true,  afficherCorrige: true },
    { numero: 24, nom: "Somme de SEV", visible: true, afficherComplet : true,  afficherCorrige: true },
    { numero: 25, nom: "Intégrales impropres", visible: true,  afficherComplet : true, afficherCorrige: true }, 
    { numero: 26, nom: "Applications linéaires en dimension finie", visible: true, afficherComplet : true,  afficherCorrige: true },
    { numero: 27, nom: "Dérivées successives, formules de Taylor", visible: true, afficherComplet : true,  afficherCorrige: false },
    { numero: 28, nom: "Couples de variables aléatoires", visible: false, afficherComplet : false,  afficherCorrige: false },
    { numero: 29, nom: "Extrema et convexité", visible: false,  afficherComplet : false, afficherCorrige: false },
    { numero: 30, nom: "Convergences en probabilités", visible: false,  afficherComplet : false, afficherCorrige: false } 
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
                <a href="vierge.pdf" class="file-link" target="_blank">Poly vierge</a>`;

            // Ajouter le lien pour le cours complet et les exos si l'option est activée
            if (chapitre.afficherComplet) {
                innerHTML += ' | <a href="cours.pdf" class="file-link" target="_blank">Cours complet</a> | <a href="exercices.pdf" class="file-link" target="_blank">Exercices</a>';
            }
            
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
