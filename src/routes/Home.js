import { Component } from '../core'
import TheHeader from '../components/TheHeader'
import MainSlide from '../components/MainSlide'
import ProductsSlide from '../components/ProductsSlide'
import SocialSlide from '../components/SocialSlide'
import TheFooter from '../components/TheFooter'


export default class Home extends Component {
  render() {
    this.el.classList.add('section')

    this.el.innerHTML = /*HTML*/ `
    `


    const bestseller = document.createElement('div')
    bestseller.classList.add('bestseller')

    const season = document.createElement('div')
    season.classList.add('season')

    const stores = document.createElement('div')
    stores.classList.add('stores')

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
      footer
      )
  }
}
