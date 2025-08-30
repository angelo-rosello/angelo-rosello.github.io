// UPDATE 10

// Tableau des chapitres avec leur numéro, nom, visibilité et option d'affichage du corrigé
const chapitres = [
    {
        numero: 1,
        nom: "Logique et raisonnement",
        visible: true,
        afficherComplet: true,
        afficherCorrige: true,
        memes: [
            { label: "Pour clarifier", url: "doc-eleves/memes/rock.png" },
            { label: "Base case = Initialisation", url: "https://www.instagram.com/reel/DF9OKmPuTlW/?utm_source=ig_web_copy_link&igsh=MWZ1a3Zlc2x1OXI1dA==" },
            { label: "Big brains in the group chat", url: "https://www.instagram.com/reel/DH0nhBUIb0E/?utm_source=ig_web_copy_link&igsh=MW44eTZhM2pjNnVsdw==" }
        ]
    },
    {
        numero: 2,
        nom: "Somme et produits",
        visible: true,
        afficherComplet: false,
        afficherCorrige: false,
        memes: [
            { label: "Par pitié", url: "doc-eleves/memes/sum.png" }
        ]
    },
    {
        numero: 3,
        nom: "Applications",
        visible: true,
        afficherComplet: false,
        afficherCorrige: false,
        memes: [
            { label: "Motivational speech", url: "https://www.instagram.com/reel/DHdw7kAyLbJ/?utm_source=ig_web_copy_link&igsh=b3cybWRrN3hvcWhr" }
        ]
    },
    {
        numero: 4,
        nom: "Réels, fonctions numériques",
        visible: true,
        afficherComplet: false,
        afficherCorrige: false,
        memes: [
            { label: "Il y a 3 angles à connaître...", url: "https://www.instagram.com/reel/C6bKri4IwAq/?utm_source=ig_web_copy_link&igsh=eWo2NnhyOGk2bXdn" }
        ]
    },
    {
        numero: 5,
        nom: "Suites réelles",
        visible: true,
        afficherComplet: false,
        afficherCorrige: false,
        memes: [
            { label: "Hors sujet mais relatable", url: "https://www.instagram.com/reel/DCJg7sjsnIJ/?utm_source=ig_web_copy_link&igsh=NXdma2xmdXMyY3M0" }
        ]
    },
    {
        numero: 6,
        nom: "Polynômes",
        visible: true,
        afficherComplet: false,
        afficherCorrige: false,
        memes: [
            { label: "Dosez", url: "doc-eleves/memes/cuillere.png" },
            { label: "Racine évidente", url: "https://www.instagram.com/reel/DJl5PbPM8fz/?utm_source=ig_web_copy_link&igsh=dGNlZnJ4N3FoM2V0" },
            { label: "(seulement pour les polynôme unitaires)", url: "https://www.instagram.com/reel/DBrPbFdtuWs/?utm_source=ig_web_copy_link&igsh=MWl4cTRqMDJpM3ZnZw==" }
        ]
    },
    {
        numero: 7,
        nom: "Limites de suites",
        visible: true,
        afficherComplet: false,
        afficherCorrige: false,
        memes: [
            { label: "Bienvenue dans le vrai monde", url: "https://www.instagram.com/reel/DC1RmQyIQgH/?utm_source=ig_web_copy_link&igsh=aGdvb21keDk3N2Fo" },
            { label: "c'EsT uNe FoRmE iNdEtErMiNeE", url: "https://www.instagram.com/reel/DE2N3bVM621/?utm_source=ig_web_copy_link&igsh=YmthaXRxbTR4OXl3" }
        ]
    },
    {
        numero: 8,
        nom: "Dénombrement",
        visible: true,
        afficherComplet: false,
        afficherCorrige: false,
        memes: [
            { label: "LVB español", url: "doc-eleves/memes/espanol.png" }
        ]
    },
    {
        numero: 9,
        nom: "Limites de fonctions",
        visible: true,
        afficherComplet: false,
        afficherCorrige: false,
        memes: [
            { label: "Name a better duo", url: "https://www.instagram.com/reel/C_K0l97o7MK/?utm_source=ig_web_copy_link&igsh=MXBpdjd3cDdkZHl3bw==" },
            { label: "Toujours pas", url: "https://www.instagram.com/reel/DE2N3bVM621/?utm_source=ig_web_copy_link&igsh=YmthaXRxbTR4OXl3" },
            { label: "Technique connue des plus grands", url: "https://www.instagram.com/reel/DA3g-uDtXNk/?utm_source=ig_web_copy_link&igsh=MTBrZjR2YnIwaGExcg==" }
        ]
    },
    {
        numero: 10,
        nom: "Continuité",
        visible: true,
        afficherComplet: false,
        afficherCorrige: false,
        memes: [
            { label: "L'essence du TVI", url: "doc-eleves/memes/tvi.png" }
        ]
    },
    {
        numero: 11,
        nom: "Espaces probabilisés finis",
        visible: true,
        afficherComplet: false,
        afficherCorrige: false,
        memes: [
            { label: "Enfin une application concrète", url: "doc-eleves/memes/bayes.png" }
        ]
    },
    {
        numero: 12,
        nom: "Systèmes linéaires",
        visible: true,
        afficherComplet: false,
        afficherCorrige: false,
        memes: []
    },
    {
        numero: 13,
        nom: "Dérivation",
        visible: true,
        afficherComplet: false,
        afficherCorrige: false,
        memes: [
            { label: "Bro can handle it", url: "https://www.instagram.com/reel/DFoQFXUz8dX/?utm_source=ig_web_copy_link&igsh=OTExZjJ1dGVvbHFu" },
            { label: "Coup dur", url: "https://www.instagram.com/reel/DFabKTpOoid/?utm_source=ig_web_copy_link&igsh=MTJoend3Zno1eTVlOA==" }
        ]
    },
    {
        numero: 14,
        nom: "Matrices",
        visible: true,
        afficherComplet: false,
        afficherCorrige: false,
        memes: [
            { label: "No better answer", url: "doc-eleves/memes/tweet.png" },
            { label: "Un grand classique", url: "doc-eleves/memes/luigi.png" }
        ]
    },
    {
        numero: 15,
        nom: "Variables aléatoires finies",
        visible: true,
        afficherComplet: false,
        afficherCorrige: false,
        memes: []
    },
    {
        numero: 16,
        nom: "Intégration sur un segment",
        visible: true,
        afficherComplet: false,
        afficherCorrige: false,
        memes: [
            { label: "C'est juste dériver à l'envers...", url: "doc-eleves/memes/integration.png" },
            { label: "Visualisation de l'IPP", url: "doc-eleves/memes/minecraft.png" },
            { label: "Ah sh$t, here we go again", url: "doc-eleves/memes/orange.png" },
            { label: "Exo bonus", url: "doc-eleves/memes/exo.png" }
        ]
    },
    {
        numero: 17,
        nom: "Espaces vectoriels",
        visible: true,
        afficherComplet: false,
        afficherCorrige: false,
        memes: [
            { label: "Souvent dur à encaisser, ce chapitre", url: "doc-eleves/memes/shrek.png" }
        ]
    },
    {
        numero: 18,
        nom: "Equivalence et négligeabilité",
        visible: true,
        afficherComplet: false,
        afficherCorrige: false,
        memes: [
            { label: "Hors sujet mais relatable", url: "https://www.instagram.com/reel/Cy8sanCsXAb/?utm_source=ig_web_copy_link&igsh=MTlweTI2dHl3bXQyZQ==" }
        ]
    },

    {
    numero: 19,
    nom: "Applications linéaires",
    visible: true,
    afficherComplet: false,
    afficherCorrige: false,
    memes: [
        { label: "Hors sujet mais relatable", url: "https://www.instagram.com/reel/DFdUuKSokmo/?utm_source=ig_web_copy_link&igsh=MW8ycWM5bGhzMTZ3Yw==" }
    ]
},
{
    numero: 20,
    nom: "Séries",
    visible: true,
    afficherComplet: false,
    afficherCorrige: false,
    memes: [
        { label: "A vérifier en premier", url: "https://www.instagram.com/reel/C3N0Du0I821/?utm_source=ig_web_copy_link&igsh=ZjEyeXBnM3FueGlq" },
        { label: "Ref de 2014", url: "doc-eleves/memes/divergent.png" },
        { label: "Ref de 2024", url: "https://www.instagram.com/reel/C2sdp0CIBWy/?utm_source=ig_web_copy_link&igsh=MTB1amU0aGluOTBsZg==" }
    ]
},
{
    numero: 21,
    nom: "Espaces probabilisés généraux",
    visible: true,
    afficherComplet: false,
    afficherCorrige: false,
    memes: []
},
{
    numero: 22,
    nom: "Espaces vectoriels de dimension finie",
    visible: true,
    afficherComplet: false,
    afficherCorrige: false,
    memes: [
        { label: "Tout n'était qu'un rêve fiévreux", url: "https://www.instagram.com/reel/C_3yRbXMo8o/?utm_source=ig_web_copy_link&igsh=MW4wMmZsdHpkMHM5dg==" }
    ]
},
{
    numero: 23,
    nom: "Variables aléatoires discrètes",
    visible: true,
    afficherComplet: false,
    afficherCorrige: false,
    memes: []
},
{
    numero: 24,
    nom: "Somme de SEV",
    visible: false,
    afficherComplet: true,
    afficherCorrige: false,
    memes: [
        { label: "Hors sujet mais relatable", url: "https://www.instagram.com/reel/C6RKwj9Iekr/?utm_source=ig_web_copy_link&igsh=MXZkdzU4anQxcWR4dw==" }
    ]
},
{
    numero: 25,
    nom: "Intégrales impropres",
    visible: true,
    afficherComplet: false,
    afficherCorrige: false,
    memes: [
        { label: "Hors sujet mais relatable", url: "https://www.instagram.com/reel/DBBPnz5IgzR/?utm_source=ig_web_copy_link&igsh=MTk0bmNzcjVjZHdiZQ==" }
    ]
},
{
    numero: 26,
    nom: "Applications linéaires en dimension finie",
    visible: true,
    afficherComplet: false,
    afficherCorrige: false,
    memes: []
},
{
    numero: 27,
    nom: "Dérivées successives, formules de Taylor",
    visible: true,
    afficherComplet: false,
    afficherCorrige: false,
    memes: [
        { label: "Les vraies Swifties", url: "doc-eleves/memes/taylor.png" }
    ]
},
{
    numero: 28,
    nom: "Couples de variables aléatoires",
    visible: true,
    afficherComplet: false,
    afficherCorrige: false,
    memes: []
},
{
    numero: 29,
    nom: "Extrema et convexité",
    visible: true,
    afficherComplet: false,
    afficherCorrige: false,
    memes: []
},
{
    numero: 30,
    nom: "Convergences en probabilités",
    visible: true,
    afficherComplet: false,
    afficherCorrige: false,
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
                Chap. ${chapitre.numero} (${chapitre.nom}) :
                <a href="vierge.pdf" class="file-link" target="_blank">Poly vierge</a>`;

            if (chapitre.afficherComplet) {
                innerHTML += ' | <a href="cours.pdf" target="_blank">Cours complet</a> | <a href="exercices.pdf" target="_blank">Exercices</a>';
            }

            if (chapitre.afficherCorrige) {
                innerHTML += ' | <a href="corrige.pdf" target="_blank">Corrigé</a>';
            }

            li.innerHTML = innerHTML;

            // Bloc memes
            if (chapitre.memes && chapitre.memes.length > 0) {
            
                // Bouton "Complément" (triangle géré uniquement en CSS avec .open)
                const toggle = document.createElement('span');
                toggle.className = "toggle-meme";
                toggle.textContent = '+'; // 'Complément';
            
                const memeList = document.createElement('ul');
                memeList.className = "meme-list";
            
                const memeContainer = document.createElement('div');
                memeContainer.className = 'meme-container';
            
                chapitre.memes.forEach(meme => {
                    const liMeme = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = meme.url;
                    a.target = "_blank";
                    a.textContent = meme.label;
            
                    // Ajouter l'icône Instagram si le lien contient "instagram.com"
                    if (meme.url.includes('instagram.com')) {
                        const instaIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        instaIcon.setAttribute("viewBox", "0 0 24 24");
                        instaIcon.setAttribute("class", "instagram-icon");
                        instaIcon.setAttribute("width", "12");
                        instaIcon.setAttribute("height", "12");
                        instaIcon.innerHTML = `
                            <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.772.13 4.642.443 3.678 1.407 2.714 2.371 2.401 3.5 2.343 4.78.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.058 1.28.371 2.409 1.335 3.373.964.964 2.093 1.277 3.373 1.335 1.28.058 1.689.072 4.948.072s3.668-.014 4.948-.072c1.28-.058 2.409-.371 3.373-1.335.964-.964 1.277-2.093 1.335-3.373.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.058-1.28-.371-2.409-1.335-3.373-.964-.964-2.093-1.277-3.373-1.335C15.668.014 15.259 0 12 0z"/>
                            <path fill="currentColor" d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z"/>
                            <circle fill="currentColor" cx="18.406" cy="5.594" r="1.44"/>
                        `;
                        a.appendChild(instaIcon);
                    }
            
                    liMeme.appendChild(a);
                    memeContainer.appendChild(liMeme);
                });
            
                memeList.appendChild(memeContainer);
            
                // bloc séparé pour forcer le retour à la ligne
                const memeBlock = document.createElement('div');
                memeBlock.style.display = 'block';
                memeBlock.appendChild(memeList);
            
                li.appendChild(document.createTextNode(" | "));
                li.appendChild(toggle);
                li.appendChild(memeBlock);
            
                // toggle l’affichage
                toggle.addEventListener('click', () => {
                    memeList.classList.toggle('open');
                    toggle.classList.toggle('open'); // pour la flèche CSS
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
