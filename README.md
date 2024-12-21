# Slack Clone Study

## Backend Setting
0. Backend 정보
  - ./back 폴더 backend 관련 파일들 정리
1. Node.js 설치
  - Node Version Issue 로 인해 nvm 설치
  - Node Version 23.4.0 으로 진행
2. MySQL 설치
  - Version 8.0.40 으로 설치
  - PW 확인 필요!
3. backend 환경 구성
  - '$ cd back'
  - '$ npm i bcrypt && npm i'
  - .env 파일 작성
    - COOCKE_SECRET, MYSQL_PASSWORD 세팅
  - MYSQL 접속을 위한 config/config.json 설정
  - 스키마 생성을 위해 '$ npx sequelize db:create'
  - 테이블 생성을 위해 '$ npm run dev' 실행
  - 최초 데이터를 위해 '$ npx sequelize db:seed:all' 실행
  - '$ npm run dev' 를 통해 backend 서버 실행 및 localhost:3095에서 서버가 돌아가는것을 확인 가능
  - API.md와 typings/db.ts에 backend 관련 정보

## Frontend Setting

0. Create React App은 사용하지 않기
  - 하나씩 설치하면서 무엇인지 살펴보자
1. Node Project 초기화
  - '$ npm init'
  - package.json 파일 생성 
2. 필요한 라이브러리들 설치
  - react, react-dom
  - typescript, @types/react, @types/react-dom
3. 유용한 Tool 설치
  - eslint
    - '$ npm i -D eslint'
    - code 정적 도구 검사, 안쓰는 변수 등
    - .eslintrc 파일로 설정
  - prettierrc
    - '$ npm i -D prettier eslint-plugin-prettier eslint-config-prettier'
    - 코드 정렬 도구
    - .prettierrc 파일로 설정
4. typescript 설정
  - tsconfing.json 파일로 설정
  - typescript -> babel -> javascript
  - babel 을 사용해서 중간에 스타일 및 이미지 등들을 javascript 로 포함해준다.

5. Babel & Webpack 설정
  - webpack 설정
    - '$ npm i -D webpack @types/webpack @types/node'
    - '$ npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react'
    - $ npm i style-loader css-loader
    - 필요한 라이브러리들이 많은 하나 setting 파일을 만들어두고 재사용 하는게 편할 것 같음.
    - 'webpack.config.ts' 파일 확인
    - 확장자에 따라 파일 설정 ts->타입스크립트, js->자바스크립트
    - webpack의 entry 값을 통해서 app 진입점
      - 'app : client'
      - app.js 가 생성되며 이게 진입점
      - client.tsx 가 app.js 가 되는 것

6. index.html
  - slack을 그대로 활용
  - clinet.tsx 구현

7. ts, webpack 설정
  - '$ npm i cross-env'
  - package.json에 npm run build 명령어 설치
  - index.html 확인

8. 개발용 webpack dev 설치
  - hot reloading, proxy-server(CORS 방지) 등을 위해 dev를 사용하는 Node Runtime 필요
  - webpack-dev-server를 설치
9. hot reloading 설정
  - @pmmmwh/react-refresh-webpack-plugin' 등 설치
10. fork-ts-checker-webpack-plugin 설치
  - ts -> eslint를 수행하게 되는데 이를 동시에 수행
11. 폴더 구조
  - page : 서비스 페이지
  - layout : 페이지들간에 공통된 레이아웃
  - components : 공통된 작은 컴포넌트들
  - hooks, utils
  - 각 components는 해당 폴더 하위의 index.tsx, styles.tsx
12. ts, webpack에서 경로 alias 지정
  - '$ npm i -D tsconfig-paths'
  - tsconfig.json, webpack.config.ts 에서 설정
13. react-router 적용
  - '$ npm i react-router react-router-dom'
  - '$ npm i -D @types/react-router @types/react-router-dom'
  - client.tsx에서 App을 BrowserRouter로 감싸기!
  - historyApiFallback: True 옵션
    - single page 특성상 실제 서버는 localhost:port/login 인 인지 알 수 없음 그냥 index.html만 return
    - client측에선 이를 라우팅함 (windows.location 등의 정보를 통해)
    - [url] / [parameter]
14. 코드 스플리팅
  - 필요없는 컴포넌트는 굳이 지금 불러올 필요 없음 (lazy loading)
  - 어떤 컴포넌트를 불러와야하지?
  - 가장 쉬운방법은 지금 안쓰는 페이지
  - 부하가 큰 페이지(서버사이드 렌더링 안해야 하는 경우)
  -React.lazy, Suspense를 이용
15. emotion 세팅
  - react 는 js 에서 다 해준다는 컨셉 css 를 별도로 넣기 보다는 css in js 를 이용하자
  - emotion 이 설정이 간단하다.
  - 디자이너, 퍼블리셔와의 협업은?
    - react 자체가 협업하기 힘든 구조, css 모듈을 적용해야함. 
  - '$ npm i @emotion/react @emotion/styled'
  - '$ npm i -D @emotion/babel-plugin'