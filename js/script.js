function abrir_login() {
    const main_login = document.querySelector("main.login")
    const btn_login = document.querySelector("div.login")
    const x = document.querySelector(".login span.x")

    main_login.style.display = "none"

    btn_login.addEventListener("click", () => {
        if ( main_login.style.display == "none") {
            main_login.style.display = "flex"
        } else {
            main_login.style.display = "none"
        }
    })
    x.addEventListener("click", () => {
        if ( main_login.style.display == "flex") {
            main_login.style.display = "none"
        } else {
            main_login.style.display = "flex"
        }
    })
}
abrir_login()

function abrir_cadastro() {
    const main_cadastro = document.querySelector("main.cadastro")
    const btn_cadastro = document.querySelector("div.signup")
    const x = document.querySelector(".cadastro span.x")

    main_cadastro.style.display = "none"

    btn_cadastro.addEventListener("click", () => {
        if ( main_cadastro.style.display == "none") {
            main_cadastro.style.display = "flex"
        } else {
            main_cadastro.style.display = "none"
        }
    })
    x.addEventListener("click", () => {
        if ( main_cadastro.style.display == "flex") {
            main_cadastro.style.display = "none"
        } else {
            main_cadastro.style.display = "flex"
        }
    })
}
abrir_cadastro()