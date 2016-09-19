# Installation protractor pour faire fonctionner les tests e2e
- npm install protractor --save-dev
- webdriver-manager update
- modifier le config.js pour que la clé seleniumServerJar pointe vers le jar de selenium (voir le répertoire d'istallation depuis la commande update ci dessus)
- lancer les tests depuis le répertoire e2e : protractor config.js

## Enregistrer des scénarios
Pour partir sur une base il est possible d'enregistrer des scénarios IHM grace à Protractor recorder
https://github.com/ealves/protractor-recorder

Penser à modifier le fichier généré pour utiliser des sélecteurs plus simples
