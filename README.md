# 그룹 스터디 1회차 / 설화수 클론코딩

### :calendar:진행 기간

```
2023년 5월4일 ~ 5월21일 
```

### :question:주제

```
설화수 홈페이지 클론코딩

https://www.sulwhasoo.com/kr/ko/index.html

```

### 결과물 

[배포한 사이트링크](https://melodic-meringue-5e3aee.netlify.app/#/)

<br>

### 스크린샷 & 구현한 부분

1.header  
![image](https://github.com/7581058/clone-sulwhasoo/blob/main/screenshots/header.png?raw=true)
헤더위에 마우스를 hover 할 때 헤더의 전체적인 색상과 글자색, 로고 이미지가 바뀌도록 scss로만 구현 

2.메인 슬라이드   
![image](https://github.com/7581058/clone-sulwhasoo/blob/main/screenshots/mainslide.png?raw=true)  
swiper.js 라이브러리를 활용해 메인 페이지의 큰 슬라이드를 구현   
슬라이드가 변경될때마다 (다음슬라이드로 바뀔 때) 스크롤바가 증가하도록 js로 구현,    
각 슬라이드의 텍스트 애니메이션 구현   
스크롤바의 stop 버튼 클릭 시 버튼 모양이 바뀌고, 자동 재생되던 슬라이드가 중지되도록 구현 


3.추천 슬라이드   
![image](https://github.com/7581058/clone-sulwhasoo/blob/main/screenshots/recomandslide.png?raw=true)
swiper.js 라이브러리를 활용해 추천 슬라이드를 구현   
슬라이드가 변경될때마다 (다음슬라이드로 바뀔 때) 스크롤바가 증가하도록 js로 구현,  
스크롤바의 stop 버튼 클릭 시 버튼 모양이 바뀌고, 자동 재생되던 슬라이드가 중지되도록 구현   
슬라이드를 넘길 때 3개씩 그룹으로 넘어가도록 구현 


4.그 외 레이아웃   
![image](https://github.com/7581058/clone-sulwhasoo/blob/main/screenshots/layout.png?raw=true)  


5.With 슬라이드   
![image](https://github.com/7581058/clone-sulwhasoo/blob/main/screenshots/social_footer.png?raw=true)  
swiper.js 라이브러리를 활용해 슬라이드를 구현  
각각의 슬라이드 아이템을 hover 시 각 사진에 관한 정보가 적힌 도형이 올라오도록 구현  
슬라이드에 보일 사진의 갯수를 4.5 개로 지정, 넘어가는 슬라이드 개수 또한 4.5 개가 될 수 있도록 그룹으로 지정  

6.footer  
![image](https://github.com/7581058/clone-sulwhasoo/blob/main/screenshots/social_footer.png?raw=true)

7.scroll to top 
![image](https://github.com/7581058/clone-sulwhasoo/blob/main/screenshots/social_footer.png?raw=true)


### 배운점 
3가지의 다양한 슬라이드 구현을 통해 swiper.js 라이브러리를 다양하게 활용하는 방법을 배움  
scss로 hover, after, before 를 활용하는 방법을 익힐 수 있었음 


### 아쉬운점
1.header의 하위 메뉴 hover 시 애니메이션이 적용이 안되는 문제를 해결하지 못함  
2.White Sulwhasoo 슬라이드의 슬라이드 왼쪽 버튼을 슬라이드를 넘겼을 때만 나타나도록 첫 번째 슬라이드에 active클래스가 없을 때를 구분해 구현하고 싶었는데 클래스 이름을 추출하는데 실패해 구현할 수 없었음  
3.슬라이드를 라이브러리가 아닌 js로 직접 구현하고 싶었으나 구현 해보지 못함   
~~4.시간 부족으로 메인 슬라이드의 텍스트 애니메이션을 적용하지 못함~~ => 05.23 애니메이션 추가      
5.디테일한 기능 구현을 시간부족으로 일단 배제함(언어 선택, 검색 클릭 추가예정)

### 수정해야할 항목 
1.헤더 하위 메뉴 트랜지션 수정   
2.whit sulwhasoo 슬라이드 버튼    
~~3.메인 슬라이드 텍스트 애니메이션 적용~~ => 05.23 애니메이션 추가 
4.헤더 언어 변경 메뉴, 검색버튼 클릭 기능 추가하기  
~~5.맨 위로 가기 버튼 추가~~ => 05.23 추가    
