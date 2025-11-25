if (sessionStorage.getItem("autorisePage3") !== ("true")) {
    window.location.href = "main.html";
} else {
    sessionStorage.removeItem("autorisePage3");
}