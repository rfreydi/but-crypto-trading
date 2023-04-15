# Crypto trading

# Enoncé

Proposez une conception orientée objet modélisant un exchange de cryptomonnaie et implémentez le en Typescript.

l'Exchange transfert des Crypto de deux types: Bitcoin et Ethereum

Bitcoin est caractérisé par :
- nom
- frais de gaz
- numéro de block

Ethereum est caractérisé par :
- nom
- frais de gaz

Règles:
- Pour transférer un Bitcoin, le prix du transfert est dépendant du numéro du block.
  Si le block est impair, les frais seront divisé par deux
- Chaque Crypto doit fournir une méthode permettant d'avoir les "frais" finaux.

L'exchange procède à l'execution des transactions une fois par jour.
On doit avoir 3 méthodes :
- transfer(...) permettant de rajouter un échange d'une crypto avec ses informations
- verify(...) permettant de vérifier la liste des transfer de la journée, trié par ordre alphabétique
- exec(...) permettant d'enregistrer les transactions et de retourner le montant total des frais.

## Question 1
- Faire le diagramme de classes complet (attributs, methodes, visibilités, ...)
- Pensez à limiter la duplication
  _(faire une classe Crypto avec le(s) attribut(s) en commun(s) une méthode "frais" qui pourra être surchargé par exemple)_

## Question 2
Implémentez le code en respectant votre diagramme, le programme doit réagir ainsi

```console
// transfer bitcoin
// transfer ethereum
// transfer ethereum
// transfer bitcoin
// transfer bitcoin
// transfer ethereum

// verify
Liste des transactions en cours:
Bitcoin - 0.4 gaz
Bitcoin -  0.2 gaz
Bitcoin - O.4 gaz
Ethereum - 1.4 gaz
Ethereum - 0.7 gaz
Ethereum - 0.6 gaz

// exec
Enregistrement en cours...
Total des frais: 3.7 gaz
```

Note : Vous pouvez exécuter la commande `npm test` dans votre terminal pour vérifier que votre code tourne par rapport à un jeu de test prédéfini.


## FAQ - Comment créer un repo from scratch

1. créer le dossier et ce placer dedans
2. `npm init` (mettre `jest` lors de la question `test command:`)
3. `npx tsc --init`
4. `npx ts-jest config:init`
5. `npm i -D jest typescript ts-jest @types/jest`
6. `git init`
