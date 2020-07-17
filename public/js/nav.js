const toggleNav = document.querySelector(".toggle-menu")
const primaryNav = document.querySelector(".primary-nav")
let toggleFlag = false
toggleNav.addEventListener("click", function (e) {
    if (!toggleFlag) {
        primaryNav.style.transform = "translateX(0)"

    } else {
        primaryNav.style.transform = "translateX(-100%)"
    }

    toggleFlag = !toggleFlag

})