// QuerySelectors or DOM variables
const hamburgerMenu = document.querySelector(".hamburger");
const mobileNavbar = document.querySelector("#mobile-navbar");
const desktopNav = document.querySelector("#desktopNav");
const mobileNavOverlay = document.getElementById("mobile-nav-overlay");

// console.log(mobileNavOverlay)

// Window scroll event for navbar
window.onscroll = () => {
    if (window.scrollY >= 10) {
        // Change backround color to white
        desktopNav.classList.remove("bg-transparent");
        desktopNav.classList.add("bg-white");
        
    } else {
        // Change backround color to transparent
        desktopNav.classList.remove("bg-white");
        desktopNav.classList.add("bg-transparent");
    }
}


const toggleNavbar = (e) => {
    if (hamburgerMenu.classList.contains("active")) {
        hamburgerMenu.classList.remove("active");
        mobileNavbar.classList.add("max-h-0");
        mobileNavbar.classList.remove("max-h-[1000px]");

        // mobileNavOverlay.classList.add("invisible");
        // mobileNavOverlay.classList.remove("visible");
        
        // document.body.style.overflowY = "auto";

        

        
        
    } else {
        hamburgerMenu.classList.add("active");
        mobileNavbar.classList.remove("max-ssssssh-0");
        mobileNavbar.classList.add("max-h-[1000px]");

        // mobileNavOverlay.classList.add("visible");
        // mobileNavOverlay.classList.remove("invisible");
        // document.body.style.overflowY = "hidden";

        
    }
}


mobileNavOverlay.onclick = () => {
    hamburgerMenu.classList.remove("active");
    mobileNavbar.classList.add("max-h-0");
    mobileNavbar.classList.remove("max-h-[1000px]");

    mobileNavOverlay.classList.remove("visible");
    mobileNavOverlay.classList.add("invisible");

    document.body.style.overflowY = "auto";
}


