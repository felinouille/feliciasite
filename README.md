dans ce projet j'ai laissé place a mon imagination avec un mini site interactif bizzard regroupement plein de fonctionalité que jai apprise grace a elle en java script

pour commencé on a la page une. elle est composé d'une base html/css avec un bouton a cliqué 50 fois. a chaque click une fonction est appeler pour incrementé et le chiffre du centre et un compteur. en plus dans cette fonction il y a un switch case qui regarde
le compteur et qui modifi des paramettre css en fonction de celle ci

en deuxieme page on a un cerveau geant clickable egalment. mais aussi une poupée qui cree un clone de elle meme et la deplace aleatoirement sur la page a chaque click grace a une fonction 
apres un certain nombre de clone la page change

la page 3 possede un personage jouable qui peu se deplacer avec les fleche et aller ramasser des objet avant de senfuire par un portail au centre de la page. a chaque objet ramasé il y a un parchemin qui apparais et qui donne une phrase en fonction de lobjet
durant tous le site il y a egalement des son qui son joué grace a des objet audio qui son apeller

tous ce que jai appris grace a ca :  

1- structurer des page html css, apprendre a les stylisé, placer des element
2- utilisé des evenlister et appeler des fonction quand des click sont effectuer sur des element
3- pour changé mes page jai fais en sorte que se sois pas possible douvrir la page 2,3,4 sans passé par la une.

sessionStorage.setItem("autorisePage2", "true");
setTimeout(() => window.location.href = "page2.html", 2000); 

avec ce code je cree un item "autorise page" mis sur true, une fois arrivé sur la page suivante,

if (sessionStorage.getItem("autorisePage2") !== ("true")) {
    window.location.href = "main.html";
} else {
    sessionStorage.removeItem("autorisePage2");
}
cette condition regarde si vous venez bien de la page precedente. si oui vous continuer sinon vous aller a la page 1

4- dupliquer des element. en locurence la une img doll. avec une fonction de duplucation je cree une variable newdoll
qui recupere la doll original et la clone const newDoll = doll.cloneNode(true);  ensuite je la met en temps que enfant dans
ce qui sers de conteneur de la page container.appendChild(newDoll); puis je lui attribu une class pour pouvoir modifier son css newDoll.classList.add("clone"); pour finir je lui met un addeventlistener pour quand on clique dessu ca cree une nouvelle duplication 
