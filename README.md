# JJal
### 짤 업로드해 공유하는 공간
#### 저희의 서비스가 궁금하시다면
#### 유튜브주소~~~~~~~~~~~~~~~~~~~~~~~~~~
#### 도메인주소~~~~~~~~~~~~~~~~~~~~~~~~~~

## 🧑🏻‍💻 제작 기간 및 팀원 소개
#### 기간 : 2021년 12월 6일 ~ 2021년 12월 11일
#### Backend(Node.js)
- 한동훈 : login + signup
- 정하나 : post + main + myPage
- 김다희 : comment + like
#### Frontend(React)
- 임찬수 
- 이주형 


## 🛠 사용 기술
#### Languages
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
#### Frameworks, Platforms and Libraries
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
#### IDEs/Editors
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
#### Version Control
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
#### Hosting/SaaS
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
#### Databases
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
#### Other
![Notion](https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)


## 🎢 API 설계
#### user
- Post /api/users/auth
- Post /api/users/users
- Post Ip/api/users/checkId
#### post
- Post /api/posts/lists
- Post /api/posts
- Post /api/posts/details
- Post /api/posts/search/tag
- Post /api/posts/uploadfile
- Delete /api/posts:postId
#### comment
- Post /api/comment/
- Put /api/comment/detail
- Delete /api/comment/detail
- Post /api/comment/detail
#### like
- Post /api/like/likes
- Post /api/like/likes
#### myPage
- Post /api/users/likeImg
- Post /api/users/myPostImgs


## 📜 핵심기능
#### 로그인/회원가입
- JWT를 이용하여 로그인과 회원가입 구현
- 아이디가 3글자 이상, 숫자, 영문자 소/대문자로만 구성
- 비밀번호가 4글자 이상, 숫자, 영문자 소/대문자로만 구성
- 비밀번호에 아이디가 포함되면 회원가입 불가능
- 닉네임을 이미 사용중이면 회원 가입 불가능
#### 게시글 작성하기 CRUD
- 유저 본인의 생각을 담아 작성 가능
- 다른 유저의 게시글 조회 가능
- 유저 본인의 게시글은 삭제가능하며, 다른 유저의 리뷰글은 수정 불가능
#### 댓글 작성하기 CRUD
- 유저 본인의 생각을 담아 작성 가능
- 다른 유저의 댓글 조회 가능
- 유저 본인의 댓글을 수정가능하며, 다른 유저의 리뷰글은 수정 불가능
- 유저 본인의 댓글을 삭제가능하며, 다른 유저의 리뷰글은 수정 불가능


## 🤦🏻 프로젝트 중 힘들었던 점이 있다면
- DB형식을 통일하지 않고 각자 편한대로 만들었다가 ObjectId를 String으로 변환해야 하는데 꼬이는 일이 발생하여 TypeError, CastError 발생
- 갈수록 멍청해지는 내 머리...


## 💯 해결한 문제
1. res.locals 값으로 받으려 하였는데 undefined 발생 > req.body로 받아옴


## 🍻 개인 회고
#### 한동훈 
#### 정하나
#### 김다희 https://cloud-cuckoo-land.tistory.com/

