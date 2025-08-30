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
                const toggle = document.createElement('span');
                toggle.className = "toggle-meme";
                toggle.textContent = "Complément";

                const memeList = document.createElement('ul');
                memeList.className = "meme-list";

                const memeContainer = document.createElement('div');
                memeContainer.className = 'meme-container';

                chapitre.memes.forEach((meme, index) => {
                    const liMeme = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = meme.url;
                    a.target = "_blank";
                    a.textContent = meme.label;
                    liMeme.appendChild(a);

                    // ajoute un point noir entre les liens sauf le dernier
                    if (index < chapitre.memes.length - 1) {
                        const sep = document.createElement('span');
                        sep.textContent = ' • ';
                        liMeme.appendChild(sep);
                    }

                    memeContainer.appendChild(liMeme);
                });

                memeList.appendChild(memeContainer);

                // meme-list dans un conteneur à la ligne, toggle reste inline
                const memeBlock = document.createElement('div');
                memeBlock.style.display = 'block';
                memeBlock.appendChild(memeList);

                li.appendChild(document.createTextNode(" | "));
                li.appendChild(toggle);
                li.appendChild(memeBlock);

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
