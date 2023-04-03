document.querySelector(".navigation-bar__hamburger").addEventListener("click", Hamburger)
function Hamburger() {
    document.querySelector(".navigation-bar__menu").classList.toggle("navigation-bar__menu_disabled")
    document.querySelector(".navigation-bar__hamburger").classList.toggle("hamburger_active")
    document.querySelector(".separated-menu").classList.toggle("separated-menu_active")
    document.querySelector(".navigation-bar").classList.toggle("navigation-bar_hidden")
    if (document.querySelector(".separated-menu").style.transitionDelay == "0ms") {
        setTimeout(() => {
            document.querySelector(".separated-menu").style.transitionDelay = "500ms"
            document.querySelector(".navigation-bar").style.transitionDelay = null
        }, 500)
    }
    else {
        setTimeout(() => {
            document.querySelector(".separated-menu").style.transitionDelay = "0ms"
            document.querySelector(".navigation-bar").style.transitionDelay = "500ms"
        }, 500)
    }
}

document.querySelector(".button-up").addEventListener("click", () => {
    document.documentElement.scrollTo({ left: 0, top: 0, behavior: "smooth" })
})

universalObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        }
        else {
            entry.target.classList.remove("show")
        }
    })
}, { root: null, rootMargin: "0px", threshold: 0.5 })

for (elem of document.querySelectorAll(".observation")) {
    universalObserver.observe(elem)
}

document.querySelector("#tomain").addEventListener("click", () => {
    document.documentElement.scrollTo({ left: 0, top: 0, behavior: "smooth" })
})
document.querySelector("#toentertainments").addEventListener("click", () => {
    topPosition = document.querySelector(".title-entertainments").offsetTop - 100
    document.documentElement.scrollTo({ left: 0, top: topPosition, behavior: "smooth" })
})
document.querySelector("#toorder").addEventListener("click", () => {
    topPosition = document.querySelector(".order-box__form__title").offsetTop
    document.documentElement.scrollTo({ left: 0, top: topPosition, behavior: "smooth" })
})

document.querySelector("#tomainsep").addEventListener("click", () => {
    Hamburger()
    document.documentElement.scrollTo({ left: 0, top: 0, behavior: "smooth" })
})
document.querySelector("#toentertainmentssep").addEventListener("click", () => {
    Hamburger()
    topPosition = document.querySelector(".title-entertainments").offsetTop - 100
    document.documentElement.scrollTo({ left: 0, top: topPosition, behavior: "smooth" })
})
document.querySelector("#toordersep").addEventListener("click", () => {
    Hamburger()
    topPosition = document.querySelector(".order-box__form__title").offsetTop
    document.documentElement.scrollTo({ left: 0, top: topPosition, behavior: "smooth" })
})

document.querySelector("#submit").addEventListener("click", () => {
    inputedName = document.getElementsByName("firstname")[0].value
    inputedEmail = document.getElementsByName("email")[0].value
    inputedPhone = document.getElementsByName("phone")[0].value
    inputedType = document.getElementById("selector")
    inputedTypeText = inputedType.options[inputedType.selectedIndex].text

    localStorage.setItem('name', inputedName);
    localStorage.setItem('email', inputedEmail);
    localStorage.setItem('phone', inputedPhone);
    localStorage.setItem('entertainment', inputedTypeText);

    // alert(`Ваше имя - ${inputedName}\nВаш имэйл - ${inputedEmail}\nВаш номер телефона - ${inputedPhone}\nВы выбрали - ${inputedTypeText}`)
})