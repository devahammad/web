var isNavOpen = false;

function openNav() {
    var navElement = document.getElementById("myNav");
    var overlayContent = document.querySelectorAll('.overlay-content');
    var openBtns = document.querySelectorAll('.openbtn');
    if (!isNavOpen) {
        navElement.style.height = "100%";
        isNavOpen = true;
        for (var i = 0; i < overlayContent.length; i++) {
            overlayContent[i].style.opacity = "1";
            overlayContent[i].style.paddingBottom = "0";
        }
        for (var i = 0; i < openBtns.length; i++) {
            openBtns[i].style.opacity = "0";
        }
    }
}

function closeNav() {
    var navElement = document.getElementById("myNav");
    var overlayContent = document.querySelectorAll('.overlay-content');
    var openBtns = document.querySelectorAll('.openbtn');
    if (isNavOpen) {
        navElement.style.height = "0%";
        isNavOpen = false;
        for (var i = 0; i < overlayContent.length; i++) {
            overlayContent[i].style.opacity = "0";
            overlayContent[i].style.paddingBottom = "5em";
        }
        for (var i = 0; i < openBtns.length; i++) {
            openBtns[i].style.opacity = "1";
        }
    }
}
