Next.js study

Next.js 컴포넌트는 종류가 2가지 입니다.
1. server component 
2. client component : 파일 상단에 'use client' 라고 작성한 components

server VS client  component
 server component 에서는 자바스크립트 기능을 사용할 수 없음
(ex : onClick, useEffect, useState 등 불가)

 client component 안에서는 가능

 server component들은 페이지 로드에 필요한 자바스크립트 양이 훨씬 적어 로딩속도가 매우 빠릅니다. 검색엔진에서 이점이 있습니다.

 client component들은 페이지 로드에 자바스크립트 파일이 많이 필요해서 로딩 속도가 느려집니다. 
  hydration 과정을 거칩니다. React 문법을 쓰기 위해서 html을 유저에게 보낸 후에 자바스크립트로 html을 다시 React로 분석하는 작업

큰 페이지 들은 서버 컴포넌트로 만들고 그 안에 기능들이 필요한 부분들은 클라이언트 컴포넌트로 만듭니다.
자바스크립트 양도 줄일 수 있고, 로딩 속도 또한 줄일 수 있습니다.