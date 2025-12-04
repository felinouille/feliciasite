if (sessionStorage.getItem("autorisePage4") !== ("true")) {
    window.location.href = "main.html";
} else {
    sessionStorage.removeItem("autorisePage4");
}