// Tableau des chapitres avec leur numéro, nom, visibilité

const tps = [
    { numero: 1, nom: "D&eacutecouverte de Python", visible: true },
    { numero: 2, nom : "numpy et fonctions", visible: true },
    { numero: 3, nom : "Listes, boucles for", visible: true },
    { numero: 4, nom : "Boucle for : sommes et produits", visible: true }
    
    
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
