let startButton = document.getElementById('start-btn')
let menuBtn = document.querySelector('.bi-list')
let menuList = document.querySelector('.menu-list')

startButton.onclick = function() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    })
}

menuBtn.onclick = function() {
    menuList.classList.toggle('show')
}

document.getElementById('login-link').addEventListener('click', function(event) {
    linkHandler(event, '.promo')
})

document.querySelector('.navbar-brand').addEventListener('click', function(event) {
    linkHandler(event, '.main-page')
})

document.getElementById('flea-market-link').addEventListener('click', function(event) {
    linkHandler(event, '.main-page')
})

document.getElementById('services-link').addEventListener('click', function(event) {
    linkHandler(event, '.main-page')
})

function linkHandler(event, className) {
    event.preventDefault()
    document.querySelector(className).scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    })
}

const btnOrder = document.getElementById('btn-order')

btnOrder.onclick = function() {
    const form = document.getElementById('form-order')
    const fio = form.fio.value
    const phone = form.phone.value
    const mail = form.mail.value
    const qualifications = form.qualifications.value
    const userInfo = {
        fio,
        phone,
        mail,
        qualifications
    }
    const userInfoJSON = JSON.stringify(userInfo)
}