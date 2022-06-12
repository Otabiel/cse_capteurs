# Projet CSE 2022
Auteurs : Da Rocha Carvalho Bruno, Mercier Lucas, Pruvot Lucien

## Préparation

### Base de donnée

Pour ce projet Prisma a été utilisé. C'est un "mapping objet-relationnel" open-source qui simplifie drastiquement la modélisation de donnée, leurs migrations et l'accès  au données pour des base de donnée SQL en Node.js. 
> Installation

```bash
npm install prisma 
OR	
yarn add prisma
```

Ensuite pour pouvoir utilisé l'implémentation il faut aller inscrire dans le fichier `.env` à la racine du projet, l'adresse de votre base de donnée telle que : 

```
DATABASE_URL="postgres://user:password@host:port/db_name"
SHADOW_DATABASE_URL="postgres://user:password@host:port/db_name"
```

Dans ce même fichier il faut également mettre votre clé d'encryption pour les tokens json utilisé dans ce projet. Vous pouvez garder la même ou mettre n'importe quel autre clé vous allant.

### Node-Red

Il s'agit d'un outil de programmation pour relier des périphériques, des APIs et des services en ligne. Cela permet de faire ça simplement sur une interface web.

> Installation

```bash
npm install node-red
OR 
yarn add node-red
```

Une fois l'installation faîtes vous aurez dans `/home/your_profile/.node-red/flows.json` la description de votre design node-red. Vous pouvez donc copier celle présente dans `flow_node_red/flow.json` pour la remplacer.

Néanmoin il faudra ajouter quelques configuration pour que le projet node-red puisse fonctionner : 
![Node-red](img_readme/Node-red.png)

- Dans l'encadré bleu, il faut aller renseigner les informations du topics mqtt
- Dans les encadrés vert, il faut aller renseigner les informations de votre base de données

Une fois cela fait simplement appuyer sur le bouton `deploy` et votre application node-red s'exécute et mettra a jour votre base de données.

### Site web

*Prérequis : avoir node.js d'installé*

```bash
npm run dev
# or
yarn dev
```

## Infrastructure

### Base de donnée

La description de la base de donnée se trouve dans `prisma/schema.prisma`.
Si vous décidé de la modifier, une fois vos modification faîtes il faudra lancer la commande : 

```bash
npx prisma db push
```

Cet dernière va ajouter vas pousser vos modifications *Attention ! Si les modifications sont trop conséquentes il se peut que vos données soit perdues !*

Ensuite afin d'avoir un historique des migrations qu'il a été fait sur le schema de la base de donnée : 
```bash
npx prisma migrate dev --name little_description
```

Ce résumé de modification apparaitra alors dans `prisma/migrations/yyyymmddhhmmss_little_description/migration.sql`

### Node-red

Pour modifier il vous suffit d'étider les blocs existants ou rajouter de nouveaux liens, et ensuite de simplement appuyé sur `Deploy` pour que les modifications soient prisent en compte dans votre fichier `flow.json`.

### Site web

Tout ce qui concerne le site client-side et server-side se trouve dans `src/`

- Dans `src/decorators` : Se trouve un unique fichier `auth.js` qui va permettre de vérifier la présence du token pour les accès à certaines fonctionnalités du site.
- Dans `src/hooks` : Se trouve un unique fichier `auth.js` qui lui permet de renseigner à l'ensemble du projet l'utilisateur connecté. Il y a une protection de loading également pour signaler quand l'opération server-side est terminée. 
- Dans `src/components` : Se trouve tous les composants utilisé dans les 4 pages du sites ;
  - `AddSensorModal.js` Inclus dans la page de profile. Cela implémente un bouton modal, donc qui ouvre une pop-up pour l'ajout d'un nouveau capteur.
  - `DelSensorModal.js` Malheureusement non fonctionnel. Cela implémente un bouton modal, donc qui ouvre une pop-up pour la suppression d'un capteur du tableau.
  - `Footer.js` Inclus dans toutes les pages. Permet la description du pied de page du site
  - `Header.js` Inclus dans toutes les pages. Représente la barre de navigation
  - `Hero.js` Inclus dans la page d'accueil. Est l'introduction présentant le projet
  - `Layout.js` Inclus dans toutes les pages. Permet d'englober dans un ensemble commun la description d'une page. Car on ne peut pas retourner plusieurs balises, mais une seuls englobant le tout.
  - `Notifs.js` Inclus dans le profile. Affiche l'état des notifications mails pour l'utilisateurs courant, et offre la possibilité de les activées ou non avec un bouton.
  - `Sensor.js` Inclus dans la page d'accueil. Description des capteurs utilisé.
  - `SensorTable.js` Inclus dans le profile. Retourne l'état courant des relevés des capteurs, si il en possède, de l'utilisateur connecté.
  - `Service.js` Inclus dans la page d'accueil. Description des services proposé dans ce projet.
- Dans `pages/`
  - `api/`  Implémente toutes les requêtes sql (via Prisma).
  - `index.js` Page d'accueil
  - `login.js` Page de login
  - `profile.js` Page du profile
  - `signup.js` Page de création de compte
