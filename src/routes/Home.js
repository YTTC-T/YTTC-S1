import { Component } from '../core'
import TheHeader from '../components/TheHeader'
import MainSlide from '../components/MainSlide'
import ProductsSlide from '../components/ProductsSlide'
import SocialSlide from '../components/SocialSlide'
import TheFooter from '../components/TheFooter'


export default class Home extends Component {
  constructor() {
    super()
    
  }

  render() {
    this.el.classList.add('section')

    const bestseller = document.createElement('div')
    bestseller.classList.add('bestseller')
    bestseller.style.backgroundImage = `url(./sulwhasoo_main_bestseller_pc_230309.jpg)`
    bestseller.innerHTML = /* html */ `
      <div class="text-wrap">
        <p>베스트 셀러</p>
        <span>건강하게 빛나고 힘 있게 채우는 <br> 설화수의 시그니처 케어</span>
        <button>자세히 보기</button>
      </div>
    `

    const season = document.createElement('div')
    season.classList.add('season')
    season.innerHTML = /* html */ `
      <h2>설화수 시즌추천</h2>
      <div class="image-wrap">
        <div class="season-left">
          <div class="img"></div>
          <div class="inner">
            <p>자음생세럼</p>
            <p>Concentrated Ginseng Renewing Serum EX</p>
            <p>220,000원</p>
          </div>
        </div>
        <div class="season-center">
          <div class="inner">
            <p>자음생 듀오</p>
            <p>안티에이징의 결정체, 진세노믹스™ <br> 자음생듀오로 피부 자생력을 키워주세요.</p>
          </div>
        </div>
        <div class="season-right">
        <div class="img"></div>
        <div class="inner">
            <p>자음생크림</p>
            <p>Concentrated Ginseng Renewing Cream EX</p>
            <p>270,000원</p>
          </div>
        </div>
      </div>
    `

    const stores = document.createElement('div')
    stores.classList.add('stores')
    stores.innerHTML = /* html */ `
      <div class="store-left">
        <div class="left-img"></div>
        <div class="inner">
          <p>설화수 북촌 플래그십 스토어</p>
          <button>자세히 보기</button>
        </div>
      </div>
      <div class="store-right">
        <div class="right-img"></div>
        <div class="inner">
          <p>설화수 도산 플래그십 스토어</p>
          <button>자세히 보기</button>
        </div>
      </div>
    `
    
    const topButton = document.createElement('button')
    topButton.classList.add('btn-totop')
    topButton.addEventListener('click',() => {
      window.scrollTo({
        top: 0,
        behavior:'smooth'
      })
    })

    function showTopButton() {
      if(window.scrollY >= 300) {
        topButton.classList.add('show')
      } else {
        topButton.classList.remove('show')
      }
    }
    window.addEventListener('scroll', showTopButton)

    const theHeader = new TheHeader().el
    const mainslide = new MainSlide().el
    const productsslide = new ProductsSlide().el
    const socialslide = new SocialSlide().el
    const footer = new TheFooter().el

    this.el.append(
      theHeader, 
      mainslide, 
      productsslide, 
      bestseller, 
      season, 
      stores, 
      socialslide,
      footer,
      topButton
      )
  }
}
