import { Component } from '../core'

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: 'footer'
    })
  }
  render() {
    this.el.innerHTML = /*html*/ `
    <div class="footer-wrap">
      <div class="footer-links">
        <a href="#" class="link">회사소개</a>
        <a href="#" class="link">서비스이용약관</a>
        <a href="#" class="link">UGC이용약관</a>
        <a href="#" class="link">개인정보처리방침</a>
        <a href="#" class="link">영상정보처리방침</a>
        <a href="#" class="link">사이트맵</a>
        <a href="#" class="link">로그인</a>
        <div class="footer-sns">
          <div class="mark"></div>
          <a href="#" class="facebook"></a>
          <a href="#" class="instagram"></a>
          <a href="#" class="youtube"></a>
          <a href="#" class="kakao"></a>
        </div>
      </div>
      <div class="footer-cs">
        <span>고객서비스센터(수신자요금부담) : 080-023-5454</span>
        <span>(월~금: AM 09:00~PM 06:00)</span>
      </div>
      <div class="footer-corp">
        <span>© AMOREPACIFIC CORPORATION. All rights reserved.</span>
      </div>
    </div>
      
      
    `
  }
}
