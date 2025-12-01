const perso = document.querySelector(".perso");
const couteau = document.querySelector(".couteau");
const organe = document.querySelector(".organe");
const astico = document.querySelector(".insecte");
const parchemin = document.querySelector(".petiteImg");
const smallText = document.querySelector(".petitText");

let posX = 0;
let posY = 0;
let item = 0;

const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false
};

document.addEventListener("keydown", (e) => {
  if (keys.hasOwnProperty(e.key)) { 
    keys[e.key] = true; 
}});


document.addEventListener("keyup", (e) => {
  if (keys.hasOwnProperty(e.key)) { 
    keys[e.key] = false; 
}});


function moveImage() {
  if (keys.ArrowUp) { 
    posY -= 2;
    perso.src ="src/perso haut.png";
};
  if (keys.ArrowDown) { 
    posY += 2;
    perso.src ="src/perso bas.png";
};
  if (keys.ArrowLeft) { 
    posX -= 2;
    perso.src ="src/perso gauche.png";
};
  if (keys.ArrowRight) { 
    posX += 2;
    perso.src ="src/perso droite.png";
};

  perso.style.transform = `translate(${posX}px, ${posY}px)`;

  requestAnimationFrame(moveImage);
}

moveImage(); // lance la boucle

const persoXY = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
}

const couteauXY = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
}

const asticoXY = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
}

const organeXY = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
}

function updatePotition(element, store) {
    const rect = element.getBoundingClientRect();
    store.x = rect.left;
    store.y = rect.top;
    store.width = rect.width;
    store.height = rect.height;
    console.log(element);
}

function updateAllPotition() {
  updatePotition(perso, persoXY);
  updatePotition(couteau, couteauXY);
  updatePotition(astico, asticoXY);
  updatePotition(organe, organeXY);

  if (checkCollision(persoXY, couteauXY)) {
    console.log("Collision avec le couteau !");
    couteau.remove();
    smallText.textContent = "Tu veux tuer quelqun ?";
    parchemin.style.opacity = "1";
    smallText.style.opacity = "1";
    setTimeout(() => { parchemin.style.opacity = "0"; }, 2000);
    setTimeout(() => { smallText.style.opacity = "0"; }, 2000);
  }

  if (checkCollision(persoXY, asticoXY)) {
    console.log("Collision avec astico !");
    astico.remove();
    smallText.textContent = "Pourquoi tu mange ca ?";
    parchemin.style.opacity = "1";
    smallText.style.opacity = "1";
    setTimeout(() => { parchemin.style.opacity = "0"; }, 2000);
    setTimeout(() => { smallText.style.opacity = "0"; }, 2000);
  }

  if (checkCollision(persoXY, organeXY)) {
    console.log("Collision avec organe !");
    organe.remove();
    smallText.textContent = "Pourquoi tu ramasse ca ?";
    parchemin.style.opacity = "1";
    smallText.style.opacity = "1";
    setTimeout(() => { parchemin.style.opacity = "0"; }, 2000);
    setTimeout(() => { smallText.style.opacity = "0"; }, 2000);
  }

  requestAnimationFrame(updateAllPotition);
}

 updateAllPotition();


function checkCollision(main, element) {
  if (
    main.x < element.x + element.width &&
    main.x + main.width > element.x &&
    main.y < element.y + element.height &&
    main.y + main.height > element.y
  ) {
    // Collision détectée
    return true;
  } else {
    // Pas de collision
    return false;
  }
}


