// Tableau des chapitres avec leur numéro, nom, visibilité

const tps = [
    { numero: 1, nom: "D&eacutecouverte de Python ", visible: false },
    { numero: 2, nom : "numpy et fonctions", visible: false },
    { numero: 3, nom : "Structures conditionnelles", visible: false },
    { numero: 4, nom : "Listes, boucles for", visible: false },
    { numero: 5, nom : "Boucle for : sommes et produits", visible: false },
    { numero: 6, nom : "Etude de suites réelles - part. 1", visible: false },
    { numero: 7, nom : "Etude de suites réelles - part. 2", visible: false },
    { numero: 8, nom : "Boucle While", visible: false },
    { numero: 9, nom : "Résolutions d'équations par dichotomie", visible: false },
    { numero: 10, nom : "Révisions et compléments (sommes et produits, while)", visible: false }, 
    { numero: 11, nom : "Vecteurs - Partie I", visible: false },
    { numero: 12, nom : "Vecteurs - Partie II", visible: false },
    { numero: 13, nom : "Matrices - Partie I", visible: false },
    { numero: 14, nom : "Matrices - Partie II", visible: false },
    { numero: 15, nom : "Variables aléatoires - Partie I", visible: false },
    { numero: 16, nom : "Variables aléatoires - Partie II", visible: false },
    { numero: 17, nom : "Calcul d'intégrales", visible: false },
    { numero: 18, nom : "Représentations graphiques - Partie I", visible: false},
    { numero: 19, nom : "Conjecture de Syracuse", visible: false} ,
    { numero: 20, nom : "Réprésentations de séries", visible: false}, 
    { numero: 21, nom : "Représentations graphiques - Partie II", visible: false}, 
    { numero: 22, nom : "Variables aléatoires - Partie III (Variables discrète et loi des grands nombres)", visible: false}, 
    { numero: 23, nom : "Polynôme interpolateur de Lagrange", visible: false},
    { numero: 24, nom : "Matrices : diagonalisation", visible: false},
    { numero: 24.5, nom : "Diagrammes en bâton", visible: false},
    { numero: 25, nom : "Diagrammes en bâton", visible: false},
    { numero: 26, nom : "Etude de la suite logistique", visible: false},
    
    
    // Ajouter d'autres chapitres ici...
];



// Fonction pour générer les éléments HTML pour chaque chapitre
function genererTP() {
    const ul = document.querySelector('.tps ul');
    
    tps.forEach(tp => {
        if (tp.visible) {
            const li = document.createElement('li');
            li.setAttribute('data-visible', 'true');
            li.setAttribute('data-folder', `info`); 
            
            const innerHTML = `
                TP ${tp.numero} (${tp.nom}) :
                <a href="tp${tp.numero}.pdf" class="file-link" target="_blank">Feuille de TP</a> 
            `;
            
            li.innerHTML = innerHTML;
            ul.appendChild(li);
        }
    });
}

// Appeler la fonction pour générer les chapitres au chargement du document
document.addEventListener("DOMContentLoaded", function() {
    genererTP();
});
