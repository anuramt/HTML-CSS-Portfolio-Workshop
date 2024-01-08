function toggleHamburger() {
    var navTop = document.getElementById("nav-top");
    var navBottom = document.getElementById("nav-bottom");

    if (navBottom.style.display == "block") {
        navBottom.style.display = "none";
        navTop.style.paddingBottom = "0";
        navTop.style.borderBottom = "0";
    }
    else {
        navBottom.style.display = "block";
        navTop.style.paddingBottom = "0.4rem";
        navTop.style.borderBottom = "1px solid";
    }
}