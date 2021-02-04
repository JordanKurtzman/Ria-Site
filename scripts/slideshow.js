//slideshow
let images = []
const time = 3000
let i = 0

//image list
images[0] = '/images/donotpanic.jpeg'
images[1] = '/images/RiaImage2.jpg'
images[2] = '/images/RiaImage3.jpg'
images[3] = '/images/benjamin_phillips_oedipus_salon.jpg'


const changeImg = () => {
    document.slide.src = images[i]
    if (i < images.length - 1) {
        i++
    } else {
        i = 0
    }
    setTimeout('changeImg()', time)
}

window.onload = changeImg()