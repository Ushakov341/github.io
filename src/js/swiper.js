import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
let slider__item = document.querySelectorAll('.slider__item')
let slider__brends = document.querySelector('.slider__brends')
let serv__item = document.querySelectorAll('.serv__item')
let serv__types = document.querySelector('.serv__types')

if (window.innerWidth < 768) {
  slider__item.forEach((item) => item.classList.add('swiper-slide'))
  slider__brends.classList.add('swiper-wrapper')
  serv__types.classList.add('swiper-wrapper')
  serv__item.forEach((el) => el.classList.add('swiper-slide'))

 document
    .querySelectorAll('.table__row')
    .forEach((item) => item.classList.add('swiper-slide'))

  new Swiper('.swiper', {
    loop: true,
    slidesPerView: 'auto',

    modules: [Pagination],

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
} else {
  document.querySelector('.swiper-wrapper').classList.remove('swiper-wrapper')
}
