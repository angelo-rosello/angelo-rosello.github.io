// Tableau des chapitres avec leur numéro, nom, visibilité et option d'affichage du corrigé
const chapitres = [  
    { numero: 1, nom: "Logique, symbole, raisonnement", visible: true, afficherComplet : true, afficherCorrige: true,
    memes: [
        { label: "Meme PNG", url: "memes/chapitre1/meme1.png" },
        { label: "TikTok drôle", url: "https://www.tiktok.com/..." }
      ]
    },
    { numero: 2, nom: "Somme et produits", visible: false,  afficherComplet : false, afficherCorrige: false,
    memes: []
    },
    { numero: 3, nom: "Applications", visible: false,  afficherComplet : false, afficherCorrige: false,
    memes: []
    },
    { numero: 4, nom: "Réels, fonctions numériques", visible: false,  afficherComplet : false, afficherCorrige: false,
    memes: []
    },
    { numero: 5, nom: "Suites réelles", visible: false,  afficherComplet : false, afficherCorrige: false,
    memes: []
    },
    { numero: 6, nom: "Polynômes", visible: false,  afficherComplet : false, afficherCorrige: false,
    memes: []
    },
    { numero: 7, nom: "Limites de suites", visible: false,  afficherComplet : false, afficherCorrige: false,
    memes: []
    },
    { numero: 8, nom: "Dénombrement", visible: false,  afficherComplet : false, afficherCorrige: false,
    memes: []
    },
    { numero: 9, nom: "Limites de fonctions", visible: false,  afficherComplet : false, afficherCorrige: false,
    memes: []
    },
    { numero: 10, nom: "Continuité", visible: false,  afficherComplet : false, afficherCorrige: false,
    memes: []
    },
    { numero: 11, nom: "Espaces probabilisés finis", visible: false,  afficherComplet : false, afficherCorrige: false,
    memes: []
    },
    { numero: 12, nom: "Systèmes linéaires", visible: false,  afficherComplet : false, afficherCorrige: false,
    memes: []
    },
    { numero: 13, nom: "Dérivation", visible: false,  afficherComplet : false, afficherCorrige: false,
    memes: []
    },
    { numero: 14, nom: "Matrices", visible: false,  afficherComplet : false, afficherCorrige: false,
    memes: []
    },
    { numero: 15, nom: "Variables aléatoires finies", visible: false,  afficherComplet : false, afficherCorrige: false,
    memes: []
    },
    { numero: 16, nom: "Intégration sur un segment", visible: false,  afficherComplet : false, afficherCorrige: false,
    memes: []
    },
    { numero: 17, nom: "Espaces vectoriels", visible: false,  afficherComplet : false, afficherCorrige: false,
    memes: []
    },
    { numero: 18, nom: "Equivalence et négligeabilité", visible: false,  afficherComplet : false, afficherCorrige: false,
    memes: []
    },
    { numero: 19, nom: "Applications linéaires", visible: false,  afficherComplet : false, afficherCorrige: false,
    memes: []
    },
    { numero: 20, nom: "Séries", visible: false,  afficherComplet : false, afficherCorrige: false,
    memes: []
    },
    { numero: 21, nom: "Espaces probabilisés généraux", visible: false,  afficherComplet : false, afficherCorrige: false,
    memes: []
    },
    { numero: 22, nom: "Espaces vectoriels de dimension finie", visible: false,  afficherComplet : false, afficherCorrige: false,
    memes: []
    },
    { numero: 23, nom: "Variables aléatoires discrètes", visible: false,  afficherComplet : false, afficherCorrige: false,
    memes: []
    },
    { numero: 24, nom: "Somme de SEV", visible: false,  afficherComplet : false, afficherCorrige: false,
    memes: []
    },
    { numero: 25, nom: "Intégrales impropres", visible: false,  afficherComplet : false, afficherCorrige: false,
    memes: []
    }, 
    { numero: 26, nom: "Applications linéaires en dimension finie", visible: false,  afficherComplet : false, afficherCorrige: false,
    memes: []
    },
    { numero: 27, nom: "Dérivées successives, formules de Taylor", visible: false,  afficherComplet : false, afficherCorrige: false,
    memes: []
    },
    { numero: 28, nom: "Couples de variables aléatoires", visible: false,  afficherComplet : false, afficherCorrige: false,
    memes: []
    },
    { numero: 29, nom: "Extrema et convexité", visible: false,  afficherComplet : false, afficherCorrige: false,
    memes: []
    },
    { numero: 30, nom: "Convergences en probabilités", visible: false,  afficherComplet : false, afficherCorrige: false,
    memes: []
    }
];



// Fonction pour générer les éléments HTML pour chaque chapitre
function genererChapitres() {
    const ul = document.querySelector('.chapitres ul');
    
    chapitres.forEach(chapitre => {
        if (chapitre.visible) {
            const li = document.createElement('li');
            li.setAttribute('data-visible', 'true');
            li.setAttribute('data-folder', `chapitre${chapitre.numero}`);
            
            // Bloc principal (poly, cours, corrigé)
            let innerHTML = `
                Chap.${chapitre.numero} (${chapitre.nom}) :
                <a href="vierge.pdf" class="file-link" target="_blank">Poly vierge</a>`;
            
            if (chapitre.afficherComplet) {
                innerHTML += ' | <a href="cours.pdf" target="_blank">Cours complet</a> | <a href="exercices.pdf" target="_blank">Exercices</a>';
            }
            
            if (chapitre.afficherCorrige) {
                innerHTML += ' | <a href="corrige.pdf" target="_blank">Corrigé</a>';
            }
            
            li.innerHTML = innerHTML;
            
            // Bloc memes (DOM séparé pour éviter HTML bancal)
            if (chapitre.memes && chapitre.memes.length > 0) {
                const toggle = document.createElement('span');
                toggle.className = "toggle-meme";
                toggle.textContent = "Complément";
                
                const memeList = document.createElement('ul');
                memeList.className = "meme-list";
                
                chapitre.memes.forEach(meme => {
                    const liMeme = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = meme.url;
                    a.target = "_blank";
                    a.textContent = meme.label;
                    liMeme.appendChild(a);
                    memeList.appendChild(liMeme);
                });
                
                li.appendChild(document.createTextNode(" | "));
                li.appendChild(toggle);
                li.appendChild(memeList);
                
                // toggle l’affichage
                toggle.addEventListener('click', () => {
                    memeList.classList.toggle('open');
                });
            }
            
            ul.appendChild(li);
        }
    });
}

// Appeler la fonction pour générer les chapitres au chargement du document
document.addEventListener("DOMContentLoaded", function() {
    genererChapitres();
});
