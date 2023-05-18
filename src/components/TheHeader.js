import { Component } from '../core'

export default class Home extends Component {
  constructor() {
    super({
      tagName: 'header'
    })
  }
  
  render() {
    this.el.innerHTML = /* html */ `
      <div class="header-inner">
        <div class="select-language">
          <a href="#" class="select-language-a">
            한국/한국어
          </a>
          <button class="btn-language"></button>
        </div>
        <div class="logo"></div>
        <div class="top-search">
          <span>매장찾기</span>
          <span>구매하기</span>
          <button class="btn-search"></button>
        </div>
      </div>
      <div class="gnb">
        <ul class="gnb-menu">
          <li class="nav-d1">
            <a href="#">브랜드 빌리프</a>
            <ul class="gnb-sub m1">
              <li class="nav-d2">
                <a href="#">브랜드 빌리프</a>
              </li>
              <li class="nav-d2">
                <a href="#">브랜드 캠페인</a>
              </li>
              <li class="nav-d2">
                <a href="#">브랜드 엠배서더</a>
              </li>
            </ul>
          </li>
          <li class="nav-d1">
            <a href="#">베스트셀러</a>
          </li>
          <li class="nav-d1">
            <a href="#">제품</a>
            <ul class="gnb-sub m2"> 
              <li class="nav-d2">
                <a href="#">스킨케어</a>
              </li>
              <li class="nav-d2">
                <a href="#">메이크업</a>
              </li>
              <li class="nav-d2">
                <a href="#">남성</a>
              </li>
              <li class="nav-d2">
                <a href="#">진설</a>
              </li>
            </ul>
          </li>
          <li class="nav-d1">
            <a href="#">설화수 포스트</a>
            <ul class="gnb-sub m3">
              <li class="nav-d2">
                <a href="#">설화수 포스트</a>
              </li>
              <li class="nav-d2">
                <a href="#">명작컬렉션</a>
              </li>
              <li class="nav-d2">
                <a href="#">설화수 스타일</a>
              </li>
              <li class="nav-d2">
                <a href="#">설화문화전</a>
              </li>
              <li class="nav-d2">
                <a href="#">설화매거진</a>
              </li>
            </ul>
          </li>
          <li class="nav-d1">
            <a href="#">스파</a>
            <ul class="gnb-sub m4">
              <li class="nav-d2">
                <a href="#">소개</a>
              </li>
              <li class="nav-d2">
                <a href="#">스파 프로그램</a>
              </li>
              <li class="nav-d2">
                <a href="#">예약</a>
              </li>
              <li class="nav-d2">
                <a href="#">매장 찾기</a>
              </li>
            </ul>
          </li>
          <li class="nav-d1">
            <a href="#">플래그십 스토어</a>
            <ul class="gnb-sub m5">
              <li class="nav-d2">
                <a href="#">설화수 북촌</a>
              </li>
              <li class="nav-d2">
                <a href="#">설화수 도산</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    `
  }
}
