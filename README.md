#### 민없민 팀을 소개합니다

> '민없민 팀이란?'
>
> ```
> 민석이란 친구를 중심으로 팀을 짜게 되었는데,
> 취업으로 인해 싸피를 떠나게 되어 같이할 수 없게 되었습니다.
> 그래서 '민석 없는 민석팀'이라는 의미를 담고 있습니다.
> 
> 또한, 민족 없이는 의미(mean)가 없다는 뜻을 같이 내포하고 있습니다.
> 고객 없이는 아무 의미가 없다는 뜻으로 
> ```

1. 팀원 :grin: 

   ![image-20200921121329085](README.assets/image-20200921121329085.png)

2. 서비스 소개 :computer: (배포: http://j3b103.p.ssafy.io/)

   - 서비스명: 마마고 :baby_chick: 

   - 개요(목표)

     - 간단하게 번역을 이용해보세요!

     - 줄 단위 번역으로 자신이 자신있는 파트를 번역하시고 '알'을 받아 가세요! :egg: 

       `알` 이란? 마마고 서비스에서 통용되는 화폐단위입니다.

     - 해외여행 중 긴급하게 통역을 해야할 일이 필요하다면 마마고를 사용해보세요!

     - 번역 혹은 통역가의 등급을 높여 많은 알을 받아가세요!

3. 개발 언어 :page_with_curl:  및 Setting 

   > **1. 이미 로컬에 환경구축되어있다면 설치 x**
   >
   > **2. Front, Back 다 npm를 사용하므로 Pull 받고 npm 설치해주기**

   **frontend**

   - vue.js
   - SCSS
   - TypeScript

   ```bash
   npm i typescript vuex router sass-loader node-sass
   vue add vue-router vuex @vue/typescript
   ```

   **backend**

   - express

   - mongoDB

   ```bash
   npm init
   npm i --save express typescript ts-node cors body-parser
   npm i mongodb
   npm i mongoose
   
   npm i @types/node @types/express nodemon
   npm i @types/mongodb
   npm i @types/mongoose
   ```

   

   **+**

   - Docker
   - TypeScript
   - solidity
   - geth
   - web3.js
   - socketio - webrtc
   
   
   
   ### 기술스택
   
   ![image-20200924223815122](README.assets/image-20200924223815122.png)
   
4. git 충돌해결

   ```bash
   1. 내가 작업하고 있는 브랜치의 상위 브랜치(기본 브랜치)로 간다.
   $ git checkout develop
   
   2. 최신 작업파일들로 패치해준다.
   $ git pull origin develop
   
   3. 충돌이 났던 가지로 간다.
   $ git checkout [브랜치명]
   
   4. 머지를 해서 충돌이 난 부분을 고쳐준다.
   $ git merge develop
   
   그리고 나서 다시 git add, commit, push, pull request를 하면 해결
   
   해결을 다해서 pull request를 하기 전에 다른 사람이 올린게 새로 업데이트되서 master가 변경된다면 다시 충돌
   ```

5. 개발일정

   ![image-20200924230052301](README.assets/image-20200924230052301.png)

6. 홈페이지 예시

   `홈화면`

   ![image-20200924230734491](README.assets/image-20200924230734491.png)

   `홈화면2`

   ![image-20200924230755809](README.assets/image-20200924230755809.png)

   `통역신청리스트`

   ![image-20200924230829868](README.assets/image-20200924230829868.png)

   `통역디테일`

   ![image-20200924230846408](README.assets/image-20200924230846408.png)

   `통역가 등록`

   ![image-20200924230927406](README.assets/image-20200924230927406.png)