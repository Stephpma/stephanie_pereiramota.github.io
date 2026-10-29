# Guide : faire vivre votre portfolio

Ce guide explique, pas à pas, comment ajouter un projet, mettre une vidéo en ligne et modifier vos textes. Vous n'avez pas besoin de toucher à la mise en page : tout le contenu se trouve dans deux fichiers.

| Fichier | Ce qu'il contient |
|---|---|
| `content/site.js` | Les textes du site : présentation, frise, compétences, formation, contact |
| `content/projects.js` | Vos projets et leurs études de cas |

Chaque texte existe en deux langues, sous cette forme :

```js
{ fr: "Texte en français", en: "Text in English" }
```

Modifiez toujours les deux langues. Gardez les guillemets `"` et les virgules : une virgule oubliée suffit à casser la page. Si la page devient blanche, c'est presque toujours une virgule ou un guillemet en trop ou en moins.

---

## 1. Ajouter un projet

1. **Préparez vos images.** Créez un dossier `assets/img/nom-du-projet/` et mettez-y vos captures. Préférez le format `.webp` ou `.jpg`, de moins de 300 Ko chacune et d'environ 1 600 px de large.
2. **Ouvrez `content/projects.js`.** Tout en bas, un modèle est en commentaire (entre `/*` et `*/`).
3. **Copiez ce modèle**, sans le `/*` ni le `*/`, et collez-le juste après le `[` de la première ligne `window.PROJECTS = [`. Ajoutez une virgule après l'accolade fermante `}` de votre nouveau projet, pour le séparer du projet suivant.
4. **Remplissez les champs :**
   - `id` : un nom court, sans espace ni accent (ex. `appli-conciergerie`). Il sert dans l'adresse de la page : `projet.html?id=appli-conciergerie`.
   - `year`, `title`, `tagline` (une phrase), `summary` (deux phrases).
   - `cover` : le chemin de l'image principale ; `coverAlt` : sa description, pour les personnes malvoyantes.
   - `tags` : les outils utilisés.
   - `facts` : les lignes de la fiche « En bref » (rôle, durée, etc.).
   - `problem`, `solution`, `chapters` : le récit de l'étude de cas.
   - `decisions`, `status`, `stack` : facultatifs. Laissez `[]` s'ils sont vides.
5. **Enregistrez**, puis ouvrez la page pour vérifier (voir la section 4).

Le projet le plus haut dans la liste s'affiche en premier sur l'accueil.

---

## 2. Ajouter une vidéo

Les vidéos sont hébergées directement sur le site, dans le dossier `assets/video/`. Rien n'est téléchargé tant que le visiteur ne clique pas sur « Lire la vidéo ».

1. **Allégez la vidéo** avant de l'ajouter. Visez moins de 10 Mo par vidéo (GitHub refuse les fichiers de plus de 100 Mo). Le plus simple : demandez-le à Claude Code, qui compresse au format web (MP4 H.264, 1280 px de large).
2. **Préparez une image d'aperçu** (une capture de la vidéo) dans `assets/img/posters/`.
3. **Copiez la vidéo** dans `assets/video/`, avec un nom court, sans espace ni accent (ex. `demo-appli.mp4`).
4. Dans `content/projects.js`, ajoutez la vidéo dans les `media` d'un chapitre :

```js
{ type: "video", file: "assets/video/demo-appli.mp4", poster: "assets/img/posters/demo-appli.webp", title: { fr: "…", en: "…" }, duration: "1:30" }
```

La première vidéo d'un chapitre s'affiche en grand, les suivantes à côté des captures.

Vos 8 vidéos Playoff_Amateurs sont déjà en place : compressées (17 Mo au total au lieu de 135), avec la barre du navigateur (onglets, adresse, favoris) coupée. Revisionnez-les quand même une fois : certaines montrent votre boîte Gmail de test.

Vous pouvez aussi utiliser YouTube : remplissez le champ `youtube` avec l'identifiant de la vidéo (les 11 caractères après `v=` dans l'adresse) et retirez le champ `file`.

---

## 3. Modifier vos textes, votre frise ou votre CV

- **Phrases d'accroche, titres, boutons** : section `ui` de `content/site.js`.
- **Frise chronologique** : section `timeline`. Chaque poste a un `kind` : `"hospitality"` (pastille brune), `"transition"` (grise) ou `"product"` (terracotta).
- **Compétences, outils, langues, formation** : sections `skills`, `tools`, `languages`, `education`, `certifications`.
- **CV** : remplacez le fichier `assets/cv/CV-Stephanie-Pereira-Mota.pdf` en gardant le même nom.
- **Photo** : remplacez `assets/img/photo.webp`. Une photo carrée d'au moins 400 × 400 px rendra mieux que l'actuelle.

---

## 4. Vérifier avant de publier

Le plus simple : double-cliquez sur `index.html`, il s'ouvre dans votre navigateur. Pour une vérification fidèle au site en ligne, lancez dans un terminal, depuis le dossier `site` :

```bash
npx http-server -c-1
```

Puis ouvrez l'adresse affichée (par exemple `http://localhost:8080`). Vérifiez la page en français, puis en anglais (bouton EN en haut à droite).

---

## 5. Publier sur GitHub Pages

Une fois le site en ligne, chaque modification se publie en trois commandes, depuis le dossier `site` :

```bash
git add -A
git commit -m "Ajout du projet X"
git push
```

Le site se met à jour en une à deux minutes.

Pour un bel aperçu quand vous partagez le lien sur LinkedIn, mettez l'adresse complète de l'image dans les balises `og:image` de `index.html` et `projet.html`. Par exemple : `https://votre-nom.github.io/assets/img/og-image.png`.
