// Tableau des chapitres avec leur num�ro, nom, visibilit�

const tps = [
    { numero: 1, nom: "D&eacutecouverte de Python", visible: false },
    
    
    // Ajouter d'autres chapitres ici...
];



// Fonction pour g�n�rer les �l�ments HTML pour chaque chapitre
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

// Appeler la fonction pour g�n�rer les chapitres au chargement du document
document.addEventListener("DOMContentLoaded", function() {
    genererTP();
});
