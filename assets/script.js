const slides = [
  {
    image: 'vin-1.jpg',
  },
  {
    image: 'vin-2.jpg',
  },
  {
    image: 'vin-3.jpg',
  },
]
// function that load the carrousel
document.body.onload = function () {
  let current = 0
  let totalSlides = slides.length
  let dotDiv = document.querySelector('.dots')

  //loop that creat the point in function of the number of image
  for (let i = 0; i < totalSlides; i++) {
    let newDot = document.createElement('div')
    dotDiv.appendChild(newDot)
    newDot.classList.add('dot')
    if (current === i) {
      newDot.classList.add('dot_selected')
    }
  }

  // function that change image, text and current dot
  function changeImage() {
    let image = document.querySelector('.banner-img')
    image.setAttribute(
      'src',
      './assets/images/carrousel/' + slides[current].image
    )

    let dotSelected = document.querySelector('.dot_selected')
    dotSelected.classList.remove('dot_selected')

    let onDotChange = document.querySelector(
      '.dots :nth-child(' + (current + 1) + ')'
    )
    onDotChange.classList.add('dot_selected')
  }

  //function that change current image to the left when she's call
  function leftArrowClick() {
    current -= 1
    if (current < 0) {
      current = totalSlides - 1
    }
    changeImage()
  }

  setInterval(leftArrowClick, 3000)
}
