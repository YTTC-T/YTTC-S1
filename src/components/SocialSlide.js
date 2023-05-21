import { Component } from '../core'
import { register } from 'swiper/element/bundle'
import Store from '../store/store'

export default class SocialSlide extends Component {
  constructor() {
      super();
      
      const swiperEl = this.el.querySelector('swiper-container')
      const buttonNext = this.el.querySelector('.btn-next')
      const buttonPrev = this.el.querySelector('.btn-prev')


      buttonNext.addEventListener('click', () => {
        swiperEl.swiper.slideNext();
      })
      buttonPrev.addEventListener('click', () => {
        swiperEl.swiper.slidePrev();
      })

      
    }
  render() {

    this.el.classList.add('social-slide');

    this.el.innerHTML = /* html */`
    <h2>#With Sulwhasoo</h2>
    <div class="swiper-wrap">
      <swiper-container class="social-swiper" space-between="15" slides-per-view="4.5" slides-per-group="4.5">
      </swiper-container>
      <button class="btn-prev"></button>
      <button class="btn-next"></button>
    </div>
    `
    const swiperEl = this.el.querySelector('swiper-container')

    Store.state.items.map(item => {
      const slide = document.createElement('swiper-slide')
      slide.innerHTML = /* html */ `
        <div class="img" style="background-image:url('./with_${item.src}')"></div>
        <div class="icon-wrap">
          <div class="icon"></div>
        </div>
        <div class="hover-box">
          <svg viewBox="0 -5 240 51" preserveAspectRatio="none" aria-hidden="true" focusable="false" fill="#fff">
              <path d="M120,0c82.1,0,100.6,39.2,120,39.2c0,0.7,0,3.6,0,6.7c-23.6,0-194.8,0-240,0c0-2.7,0-4.1,0-6.7C14,39.2,37.9,0,120,0z"></path>
          </svg>
          <div class="info-wrap">
            <p>${item.id}</p>
            <span>${item.des}</span>
          </div>
        </div>
        
      `
      swiperEl.append(slide)
      
      
    })
    
    register()

    
    
  }
}
