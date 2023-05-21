import { Component } from '../core'
import { register } from 'swiper/element/bundle'
import Store from '../store/store'


export default class ProductsSlide extends Component {
  constructor() {
    super()
    
    // const swiperEl = this.el.querySelector('swiper-container')
    // const buttonNext = this.el.querySelector('.btn-next')
    // const buttonPrev = this.el.querySelector('.btn-prev')
    // const thumb = swiperEl.querySelector('.scrollbar-thumb')

    // buttonNext.addEventListener('click', () => {
    //   swiperEl.swiper.slideNext();
    //   thumb.style.transform = 'scaleX(1)'
    // })
    // buttonPrev.addEventListener('click', () => {
    //   swiperEl.swiper.slidePrev();
    // })
  }

  render() {
    this.el.classList.add('products-slide');

    this.el.innerHTML = /* html */ `
      <h2>설화수 추천</h2>
      <div class="swiper-wrap">
        <swiper-container class="products-swiper" loop="true" space-between="15" slides-per-view="3" slides-per-group="3" allow-touch-move="true">
        </swiper-container>
        <button class="btn-prev"></button>
        <button class="btn-next"></button>
      </div>
      <div class="scrollbar">
        <div class="scrollbar-track">
          <div class="scrollbar-thumb"></div>
        </div>
        <button class="btn-scrollpuase"></button>
      </div>
    `

    const swiperEl = this.el.querySelector('swiper-container')

    Store.state.products.map(product => {
      const slide = document.createElement('swiper-slide')
      slide.innerHTML = /* html */ `
        <div class="img" style="background-image:url('./${product.src}')"></div>
        <div class="info-wrap">
          <h3>${product.name}</h3>
          <span>${product.des}</span>
          <p>${product.price}</p>
        </div>
        
      `
    swiperEl.append(slide)
    })

    register(); 

    const buttonNext = this.el.querySelector('.btn-next')
    const buttonPrev = this.el.querySelector('.btn-prev')
    const thumb = this.el.querySelector('.scrollbar-thumb')

    let size = '.5' 

    swiperEl.addEventListener('slidechangetransitionend', () => {
      if(size === '.5') {
        size = '1'
      } else {
        size = '.5'
      }    
      thumb.style.transform = `scaleX(${size})`
    })

    buttonNext.addEventListener('click', () => {
      swiperEl.swiper.slideNext()
      
    })
    buttonPrev.addEventListener('click', () => {
      swiperEl.swiper.slidePrev()
    })
  }
}
