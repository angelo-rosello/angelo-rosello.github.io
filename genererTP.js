// Tableau des chapitres avec leur numéro, nom, visibilité

const tps = [
    { numero: 1, nom: "D&eacutecouverte de Python ", visible: true },
    { numero: 2, nom : "numpy et fonctions", visible: true },
    { numero: 3, nom : "Structures conditionnelles", visible: true },
    { numero: 4, nom : "Listes, boucles for", visible: true },
    { numero: 5, nom : "Boucle for : sommes et produits", visible: true },
    { numero: 6, nom : "Etude de suites réelles - part. 1", visible: true },
    { numero: 7, nom : "Etude de suites réelles - part. 2", visible: true },
    { numero: 8, nom : "Boucle While", visible: true },
    { numero: 9, nom : "Résolutions d'équations par dichotomie", visible: true },
    { numero: 10, nom : "Révisions et compléments (sommes et produits, while)", visible: true }, 
    { numero: 11, nom : "Vecteurs - Partie I", visible: true },
    { numero: 12, nom : "Vecteurs - Partie II", visible: true },
    { numero: 13, nom : "Matrices - Partie I", visible: true },
    { numero: 14, nom : "Matrices - Partie II", visible: true },
    { numero: 15, nom : "Variables aléatoires - Partie I", visible: true },
    { numero: 16, nom : "Variables aléatoires - Partie II", visible: true },
    { numero: 17, nom : "Calcul d'intégrales", visible: true },
    { numero: 18, nom : "Représentations graphiques - Partie I", visible: true},
    { numero: 19, nom : "Illustrations sur les séries", visible: false} ,
    { numero: 20, nom : "Variables aléatoires - Partie II", visible: false}, 
    { numero: 21, nom : "Expériences aléatoires", visible: false}, 
    { numero: 22, nom : "Variables aléatoires - Partie III (Loi des grands nombres)", visible: false}, 
    { numero: 23, nom : "Polynôme interpolateur de Lagrange", visible: false},
    { numero: 24, nom : "Diagrammes en bâton", visible: false},
    { numero: 25, nom : "Révisions aléatoires (planche de Galton)", visible: false},
    { numero: 26, nom : "Diagonalisation (avec corrigé)", visible: false},
    
    
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
