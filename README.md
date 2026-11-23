# TypeUP Academia

## Le site

`index.html` est la vitrine publique. Le formulaire prépare une demande et ouvre WhatsApp vers l’un des numéros configurés. L’étudiant joint son PDF ou son document Word dans WhatsApp; le site ne conserve pas les fichiers.

## Modifier les tarifs depuis l’administration

Après la publication, l’espace de gestion se trouvera à `/admin/`. Les champs modifiables sont le nom du site, les textes d’accueil, les tranches de prix, les frais de saisie/mise en forme, l’impression, les numéros WhatsApp et les exemples de calcul.

Les modifications sont enregistrées dans `content/site-settings.json` sur la branche Git configurée. Netlify republie ensuite le site. Cela utilise le dépôt de fichiers comme source de contenu, sans base de données SQL.

## Mise en ligne à terminer

La mise en ligne nécessite un dépôt GitHub, un compte Netlify lié à ce dépôt, puis un compte Decap Turbo lié à GitHub. Le fichier `admin/config.yml` contient encore le marqueur `REPLACE_WITH_TURBO_SITE_ID`; il doit être remplacé par l’identifiant du site Decap Turbo avant que l’administration puisse se connecter.

`netlify.toml` et `scripts/build-site.mjs` demandent à Netlify de publier uniquement les fichiers du site (`index.html`, `admin/` et `content/`). Les anciens fichiers locaux du prototype et la base SQLite ne font pas partie de la version publique.
