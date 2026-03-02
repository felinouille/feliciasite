Dans ce projet, j’ai laissé place à mon imagination avec un mini site interactif bizarre regroupant plein de fonctionnalités que j’ai apprises grâce à lui en JavaScript.

Pour commencer, on a la page une. Elle est composée d’une base HTML/CSS avec un bouton à cliquer 50 fois. À chaque clic, une fonction est appelée pour incrémenter le chiffre au centre, qui est un compteur. En plus, dans cette fonction, il y a un switch case qui regarde le compteur et qui modifie des paramètres CSS en fonction de celui-ci.

En deuxième page, on a un cerveau géant cliquable également, mais aussi une poupée qui crée un clone d’elle-même et le déplace aléatoirement sur la page à chaque clic grâce à une fonction. Après un certain nombre de clones, la page change.

La page 3 possède un personnage jouable qui peut se déplacer avec les flèches et aller ramasser des objets avant de s’enfuir par un portail au centre de la page. À chaque objet ramassé, il y a un parchemin qui apparaît et qui donne une phrase en fonction de l’objet.

Durant tout le site, il y a également des sons qui sont joués grâce à des objets audio qui sont appelés.

Tout ce que j’ai appris grâce à ça :

1- Structurer des pages HTML/CSS, apprendre à les styliser, placer des éléments.
2- Utiliser des event listeners et appeler des fonctions quand des clics sont effectués sur des éléments.
3- Pour changer mes pages, j’ai fait en sorte qu’il ne soit pas possible d’ouvrir les pages 2, 3 ou 4 sans passer par la une.

Avec ce code, je crée un item "autorisePage2" mis sur true. Une fois arrivé sur la page suivante, cette condition regarde si vous venez bien de la page précédente. Si oui, vous continuez, sinon vous allez à la page 1.

4- Dupliquer des éléments, en l’occurrence une image doll. Avec une fonction de duplication, je crée une variable newDoll qui récupère la doll originale et la clone. Ensuite, je la mets en tant qu’enfant dans le conteneur de la page, puis je lui attribue une classe pour pouvoir modifier son CSS. Pour finir, je lui mets un addEventListener pour que, quand on clique dessus, cela crée une nouvelle duplication.
