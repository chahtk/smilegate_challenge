## 프로젝트 개요

회원가입, 로그인, 관리자 페이지가 구현됐습니다.

- 사용자는 회원가입 페이지에서 이메일 인증을 한 후, 비밀번호, 유저이름 입력을 하여 회원가입을 마칠 수 있습니다.
- 로그인 페이지에서는 알맞은 이메일과 비밀번호를 입력해야 합니다.
- 로그인에 성공하면 메인 페이지로 이동합니다.
- admin user는 admin 버튼을 누르면 현재 가입한 유저들의 리스트를 볼 수 있습니다.

<br>
<br>

## 아키텍처

### 인증 서버

![시스템아키텍처 복사본](https://user-images.githubusercontent.com/44664867/146670267-921dd2d6-6377-4d32-ade8-ef12e5064226.JPG)

<br>
<br>

### 추후 API 서버 구현시의 MSA 아키텍처

![architecture](https://user-images.githubusercontent.com/44664867/146127014-9ac5cb2c-db5f-435a-a8c8-dca4baea706e.JPG)

<br>
<br>

## Auth DB ERD

<img width="180" alt="ERD" src="https://user-images.githubusercontent.com/44664867/146677521-03a57592-4259-43fa-a38e-f24fa567fa34.png">

현재 인증을 위한 User 테이블 밖에 없음.

- emial : PK
- password : 암호화를 고려하여 데이터 길이를 정함
- admin : admin이면 1, 아니면 0

<br>
<br>

## 시나리오

### 회원가입

- client로 부터 email을 받으면 랜덤한 인증코드를 생성한다.
- server는 메일과 인증코드를 redis(캐시 서버)에 저장하고, 동시에 해당 메일에 인증코드를 전송한다.
- client가 정상적인 인증코드를 보내면, server는 메일인증 성공에 대한 토큰을 응답으로 보내준다(지속 시간 짧게).
- client는 인증 토큰으로 회원가입을 진행한다(유저이름, 패스워드)
- client로부터 온 정보를 db(User table)에 저장한다.

<br>

메일 인증 및 회원가입 실패: 중복된 아이디

![signupfail](https://user-images.githubusercontent.com/44664867/146671016-b58dfa9c-2dfe-48a7-92d7-c85357872a87.gif)

<br>

회원가입 성공

![signupok](https://user-images.githubusercontent.com/44664867/146671017-dc08e6a8-9ec5-462c-a309-6def28b5c55f.gif)

<br>

### 로그인

- client로부터 email, password를 받으면, db에서 조회해 이를 검증한다.
- 검증 성공시 성공적인 인증에 대한 토큰을 생성하여 넘겨준다.
- client는 main page로 이동하고, 토큰을 이용해 서비스를 이용할 수 있다.

<br>

로그인, 로그아웃

![loginlogout](https://user-images.githubusercontent.com/44664867/146671013-44ce2231-56c4-430e-b2da-3ad1998ae6de.gif)

<br>

### 관리자 페이지

- 현재 페이지를 별도로 구현하지 않았고, 메인 페이지에서 admin button을 누르면 현재 가입된 유저리스트를 확인할 수 있다.

<br>

관리자 기능

![loginadmin](https://user-images.githubusercontent.com/44664867/146671015-95fbe931-0a05-4179-932e-13c27ccbd3cd.gif)

<br>
<br>

## 프론트엔드 디렉토리구조

```
- src
|
|------- UI 관련 -------
|--- components : 재사용 가능한 가장 작은 단위
|--- container  : data, state로 component를 다룸
|--- layout     : 디자인을 고려하여 container들을 배치
|--- pages      : 라우터에 의해 호출되며 layout 렌더링
|--- routes     : 로그인 상태에 따라 구분
|
|-------  그 외  --------
|--- modules    : redux modules
|--- styleds    : style 관련
|--- api        : api 관련
|
```

- component : 어디서든 사용 가능해야함.
- container : 용도가 정해진 컴포넌트. 독립적이어야 함.
- layout : 컴포넌트들을 디자인에 맞춰 배치. 한 페이지에 복수의 레이아웃이 있을 수 있음. (e.g. nav, main 따로 하고 index에서 합치기)

<br>
<br>

## 백엔드 디렉토리구조

```
- src
|
|--- bin        : http server setting
|--- config     : config
|--- uitls      : functions
|--- routes     : routers
|--- controller : req 적절한지 체크, 응답
|--- services   : business logic
|--- models     : CRUD from mysql, redis
```

<br>
<br>

## 회고

### KEEP

- TypeScript, Redux, Redis 등 새로운 것에 대한 <b>도전</b>을 멈추지 않았다 :)
- cors 문제가 터졌을 때 조급하게 코드 복붙만 하지 않고 이슈의 원인을 파악하려고 노력했다!
- 코드 품질을 위해 디렉토리 구조를 나누기 위해 노력했고, 중간중간 리팩토링을 꾸준히 해주었다.

### Problem

- 이슈에 대한 <b>문서 정리</b>를 하지 못했다. cors 이슈만 해도 지난 번에 비슷한 문제를 겪었다.
- 프론트 사이드에서 <b>에러 핸들링</b>에 대해 꼼꼼히 처리하지 못한 것 같다.

### Try

> 조급함 때문에 '무지성 코딩'은 멈춰!!

<i>이슈를 기록하자!</i>

- 이전 프로젝트로부터 반복된 cors 이슈도 결국 그 순간에 문서 정리를 하고 넘어갔다면 개념을 확실히 깨달았을 것이고, 시간이 지나 기억나지 않더라도 내가 작성한 문서를 보며 되새김질이 됐을 것이다. 아래는 notion에 간단하게 정리한 `cors` 이슈!

  ![issue](https://user-images.githubusercontent.com/44664867/146725232-85622b82-8030-4b99-be71-525ebcd949b8.png)

<br>

<i>에러 핸들링</i>

- 이건 개발하면서 느낀 건데 에러 핸들링을 해주지 않으면 개발자 도구 없이는 문제가 일어난지도 모르겠더라...
- 개발 생산성을 위해서라도, 또 사용자 경험 향상을 위해서라도 에러 핸들링에 신경 쓰자!
