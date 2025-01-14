// Navigation Bar
const navBtn = document.querySelector('[data-nav-btn]')
const nav = document.querySelector('[data-navbar]')
const header = document.querySelector('[data-header]')

navBtn.addEventListener('click', () => {
  nav.classList.toggle('active')
})

// Set a scroll threshold (in pixels)
const scrollThreshold = 50

// Listen for the scroll event
window.addEventListener('scroll', () => {
  // Check the scroll position
  if (window.scrollY > scrollThreshold) {
    header.classList.add('active')
  } else {
    header.classList.remove('active')
  }
})

/* ------ Tables ------ */
const tableNavBtns = document.querySelectorAll('[data-tbl-nav-btn]')
const tableSlides = document.querySelectorAll('[data-table-container]')
const tableBtns = document.querySelectorAll('[data-table-btn]')
const tables = document.querySelectorAll('[data-table]')

tableNavBtns[0].classList.add('active')
tableSlides[0].classList.add('active')

// table container
tableNavBtns.forEach((btn, btnIndex) => {
  btn.addEventListener('click', (e) => {
    tableNavBtns.forEach((item) => {
      item.classList.remove('active')
    })

    tableSlides.forEach((slide) => {
      if (slide.classList.contains('active')) {
        slide.classList.remove('active')
      }
      if (slide.dataset.tableContainer == btn.dataset.tblNavBtn) {
        slide.classList.add('active')
        slide.querySelector('[data-table]').classList.add('active')

        tableBtns.forEach((item) => {
          item.classList.remove('active')
        })
        slide.querySelector('[data-table-btn]').classList.add('active')
      }
    })

    e.target.classList.add('active')
  })
})

// table
tableBtns.forEach((btn, btnIndex) => {
  btn.addEventListener('click', (e) => {
    tableBtns.forEach((item) => {
      item.classList.remove('active')
    })

    tables.forEach((slide) => {
      if (slide.classList.contains('active')) {
        slide.classList.remove('active')
      }
      if (slide.dataset.table == btn.dataset.tableBtn) {
        slide.classList.add('active')
      }
    })

    e.target.classList.add('active')
  })
})

/* ------ Carousel ------ */
let currentIndex = 0
let visibleSlides = 0

const carousel = document.querySelector('.custom-carousel')

addEventListener('resize', resizer)
resizer()
function resizer() {
  const carouselWidth = carousel.offsetWidth
  if (carouselWidth > 800) {
    visibleSlides = 3
  }
  if (carouselWidth <= 800) {
    visibleSlides = 2
  }
  if (carouselWidth <= 565) {
    visibleSlides = 1
  }
}
function moveSlide(direction) {
  console.log(visibleSlides)

  const slides = document.querySelectorAll('.custom-slide')
  const totalSlides = slides.length

  // Update the currentIndex based on the direction
  currentIndex += direction

  // If we reach the end, loop back to the start
  if (currentIndex < 0) {
    currentIndex = totalSlides - visibleSlides // Keep 3 slides visible
  } else if (currentIndex > totalSlides - visibleSlides) {
    currentIndex = 0
  }

  // Move the carousel by adjusting the translateX property
  carousel.style.transform = `translateX(-${
    (currentIndex * 100) / visibleSlides
  }%)`
}
