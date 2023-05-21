import { Component } from '../core'
import { register } from 'swiper/element/bundle'
import Store from '../store/store'

export default class MainSlide extends Component {
  render() {
    this.el.classList.add('main-slide')
    this.el.innerHTML = /* html */ `
      <div class="swiper-wrap"> 
        <swiper-container class="products-swiper" autoplay="true" loop="true" effect="fade">
        </swiper-container>
        <button class="btn-prev"></button>
        <button class="btn-next"></button>
        <div class="scrollbar">
          <div class="scrollbar-track">
            <div class="scrollbar-thumb"></div>
          </div>
          <button class="btn-scrollpause"></button>
        </div>
      </div>
      
    `

    const swiperEl = this.el.querySelector('swiper-container')

    Store.state.mains.map(main => {
      const slide = document.createElement('swiper-slide')
      slide.innerHTML = /* html */ `
        <div class="img" style="background-image:url('./${main.src}')"></div>
        <div class="info-wrap main-${main.index}">
          <span>${main.des}</span>
          <p>${main.text}</p>
        </div>
      `
    swiperEl.append(slide)
    })

    register()

    const buttonNext = this.el.querySelector('.btn-next')
    const buttonPrev = this.el.querySelector('.btn-prev')
    const thumb = this.el.querySelector('.scrollbar-thumb')

    let size = 0.25

    swiperEl.addEventListener('slidechangetransitionend', () => {
      size += 0.25
      if(size === 1.25) {
        size = 0.25
      }   
      thumb.style.transform = `scaleX(${size})`
      
    })

    buttonNext.addEventListener('click', () => {
      swiperEl.swiper.slideNext()
      
    })
    buttonPrev.addEventListener('click', () => {
      swiperEl.swiper.slidePrev()
    })

    const buttonPause = this.el.querySelector('.btn-scrollpause')
    let pause = false 
    buttonPause.addEventListener('click', () => {
      pause = !pause
      if(pause) {
        buttonPause.style.backgroundImage = 'url("./play_white.png")'
        swiperEl.swiper.autoplay.stop()
      } else {
        buttonPause.style.backgroundImage = 'url("./stop_white.png")'
        swiperEl.swiper.autoplay.start()
      }
    })
  }
}
