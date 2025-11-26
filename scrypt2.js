if (sessionStorage.getItem("autorisePage2") !== ("true")) {
    window.location.href = "main.html";
} else {
    sessionStorage.removeItem("autorisePage2");
}


const brain = document.querySelector(".brain");
const doll = document.querySelector(".btndoll");
const dollimg = document.querySelector(".imgdoll");
const container = document.querySelector(".page2 .body2");
const background = document.querySelector(".backgroundimg2");
const dollcounter = document.querySelector(".dollcounter");
let counter = 0;
let numbOfDoll = 1;
let moveInterval = null;
let laughInterval = null;
let ambiance = new Audio('audio/creepy-ring-around-the-rosie-33890.mp3');
let laungh = new Audio('audio/witch-laugh-401713.mp3');
let songInterval = null;


brain.addEventListener("click", () => {
        counter++;
        checklist();
        backAmbiance();
        songInterval = setInterval(backAmbiance, 16000);
        console.log(counter)

        if (counter >= 10 && moveInterval === null) {
        moveInterval = setInterval(spawnItem, 5000);
        laughInterval = setInterval(() => { laungh.cloneNode(true).play(); }, 5000);
        dollimg.style.opacity = "1";
    }
});

function checklist() {
    switch (counter) {
        case 5:
            brain.style.filter = "sepia(0.2) saturate(1.5) hue-rotate(-5deg) brightness(1.03) contrast(1.05)";
            break;
        
        case 10:
            brain.style.filter = "sepia(0.2) saturate(2) hue-rotate(-5deg) brightness(1.03) contrast(1.05)";
            break;

        case 15:
            brain.style.filter = "sepia(0.2) saturate(2.5) hue-rotate(-5deg) brightness(1.03) contrast(1.05)";
            break;

        case 20:
            brain.style.filter = "sepia(0.2) saturate(3) hue-rotate(-5deg) brightness(1.03) contrast(1.05)";
            break;

        case 25:
            brain.style.filter = "sepia(0.2) saturate(3.5) hue-rotate(-5deg) brightness(1.03) contrast(1.05)";
            brain.disabled = true;
            break;

    
        default:
            break;
    }
}


function checklistDoll() {

    const dollclone = document.querySelectorAll('.btndoll.clone');

    switch (numbOfDoll) {
        case 3:     
        doll.style.filter =  "sepia(0.2) saturate(1.5) hue-rotate(-5deg) brightness(1.03) contrast(1.05)";
        dollclone.forEach (btn => {
            btn.style.filter =  "sepia(0.2) saturate(1.5) hue-rotate(-5deg) brightness(1.03) contrast(1.05)";
        });
            break;
            
        case 7:  
        doll.style.filter =  "sepia(0.2) saturate(2) hue-rotate(-5deg) brightness(1.03) contrast(1.05)";
        dollclone.forEach (btn => {
            btn.style.filter =  "sepia(0.2) saturate(2) hue-rotate(-5deg) brightness(1.03) contrast(1.05)";
        });        
            break;

        case 12:   
        doll.style.filter =  "sepia(0.2) saturate(3) hue-rotate(-5deg) brightness(1.03) contrast(1.05)";
        dollclone.forEach (btn => {
            btn.style.filter =  "sepia(0.2) saturate(3) hue-rotate(-5deg) brightness(1.03) contrast(1.05)";
        });       
            break;

        case 15: 
            brain.disabled = true;  
            doll.style.filter =  "sepia(0.2) saturate(4) hue-rotate(-5deg) brightness(1.03) contrast(1.05)";
            dollclone.forEach (btn => {
            btn.style.filter =  "sepia(0.2) saturate(4) hue-rotate(-5deg) brightness(1.03) contrast(1.05)";
        });        
            break;

        case 19:
            changePage();
            break;

    
        default:
            break;
    }
}


function backAmbiance() {
    ambiance.cloneNode(true).play();
}


function spawnItem() {
    
    doll.style.opacity = "0";

    setTimeout(() => {
    const windowsx = window.innerWidth - doll.offsetWidth;
    const windowsy = window.innerHeight - doll.offsetHeight;

    const randomx = Math.random() * windowsx;
    const randomy = Math.random() * windowsy;

    doll.style.left = randomx + "px";
    doll.style.top = randomy + "px";
    doll.style.opacity = "1";
    }, 500);
}

function duplicateDoll(doll) {
    const newDoll = doll.cloneNode(true); // clone
    container.appendChild(newDoll);
    newDoll.classList.add("clone");

    // Donner position absolue pour le clone
    newDoll.style.position = "absolute";

    // Ajouter le même listener pour que le clone se duplique
    newDoll.addEventListener("click", () => {
        duplicateDoll(newDoll);
    });

    // Lancer un spawn aléatoire pour le clone
    spawnItem(newDoll);
}

// Ajouter listener à la doll originale
doll.addEventListener("click", () => {
    duplicateDoll(doll);
    checklistDoll();
    numbOfDoll++
    dollcounter.innerHTML = numbOfDoll + "/20";
    console.log(numbOfDoll);
});

function changePage() {
    // retirer tous les clone
    const dollclone = document.querySelectorAll('.btndoll.clone');
    dollclone.forEach(clone => clone.remove());
    doll.remove();
    brain.remove();
    dollcounter.remove();
    background.style.filter = "none";
    background.style.backgroundImage = "url('src/ya quoi dans ma tête(2).jpg')";
    setTimeout(() => background.style.backgroundImage = "url('src/ya quoi dans ma tête(1).jpg')", 3000);
    sessionStorage.setItem("autorisePage3", "true");
    setTimeout(() => window.location.href = "page3.html", 6000);
}
