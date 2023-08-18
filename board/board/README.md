Next.js 로 게시판 만들기

DB입출력 코드는 서버 컴포넌트 안에서 작성하는 것이 좋습니다.
클라이언트 컴포넌트 안에 있는 코드는 유저 브라우저로 전달이 되기 때문에,
민감한 코드들을 클라이언트 컴포넌트에 저장하는 것은 좋지 않은 선택 -> 서버 컴포넌트안에 작성

Link 태그 vs useRouter
Link태그로 페이지 이동이 편한대 왜 useRouter를 사용하는가?

let router = useRouter()

단순 페이지 이동 말고 router.back() 뒤로가기 , router.forward(), router.refresh() 등 앞으로가기 등 여러 기능들을 사용할수 있습니다.

router.prefetch() 페이지 미리로드 기능은 Link 태그에서도 내장되어있습니다.

1. 여러 페이지를 만드려면 Dynamic Route
2. 현재 URL을 아는 방법 props / useRouter

3-tier architecture
유저가 DB에 글을 저장하고 싶을때 바로 DB로 저장하는것이 아닌, 서버에 전송을하고 
서버는 글을 받으면 검사 후 별 이상없으면 DB에 저장
서버 : 유저의 요청을 들어주는 프로그램