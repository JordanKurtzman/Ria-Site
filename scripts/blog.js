const navToggle = document.getElementById('navToggle')
const verticalNav = document.getElementById('verticalNav')
const main = document.getElementById('main')
const closeBtn = document.getElementById('closeBtn')
const mediaQuery = '(min-width: 900px)'
const mediaQueryList = window.matchMedia(mediaQuery)


navToggle.addEventListener('click', () => {
    verticalNav.style.width = '25rem'
    main.style.marginLeft = '25rem'
})


closeBtn.addEventListener('click', () => {
    verticalNav.style.width = '0'
    main.style.marginLeft = '0'
})

mediaQueryList.addEventListener('change', (e) => {
    if(e.matches){
        verticalNav.style.width = '25rem'
        main.style.marginLeft = '25rem'
    }else{
        verticalNav.style.width = '0'
        main.style.marginLeft = '0'
    }

})