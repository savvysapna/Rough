const screensize = window.matchMedia("(min-width: 767px)");
const hamburgerMenu = () => {
    if (document.getElementById("hamburger-body").classList.toggle("hamburger")) {
        if (screensize.matches) {
            document.getElementById("menubar-body").style.width = "20%";
        } else {
            document.getElementById("menubar-body").style.width = "80%";
        }
    }
    else {
        document.getElementById("menubar-body").style.width = "0%";
    }
}
