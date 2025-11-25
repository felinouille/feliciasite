const btn = document.querySelector(".clickme");
const counter = document.querySelector(".counter");
const click = document.querySelector(".click");
const backGround1 = document.querySelector(".backgroundimg");

let count = 0;
counter.textContent = count;

let clickSound = new Audio('audio/digital-click-357350.mp3');
let ambiance = new Audio('audio/eerie-deep-ambience-62286.mp3');



btn.addEventListener("click", () => {
        const star = document.createElement("span");
        star.textContent = "🌟";
        star.className = "star";
        star.style.left = "50%";
        star.style.top = "50%";
        btn.appendChild(star);
        clickSound.play();

        setTimeout(() => star.remove(), 600);

        count++;
        counter.textContent = count;
        checkCount();

        btn.disabled = true;
        if (count <=49) {
        setTimeout(() => btn.disabled = false, 150);
        }

        if (count >= 50) {
                btn.disabled = true
                setTimeout(() => changePage(), 1000);
        }

        

});

function checkCount() {
        
        switch (count) {
        case 10:
                backGround1.style.opacity = "0.4";
                btn.style.background = "linear-gradient(135deg, #8554aaff, #5a2d80ff, #3e1661ff)";
                counter.style.background = "linear-gradient(135deg, #8554aaff, #5a2d80ff, #3e1661ff)";
                click.style.background = "linear-gradient(135deg, #8554aaff, #5a2d80ff, #3e1661ff)";
                ambiance.play();
                break;

        case 20:
                backGround1.style.opacity = "0.6";
                btn.style.background = "linear-gradient(135deg, #803f4aff, #521d2aff, #3a0d27ff)";
                counter.style.background = "linear-gradient(135deg, #803f4aff, #521d2aff, #3a0d27ff)";
                click.style.background = "linear-gradient(135deg, #803f4aff, #521d2aff, #3a0d27ff)";
                break;

        case 30:
                backGround1.style.opacity = "0.8";
                btn.style.background = "linear-gradient(135deg, #5c202aff, #290911ff, #0a0106ff)";  
                counter.style.background = "linear-gradient(135deg, #5c202aff, #290911ff, #0a0106ff)";
                click.style.background = "linear-gradient(135deg, #5c202aff, #290911ff, #0a0106ff)";     
                break;

        case 40:
                backGround1.style.opacity = "1";
                btn.style.background = "linear-gradient(135deg, #000000ff, #000000ff, #000000ff)";
                counter.style.background = "linear-gradient(135deg, #000000ff, #290911ff, #000000ff)";
                click.style.background = "linear-gradient(135deg, #000000ff, #000000ff, #000000ff)";
                break;

        case 41:
                backGround1.style.filter = "sepia(1) saturate(5)";
                break;

        case 42:
                backGround1.style.filter = "sepia(1) saturate(10)";
                break;

        case 43:
                backGround1.style.filter = "sepia(1) saturate(15)";
                break;

        case 44:
                backGround1.style.filter = "sepia(1) saturate(20)";
                break;

        case 45:
                backGround1.style.filter = "sepia(1) saturate(30)";
                break;

        case 46:
                backGround1.style.filter = "sepia(1) saturate(50) hue-rotate(-30deg)";
                break;

        case 47:
                backGround1.style.filter = "sepia(1) saturate(60) hue-rotate(-30deg)";
                break;

        case 48:
                backGround1.style.filter = "sepia(1) saturate(70) hue-rotate(-30deg)";
                break;

        case 49:
                backGround1.style.filter = "sepia(1) saturate(100) hue-rotate(-30deg)";
                break;

        default:
                break;
}}       


function changePage() {
        const backGround1 = document.querySelector(".backgroundimg")

        backGround1.style.opacity = "0";
        btn.style.opacity = "0";
        counter.style.opacity = "0";
        click.style.opacity = "0";
        ambiance.pause();

        sessionStorage.setItem("autorisePage2", "true");
        setTimeout(() => window.location.href = "page2.html", 2000);

}




                                                                        

